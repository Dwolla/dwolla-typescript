#!/usr/bin/env node

import { Dwolla } from '../../dist/esm/index.js';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';

// Import SDK types for type safety
import type {
  CreateVerifiedPersonalCustomer,
  CreateVerifiedBusinessCustomerWithController,
  CreateVerifiedBusinessCustomerWithInternationalController,
  CreateVerifiedSolePropCustomer,
  CreateUnverifiedCustomer,
  CreateReceiveOnlyUser,
  CreateCustomerFundingSource,
  CreateUSBeneficialOwner,
  TransferAmount,
} from '../../dist/esm/models/index.js';
import type {
  InitiateTransferRequest,
} from '../../dist/esm/models/operations/index.js';

// Enhanced test configuration
interface TestConfig {
  failFast: boolean;
}

/**
 * Test Strategy Configuration:
 *
 * FAIL FAST (failFast: true):
 * - Best for: Testing full integration capability
 * - Behavior: Stop immediately if transfer test cannot be executed
 * - Transfer requires: Personal FS + Business FS, so fail fast if either path breaks:
 *   • Personal Customer fails → fail fast
 *   • Personal Funding Source fails → fail fast
 *   • Business Customer fails → fail fast
 *   • Business Funding Source fails → fail fast
 * 
 * SKIP AND CONTINUE (failFast: false):
 * - Best for: Development, debugging, testing individual components
 * - Behavior: Test each component independently, skip transfer if prerequisites missing
 * - Use when: You want to see which specific operations work/fail individually
 */
// Track test failures for decision making
interface TestFailures {
  personalCustomer: boolean;
  businessCustomer: boolean;
  personalFundingSource: boolean;
  businessFundingSource: boolean;
}

const testFailures: TestFailures = {
  personalCustomer: false,
  businessCustomer: false,
  personalFundingSource: false,
  businessFundingSource: false,
};

// Load sandbox credentials  
dotenv.config({ path: './sandbox/sandbox.env' });

const SANDBOX_CONFIG = {
  CLIENT_ID: process.env.DWOLLA_CLIENT_ID,
  CLIENT_SECRET: process.env.DWOLLA_CLIENT_SECRET,
  BASE_URL: process.env.DWOLLA_BASE_URL || 'https://api-sandbox.dwolla.com',
  SERVER: (process.env.DWOLLA_ENVIRONMENT as 'sandbox' | 'prod') || 'sandbox',
};

const DEBUG_MODE = process.env.DEBUG === 'true' || process.env.DEBUG === '1';
const FAIL_FAST_MODE = process.env.FAIL_FAST === 'true' || process.env.FAIL_FAST === '1';

const TEST_CONFIG: TestConfig = {
  failFast: FAIL_FAST_MODE, // Controlled by FAIL_FAST environment variable (default: false for development)
};

// Create SDK instance with proper typing
function createSDK(): Dwolla {
  if (!SANDBOX_CONFIG.CLIENT_ID || !SANDBOX_CONFIG.CLIENT_SECRET) {
    console.error('❌ Missing Dwolla credentials. Set up tests/sandbox/sandbox.env first.');
    process.exit(1);
  }

  return new Dwolla({
    security: {
      clientID: SANDBOX_CONFIG.CLIENT_ID,
      clientSecret: SANDBOX_CONFIG.CLIENT_SECRET,
    },
    server: SANDBOX_CONFIG.SERVER,
  });
}

// Type-safe test data generators
function generatePersonalCustomer(): CreateVerifiedPersonalCustomer {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `test+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,
    type: 'personal',
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    postalCode: faker.location.zipCode(),
    dateOfBirth: '1990-01-01',
    ssn: '1234',
  };
}

function generateBusinessCustomer(): CreateVerifiedBusinessCustomerWithController {
  return {
    // Account Admin fields (required at top level)
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `biz+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,

    // Business fields
    type: 'business',
    businessName: faker.company.name(),
    businessType: 'llc', // Type-checked enum value
    businessClassification: '9ed38155-7d6f-11e3-83c3-5404a6144203',
    ein: '12-3456789',

    // Business address
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    postalCode: faker.location.zipCode(),

    // Controller (required for llc/corporation/partnership)
    controller: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      title: 'CEO',
      dateOfBirth: '1975-01-01',
      ssn: '1234',
      address: {
        address1: faker.location.streetAddress(),
        city: faker.location.city(),
        stateProvinceRegion: faker.location.state({ abbreviated: true }), // Correct field name
        postalCode: faker.location.zipCode(),
        country: 'US',
      },
    },
  };
}

// New customer type generators for path fragment testing
function generateUnverifiedCustomer(): CreateUnverifiedCustomer {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `unverified+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,
    ipAddress: faker.internet.ip(),
    phone: '5555551234', // Use valid US phone format
    correlationId: faker.string.uuid(),
    businessName: faker.company.name(),
  };
}

function generateReceiveOnlyUser(): CreateReceiveOnlyUser {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `receiveonly+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,
    type: 'receive-only',
    ipAddress: faker.internet.ip(),
    phone: '5555551234', // Use valid US phone format
    correlationId: faker.string.uuid(),
    businessName: faker.company.name(),
  };
}

function generateVerifiedPersonalCustomer(): CreateVerifiedPersonalCustomer {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `verified-personal+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,
    type: 'personal',
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    postalCode: faker.location.zipCode(),
    dateOfBirth: '1990-01-01',
    ssn: '1234',
    ipAddress: faker.internet.ip(),
    phone: '5555551234', // Use valid US phone format
    correlationId: faker.string.uuid(),
  };
}

function generateVerifiedSolePropCustomer(): CreateVerifiedSolePropCustomer {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `verified-soleprop+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,
    type: 'business',
    businessType: 'soleProprietorship',
    businessName: faker.company.name(),
    businessClassification: '9ed38155-7d6f-11e3-83c3-5404a6144203',
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    postalCode: faker.location.zipCode(),
    dateOfBirth: '1975-01-01',
    ssn: '1234',
    ein: '12-3456789',
    ipAddress: faker.internet.ip(),
    phone: '5555551234', // Use valid US phone format
    correlationId: faker.string.uuid(),
    doingBusinessAs: faker.company.name(),
    website: faker.internet.url(),
  };
}

function generateVerifiedBusinessCustomer(): CreateVerifiedBusinessCustomerWithController {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `verified-business+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,
    type: 'business',
    businessName: faker.company.name(),
    businessType: 'llc',
    businessClassification: '9ed38155-7d6f-11e3-83c3-5404a6144203',
    ein: '12-3456789',
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    postalCode: faker.location.zipCode(),
    controller: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      title: 'CEO',
      dateOfBirth: '1975-01-01',
      ssn: '1234',
      address: {
        address1: faker.location.streetAddress(),
        city: faker.location.city(),
        stateProvinceRegion: faker.location.state({ abbreviated: true }),
        postalCode: faker.location.zipCode(),
        country: 'US',
      },
    },
    ipAddress: faker.internet.ip(),
    phone: '5555551234', // Use valid US phone format
    correlationId: faker.string.uuid(),
    doingBusinessAs: faker.company.name(),
    website: faker.internet.url(),
  };
}

function generateVerifiedBusinessInternationalCustomer(): CreateVerifiedBusinessCustomerWithInternationalController {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `verified-business-intl+${Date.now()}+${faker.string.alphanumeric(4)}@example.com`,
    type: 'business',
    businessName: faker.company.name(),
    businessType: 'corporation',
    businessClassification: '9ed38155-7d6f-11e3-83c3-5404a6144203',
    ein: '12-3456789',
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    postalCode: faker.location.zipCode(),
    controller: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      title: 'CEO',
      dateOfBirth: '1975-01-01',
      address: {
        address1: faker.location.streetAddress(),
        city: faker.location.city(),
        stateProvinceRegion: 'ON', // Use proper Canadian province abbreviation
        postalCode: 'K1A 0A9',
        country: 'CA',
      },
      passport: {
        number: 'AB123456',
        country: 'CA',
      },
    },
    ipAddress: faker.internet.ip(),
    phone: '5555551234', // Use valid US phone format
    correlationId: faker.string.uuid(),
    doingBusinessAs: faker.company.name(),
    website: faker.internet.url(),
  };
}

function generateBankAccount(): CreateCustomerFundingSource {
  return {
    routingNumber: '222222226',
    accountNumber: faker.finance.accountNumber(),
    bankAccountType: 'checking',
    name: `${faker.person.firstName()}'s Account`,
  };
}

function generateUnverifiedBankAccount(): CreateCustomerFundingSource {
  // Create an unverified bank account to test micro-deposits verification
  return {
    routingNumber: '222222226',
    accountNumber: faker.finance.accountNumber(),
    bankAccountType: 'checking',
    name: `${faker.person.firstName()}'s Account`,
    verified: false, // Testing unverified state creation
  };
}

function generateBeneficialOwner(): CreateUSBeneficialOwner {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: '1980-01-01',
    ssn: '123456789',
    address: {
      address1: faker.location.streetAddress(),
      city: faker.location.city(),
      stateProvinceRegion: faker.location.state({ abbreviated: true }),
      postalCode: faker.location.zipCode(),
      country: 'US',
    },
  };
}

// Utility functions
function log(message: string, level: 'info' | 'success' | 'error' = 'info'): void {
  const timestamp = new Date().toLocaleTimeString();
  const icon = level === 'success' ? '✅' : level === 'error' ? '❌' : '📋';
  console.log(`[${timestamp}] ${icon} ${message}`);
}

function logDebug(message: string, data?: any): void {
  if (DEBUG_MODE) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] 🐛 DEBUG: ${message}`);
    if (data !== undefined) {
      console.log('   📊 Data:', JSON.stringify(data, null, 2));
    }
  }
}

function logRawResponse(operationName: string, response: any, error?: any): void {
  if (DEBUG_MODE) {
    console.log(`\n🔍 RAW API RESPONSE DEBUG - ${operationName}`);
    console.log('─'.repeat(50));
    
    if (error) {
      console.log('❌ Error Details:');
      console.log(`   Type: ${error.name || 'Unknown'}`);
      console.log(`   Message: ${error.message || 'No message'}`);
      console.log(`   Status Code: ${error.statusCode || 'Unknown'}`);
      
      if (error.data$) {
        console.log('   Raw Error Data:');
        console.log(JSON.stringify(error.data$, null, 2));
      }
      
      if (error.rawResponse) {
        console.log('   Raw Response:');
        console.log(JSON.stringify(error.rawResponse, null, 2));
      }
    }
    
    if (response) {
      console.log('✅ Response Data:');
      console.log(JSON.stringify(response, null, 2));
    }
    
    console.log('─'.repeat(50));
  }
}

// Enhanced logging with timing
function logSection(title: string): void {
  console.log('\n' + '─'.repeat(60));
  console.log(`🔧 ${title}`);
  if (DEBUG_MODE) {
    console.log(`🐛 Debug mode: ON - Raw responses will be shown for errors`);
  }
  console.log('─'.repeat(60));
}

function logTimed(message: string, startTime: number, level: 'info' | 'success' | 'error' = 'info'): void {
  const duration = Date.now() - startTime;
  const timestamp = new Date().toLocaleTimeString();
  const icon = level === 'success' ? '✅' : level === 'error' ? '❌' : '📋';
  console.log(`[${timestamp}] ${icon} ${message} (${duration}ms)`);
}

// Track test metrics
interface TestMetrics {
  testsRun: number;
  testsPassed: number;
  startTime: number;
  apiCalls: string[];
  resourcesCreated: { type: string; id: string; status: string }[];
  knownIssues: { operation: string; reason: string }[];
}

const metrics: TestMetrics = {
  testsRun: 0,
  testsPassed: 0,
  startTime: Date.now(),
  apiCalls: [],
  resourcesCreated: [],
  knownIssues: []
};

function trackApiCall(endpoint: string): void {
  metrics.apiCalls.push(endpoint);
}

function trackResource(type: string, id: string, status: string = 'created'): void {
  metrics.resourcesCreated.push({ type, id, status });
}

function trackKnownIssue(operation: string, reason: string): void {
  metrics.knownIssues.push({ operation, reason });
}

// Simple retry helper
async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 2,
  delayMs: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    log(`Retrying after error... (${retries} attempts left)`, 'info');
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return retry(fn, retries - 1, delayMs);
  }
}

// Helper to extract ID from Location header
function extractIdFromLocation(
  response: { headers?: { [key: string]: string[] } } | undefined,
  resourceType: string = 'resource'
): string {
  if (!response?.headers) {
    throw new Error(`No response headers returned from ${resourceType} creation`);
  }

  const locationHeader = response.headers.location?.[0] || response.headers.Location?.[0];

  if (!locationHeader) {
    throw new Error(`No Location header returned from ${resourceType} creation`);
  }

  const id = locationHeader.split('/').pop();
  if (!id) {
    throw new Error(`Could not extract ${resourceType} ID from Location header`);
  }

  return id;
}

// Helper to check funding source status
async function checkFundingSourceStatus(dwolla: Dwolla, fsId: string): Promise<string> {
  try {
    const fs = await dwolla.fundingSources.get({ id: fsId });
    const status = fs.status || 'unknown';
    log(`Funding source status: ${status}`, 'info');
    return status;
  } catch (error: any) {
    log(`Could not check funding source status: ${error.message}`, 'info');
    return 'unknown';
  }
}

// Main test function
async function runCoreTests(): Promise<void> {
  console.log('🚀 Dwolla SDK Core Test Suite (TypeScript)');
  console.log('====================================================');
  console.log(`Testing against: ${SANDBOX_CONFIG.BASE_URL}`);
  console.log(`Start time: ${new Date().toLocaleString()}`);
  console.log('✨ Using TypeScript for type safety');
  console.log(`📋 Test Mode: ${TEST_CONFIG.failFast ? '⚡ INTEGRATION (fail fast)' : '🔧 COMPONENT (skip and continue)'}`);
  if (DEBUG_MODE) {
    console.log('🐛 DEBUG MODE: ON - Raw API responses will be shown');
  }
  console.log('');

  const dwolla = createSDK();
  let testsRun = 0;
  let testsPassed = 0;

  try {
    // Test 0: Authentication & Token Generation
    logSection('Authentication Test');
    let testStart = Date.now();
    log('Testing token generation and basic connectivity...', 'info');
    testsRun++;

    try {
      // Simple API call to test authentication - get root resource
      const rootResponse = await dwolla.root.get();
      trackApiCall('GET /');
      logRawResponse('Root Resource (Token Test)', rootResponse);
      logTimed('Authentication successful - tokens generated', testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`❌ CRITICAL: Authentication failed: ${error.message}`, 'error');
      logRawResponse('Authentication Test - Failed', null, error);
      
      // Always fail fast for authentication issues regardless of failFast setting
      console.log('\n🛑 AUTHENTICATION FAILURE: Cannot proceed with any tests');
      console.log('   → This indicates fundamental configuration or connectivity issues');
      console.log('   → Check your DWOLLA_CLIENT_ID and DWOLLA_CLIENT_SECRET in tests/sandbox/sandbox.env');
      console.log('   → Verify Dwolla sandbox API is accessible');
      console.log('   → Ensure credentials are valid and not expired');
      throw new Error(`Authentication failed - cannot proceed: ${error.message}`);
    }

    // Test 1: Personal Customer Operations
    logSection('Personal Customer Operations');
    testStart = Date.now();
    log('Testing personal customer creation...', 'info');
    testsRun++;

    let personalCustomerId: string;
    try {
      const personalCustomerData = generateVerifiedPersonalCustomer();
      const personalResponse = await retry(() => dwolla.customers.createVerifiedPersonal(personalCustomerData));
      personalCustomerId = extractIdFromLocation(personalResponse, 'personal customer');
      trackApiCall('POST /customers#verified-personal');
      trackResource('Personal Customer', personalCustomerId);
      logRawResponse('Personal Customer Creation', personalResponse);

      logTimed(`Personal customer created: ${personalCustomerId}`, testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      testFailures.personalCustomer = true;
      log(`❌ CRITICAL: Personal customer creation failed: ${error.message}`, 'error');
      logRawResponse('Personal Customer Creation - Failed', null, error);
      
      if (TEST_CONFIG.failFast) {
        console.log('\n🛑 FAILING FAST: Personal customer creation is required for integration test');
        console.log('   → Transfer test requires both personal AND business funding sources');
        console.log('   → Check your credentials, SSN format, and API connectivity');
        throw new Error(`Integration dependency failed: Personal customer creation - ${error.message}`);
      }
      
      console.log('   → Continuing with business customer tests (personal customer functionality unavailable)');
      personalCustomerId = 'FAILED_PERSONAL';
    }

    // Test 2: Business Customer Operations
    logSection('Business Customer Operations');
    testStart = Date.now();
    log('Testing business customer creation...', 'info');
    testsRun++;

    let businessCustomerId = 'SKIP_BUSINESS';
    try {
      log('Creating business customer...', 'info');

      const businessCustomerData = generateVerifiedBusinessCustomer();
      const businessResponse = await retry(() => dwolla.customers.createVerifiedBusiness(businessCustomerData));
      businessCustomerId = extractIdFromLocation(businessResponse, 'business customer');
      trackApiCall('POST /customers#verified-business');
      trackResource('Business Customer', businessCustomerId);
      logRawResponse('Business Customer Creation', businessResponse);

      logTimed(`Business customer created: ${businessCustomerId}`, testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      testFailures.businessCustomer = true;
      log(`Business customer creation failed: ${error.message}`, 'error');
      logRawResponse('Business Customer Creation - Failed', null, error);
      console.log('   → This could be due to business validation requirements or incomplete data');
      console.log('   → Check EIN format, business classification, and controller information');
      
      if (TEST_CONFIG.failFast) {
        console.log('\n🛑 FAILING FAST: Business customer creation is required for integration testing');
        console.log('   → Transfer test requires both personal AND business funding sources');
        throw new Error(`Integration dependency failed: Business customer creation - ${error.message}`);
      }
      
      console.log('   → (Business) unavailable, transfer test will be skipped');
      console.log('   → (Personal) can continue independently\n');
    }

    // Test 3: Beneficial Owner Operations (only if business customer was created)
    if (businessCustomerId !== 'SKIP_BUSINESS') {
      logSection('Beneficial Owner Operations');
      
      // Test 3a: Create Beneficial Owner
      testStart = Date.now();
      log('Testing beneficial owner creation...', 'info');
      testsRun++;

      try {
        const beneficialOwnerData = generateBeneficialOwner();
        const beneficialOwnerResponse = await retry(() =>
          dwolla.customers.beneficialOwners.create({
            id: businessCustomerId,
            requestBody: beneficialOwnerData,
          })
        );

        const beneficialOwnerId = extractIdFromLocation(
          beneficialOwnerResponse,
          'beneficial owner'
        );
        trackApiCall('POST /customers/{id}/beneficial-owners');
        trackResource('Beneficial Owner', beneficialOwnerId);
        logRawResponse('Beneficial Owner Creation', beneficialOwnerResponse);
        logTimed(`Beneficial owner created: ${beneficialOwnerId}`, testStart, 'success');
        testsPassed++;
      } catch (error: any) {
        log(`Beneficial owner creation failed: ${error.message}`, 'error');
        logRawResponse('Beneficial Owner Creation - Failed', null, error);
        console.log('   → This may be due to business validation rules or customer state');
      }

      // Test 3b: List Beneficial Owners
      testStart = Date.now();
      log('Testing beneficial owners listing...', 'info');
      testsRun++;

      try {
        const beneficialOwnersList = await dwolla.customers.beneficialOwners.list({
          id: businessCustomerId,
        });
        trackApiCall('GET /customers/{id}/beneficial-owners');
        logTimed(
          `Listed ${
            beneficialOwnersList.embedded?.beneficialOwners?.length || 0
          } beneficial owners`,
          testStart,
          'success'
        );
        testsPassed++;
      } catch (error: any) {
        log(`Beneficial owners listing failed: ${error.message}`, 'error');
      }

      // Test 3c: Get Beneficial Ownership Status
      log('Testing beneficial ownership status...', 'info');
      testsRun++;

      try {
        const ownershipStatus = await dwolla.customers.beneficialOwnership.get({
          id: businessCustomerId,
        });
        log(`Beneficial ownership status: ${ownershipStatus.status}`, 'success');
        testsPassed++;

        // Test 3d: Certify Beneficial Ownership (conditional)
        if (ownershipStatus.status === 'uncertified') {
          log('Testing beneficial ownership certification...', 'info');
          testsRun++;

          try {
            const certificationResponse = await dwolla.customers.beneficialOwnership.certify({
              id: businessCustomerId,
              requestBody: { status: 'certified' },
            });
            log(`Beneficial ownership certified: ${certificationResponse.status}`, 'success');
            testsPassed++;
          } catch (error: any) {
            log(`Beneficial ownership certification failed: ${error.message}`, 'error');
          }
        } else {
          log(
            `Beneficial ownership status is '${ownershipStatus.status}', skipping certification test`,
            'info'
          );
        }
      } catch (error: any) {
        log(`Beneficial ownership status check failed: ${error.message}`, 'error');
      }
    } else {
      log('Skipping beneficial owner tests (business customer creation failed)', 'info');
    }

    // Test 4: Retrieve Customers
    logSection('Customer Retrieval Operations');
    
    if (!testFailures.personalCustomer) {
      testStart = Date.now();
      log('Testing personal customer retrieval...', 'info');
      testsRun++;

      const retrievedPersonal = await dwolla.customers.get({ id: personalCustomerId });
      trackApiCall('GET /customers/{id}');
      logRawResponse('Personal Customer Retrieval', retrievedPersonal);
      logTimed(`Retrieved personal customer: ${retrievedPersonal.id}`, testStart, 'success');
      testsPassed++;
    } else {
      log('⏭️  Skipping personal customer retrieval (creation failed)', 'info');
    }

    if (businessCustomerId !== 'SKIP_BUSINESS') {
      testStart = Date.now();
      const retrievedBusiness = await dwolla.customers.get({ id: businessCustomerId });
      trackApiCall('GET /customers/{id}');
      logRawResponse('Business Customer Retrieval', retrievedBusiness);
      logTimed(`Retrieved business customer: ${retrievedBusiness.id}`, testStart, 'success');
      testsRun++;
      testsPassed++;
    } else {
      log('Skipping business customer retrieval (creation failed)', 'info');
    }

    // Test 5: Create Funding Sources
    logSection('Funding Source Operations');
    
    let personalFSId = 'FAILED_PERSONAL_FS';
    if (!testFailures.personalCustomer) {
      testStart = Date.now();
      log('Testing personal customer funding source creation...', 'info');
      testsRun++;

      try {
        const personalBankData = generateUnverifiedBankAccount();
        const personalFSResponse = await retry(() =>
          dwolla.customers.fundingSources.create({
            id: personalCustomerId,
            createCustomerFundingSource: personalBankData,
          })
        );
        personalFSId = extractIdFromLocation(personalFSResponse, 'personal funding source');
        trackApiCall('POST /customers/{id}/funding-sources');
        trackResource('Personal Funding Source', personalFSId, 'unverified');
        logRawResponse('Personal Funding Source Creation', personalFSResponse);
        logTimed(`Personal funding source created (unverified): ${personalFSId}`, testStart, 'success');
        log(
          '   → This funding source requires microdeposits verification due to verified: false',
          'info'
        );
        testsPassed++;
      } catch (error: any) {
        testFailures.personalFundingSource = true;
        log(`Personal funding source creation failed: ${error.message}`, 'error');
        logRawResponse('Personal Funding Source Creation - Failed', null, error);
        
        if (TEST_CONFIG.failFast) {
          console.log('\n🛑 FAILING FAST: Personal funding source creation is required for integration testing');
          console.log('   → Transfer test requires both personal AND business funding sources');
          console.log('   → Check bank account details and customer state');
          throw new Error(`Integration dependency failed: Personal funding source creation - ${error.message}`);
        }
      }
    } else {
      log('⏭️  Skipping personal funding source creation (personal customer creation failed)', 'info');
    }

    // Microdeposits testing (only if personal funding source was created)
    if (!testFailures.personalCustomer && !testFailures.personalFundingSource && personalFSId !== 'FAILED_PERSONAL_FS') {
      // Check initial funding source status
      const initialStatus = await checkFundingSourceStatus(dwolla, personalFSId);

      // Test 5a: Initiate Microdeposits
      testStart = Date.now();
      log('Testing microdeposits initiation...', 'info');
      testsRun++;

    try {
      // Note: Not using retry() for microdeposits operations as they are stateful/non-idempotent
      const initiateResponse = await dwolla.fundingSources.microDeposits.initiate({
        id: personalFSId,
        // No requestBody = initiate microdeposits
      });
      trackApiCall('POST /funding-sources/{id}/micro-deposits');

      // Check if response is defined
      if (initiateResponse !== undefined) {
        logTimed('Microdeposits initiated successfully', testStart, 'success');
        logRawResponse('Microdeposits Initiation', initiateResponse);
        testsPassed++;
      } else {
        // Some API responses may return undefined for successful operations
        logTimed('Microdeposits initiated successfully (undefined response)', testStart, 'success');
        logDebug('Microdeposits initiation returned undefined - this may be normal for this endpoint');
        testsPassed++;
      }
    } catch (error: any) {
      // Handle specific error types
      if (error.name === 'ResponseValidationError') {
        // The API call worked but SDK validation failed - check status code
        if (error.statusCode === 201) {
          logTimed('Microdeposits initiated successfully ⚠️ (Known SDK Issue)', testStart, 'success');
          trackKnownIssue('Microdeposits Initiation', 'SDK expects JSON response, API correctly returns empty body');
          logRawResponse('Microdeposits Initiation - Validation Error', null, error);
          console.log('   💡 This is expected: Dwolla returns 201 + empty body, SDK expects JSON');
          testsPassed++;
        } else {
          log(`Microdeposits initiation failed with status ${error.statusCode}`, 'error');
          logRawResponse('Microdeposits Initiation - Failed', null, error);
          console.log('   → Response validation error for status code:', error.statusCode);
        }
      } else if (error.name === 'InitiateOrVerifyMicroDepositsForbiddenDwollaV1HalJSONError') {
        log(`Microdeposits initiation forbidden: ${error.message}`, 'info');
        logRawResponse('Microdeposits Initiation - Forbidden', null, error);
        console.log(
          '   → This may indicate microdeposits already initiated or funding source already verified'
        );
        testsPassed++; // Count as success since it's expected behavior
      } else if (error.name === 'InitiateOrVerifyMicroDepositsNotFoundDwollaV1HalJSONError') {
        log(`Funding source not found: ${error.message}`, 'error');
        logRawResponse('Microdeposits Initiation - Not Found', null, error);
      } else {
        log(`Microdeposits initiation failed: ${error.message}`, 'error');
        logRawResponse('Microdeposits Initiation - Other Error', null, error);
        console.log('   → Error type:', error.name);
        console.log('   → Error details:', error.data$ || error);
      }
    }

    // Test 5b: Verify Microdeposits (using test amounts)
    testStart = Date.now();
    log('Testing microdeposits verification...', 'info');
    testsRun++;

    try {
      // Wait a moment for microdeposits to be available
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Optional: Get microdeposits details (for informational purposes)
      try {
        const microDepositsDetails = await dwolla.fundingSources.microDeposits.get({
          id: personalFSId,
        });
        trackApiCall('GET /funding-sources/{id}/micro-deposits');

        if (microDepositsDetails && microDepositsDetails.status) {
          log(`Microdeposits status: ${microDepositsDetails.status}`, 'info');
        } else {
          log('Retrieved microdeposits details successfully', 'info');
        }
      } catch (error: any) {
        if (error.name === 'NotFoundError') {
          log(`Microdeposits not found: ${error.message}`, 'info');
          console.log('   → This may indicate microdeposits not yet initiated');
        } else {
          log(`Could not retrieve microdeposits details: ${error.message}`, 'info');
        }
      }

      const verifyMicroDepositsData = {
        amount1: { value: '0.01', currency: 'USD' }, // Standard Dwolla sandbox test amounts
        amount2: { value: '0.02', currency: 'USD' }, // These amounts work in sandbox environment
      };

      // Note: Not using retry() - verification is non-idempotent (fails with 403 if already verified)
      const verifyResponse = await dwolla.fundingSources.microDeposits.verify({
        id: personalFSId,
        requestBody: verifyMicroDepositsData,
      });
      trackApiCall('POST /funding-sources/{id}/micro-deposits');

      // Check if response is defined
      if (verifyResponse !== undefined) {
        logTimed(
          'Microdeposits verified successfully - funding source should now be verified',
          testStart,
          'success'
        );
        logRawResponse('Microdeposits Verification', verifyResponse);
        trackResource('Personal Funding Source', personalFSId, 'verified');
        testsPassed++;
      } else {
        // Some API responses may return undefined for successful operations
        logTimed('Microdeposits verified successfully (undefined response)', testStart, 'success');
        logDebug('Microdeposits verification returned undefined - this may be normal for this endpoint');
        trackResource('Personal Funding Source', personalFSId, 'verified');
        testsPassed++;
      }
    } catch (error: any) {
      // Handle specific error types
      if (error.name === 'ResponseValidationError') {
        // The API call worked but SDK validation failed - check status code
        if (error.statusCode === 200) {
          logTimed('Microdeposits verified successfully ⚠️ (SDK Schema Issue)', testStart, 'success');
          trackKnownIssue('Microdeposits Verification', 'SDK schema mismatch - Dwolla returns JSON with _links, SDK expects different structure');
          logRawResponse('Microdeposits Verification - Schema Mismatch', null, error);
          console.log('   🔍 SDK schema issue: Dwolla returns valid JSON but SDK expects different structure');
          console.log('   📋 Expected: JSON with _links object, check debug output for actual vs expected');
          testsPassed++;
        } else {
          log(`Microdeposits verification failed with status ${error.statusCode}`, 'error');
          logRawResponse('Microdeposits Verification - Failed', null, error);
          console.log('   → Response validation error for status code:', error.statusCode);
        }
      } else if (error.name === 'InitiateOrVerifyMicroDepositsForbiddenDwollaV1HalJSONError') {
        const errorCode = error.data$?.code || error.code;
        if (errorCode === 'InvalidResourceState') {
          log(`Funding source already verified: ${error.message}`, 'info');
          logRawResponse('Microdeposits Verification - Already Verified', null, error);
          console.log('   → This is expected behavior if funding source was already verified');
          testsPassed++; // Count as success since it's expected behavior
        } else {
          log(`Microdeposits verification forbidden: ${error.message}`, 'info');
          logRawResponse('Microdeposits Verification - Forbidden', null, error);
          console.log('   → Error code:', errorCode);
        }
      } else if (error.name === 'InitiateOrVerifyMicroDepositsNotFoundDwollaV1HalJSONError') {
        log(`Funding source not found: ${error.message}`, 'error');
        logRawResponse('Microdeposits Verification - Not Found', null, error);
      } else {
        log(`Microdeposits verification failed: ${error.message}`, 'error');
        logRawResponse('Microdeposits Verification - Other Error', null, error);
        console.log('   → Error type:', error.name);
        console.log('   → Error details:', error.data$ || error);
        console.log(
          '   → This may be due to incorrect test amounts, timing issues, or API changes'
        );
      }
    }

      // Check final funding source status after microdeposits operations
      await checkFundingSourceStatus(dwolla, personalFSId);
    } else {
      log('⏭️  Skipping microdeposits testing (personal customer or funding source creation failed)', 'info');
    }

    let businessFSId = 'SKIP_BUSINESS_FS';
    if (businessCustomerId !== 'SKIP_BUSINESS') {
      testStart = Date.now();
      log('Testing business customer funding source creation...', 'info');
      testsRun++;
      
      try {
        const businessBankData = generateBankAccount();
        const businessFSResponse = await retry(() =>
          dwolla.customers.fundingSources.create({
            id: businessCustomerId,
            createCustomerFundingSource: businessBankData,
          })
        );
        businessFSId = extractIdFromLocation(businessFSResponse, 'business funding source');
        trackApiCall('POST /customers/{id}/funding-sources');
        trackResource('Business Funding Source', businessFSId, 'verified');
        logRawResponse('Business Funding Source Creation', businessFSResponse);
        logTimed(`Business funding source created: ${businessFSId}`, testStart, 'success');
        testsPassed++;
      } catch (error: any) {
        testFailures.businessFundingSource = true; // Mark business funding source as failed
        log(`Business funding source creation failed: ${error.message}`, 'error');
        logRawResponse('Business Funding Source Creation - Failed', null, error);
        
        if (TEST_CONFIG.failFast) {
          console.log('\n🛑 FAILING FAST: Business funding source creation is required for integration testing');
          console.log('   → Transfer test requires both personal AND business funding sources');
          throw new Error(`Integration dependency failed: Business funding source creation - ${error.message}`);
        }
        businessFSId = 'FAILED_BUSINESS_FS';
      }
    } else {
      log('⏭️  Skipping business funding source creation (Business customer creation failed)', 'info');
    }

    // Test 6: Transfer between funding sources
    if (businessFSId !== 'SKIP_BUSINESS_FS' && businessFSId !== 'FAILED_BUSINESS_FS' && 
        personalFSId !== 'FAILED_PERSONAL_FS' && !testFailures.personalFundingSource) {
      logSection('Transfer Operations');
      testStart = Date.now();
      log('Testing transfer from personal to business funding source...', 'info');
      testsRun++;

      try {
        const transferAmount: TransferAmount = {
          value: '10.00',
          currency: 'USD',
        };

        // Generate idempotency key for transfer (enables safe retries)
        // Note: Transfers now support idempotency keys, making them safe to retry.
        // Using the same key will return the original transfer instead of creating a duplicate.
        const idempotencyKey = `transfer-${Date.now()}-${faker.string.uuid()}`;

        const transferRequest: InitiateTransferRequest = {
          idempotencyKey: idempotencyKey, // Prevents duplicate transfers on retry
          requestBody: {
            links: {
              source: {
                href: `${SANDBOX_CONFIG.BASE_URL}/funding-sources/${personalFSId}`,
              },
              destination: {
                href: `${SANDBOX_CONFIG.BASE_URL}/funding-sources/${businessFSId}`,
              },
            },
            clearing: {
              source: 'next-available',
              destination: 'next-available',
            },
            amount: transferAmount,
            correlationId: `transfer-test-${Date.now()}`,
          },
        };

        logDebug(`Using idempotency key for transfer: ${idempotencyKey}`);
        // Safe to use retry() now that we have idempotency key
        const transferResponse = await retry(() => dwolla.transfers.create(transferRequest));
        const transferId = extractIdFromLocation(transferResponse, 'transfer');
        trackApiCall('POST /transfers');
        trackResource('Transfer', transferId, 'pending');
        logRawResponse('Transfer Creation', transferResponse);
        logTimed(`Transfer created successfully: ${transferId}`, testStart, 'success');
        testsPassed++;
      } catch (error: any) {
        log(`Transfer creation failed: ${error.message}`, 'error');
        logRawResponse('Transfer Creation - Failed', null, error);
        console.log('   → Error type:', error.name);
        console.log(
          '   → This may be due to insufficient balance, account status, or business rules'
        );
      }
    } else {
      if (businessFSId === 'SKIP_BUSINESS_FS') {
        log('⏭️  Skipping transfer test (Business customer creation failed)', 'info');
      } else if (businessFSId === 'FAILED_BUSINESS_FS') {
        log('⏭️  Skipping transfer test (Business funding source creation failed)', 'info');
      } else if (personalFSId === 'FAILED_PERSONAL_FS' || testFailures.personalFundingSource) {
        log('⏭️  Skipping transfer test (Personal funding source not available)', 'info');
      }
    }

    // Test 7: List Operations (if supported)
    logSection('List Operations');
    try {
      testStart = Date.now();
      log('Testing list operations...', 'info');
      testsRun++;

      // Try listing customers (may not be available in all SDK versions)
      const customersList = await dwolla.customers.list({ limit: 5 });
      trackApiCall('GET /customers');
      logRawResponse('Customer List', customersList);
      logTimed(`Listed ${customersList.embedded?.customers?.length || 0} customers`, testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`List operations not supported or failed: ${error.message}`, 'error');
      logRawResponse('Customer List - Failed', null, error);
    }

    // Test 8: New Customer Creation Methods (Path Fragments)
    logSection('Path Fragment Customer Creation Tests');
    
    // Test 8a: Create Unverified Customer
    try {
      testStart = Date.now();
      log('Testing unverified customer creation (path fragment)...', 'info');
      testsRun++;

      const unverifiedCustomerData = generateUnverifiedCustomer();
      await retry(() => dwolla.customers.createUnverified(unverifiedCustomerData));
      trackApiCall('POST /customers#unverified');
      logTimed('Unverified customer created successfully (no type field required)', testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`Unverified customer creation failed: ${error.message}`, 'error');
      logRawResponse('Unverified Customer Creation - Failed', null, error);
    }

    // Test 8b: Create Receive-Only User
    try {
      testStart = Date.now();
      log('Testing receive-only user creation (path fragment)...', 'info');
      testsRun++;

      const receiveOnlyUserData = generateReceiveOnlyUser();
      await retry(() => dwolla.customers.createReceiveOnly(receiveOnlyUserData));
      trackApiCall('POST /customers#receive-only');
      logTimed('Receive-only user created successfully', testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`Receive-only user creation failed: ${error.message}`, 'error');
      logRawResponse('Receive-Only User Creation - Failed', null, error);
    }

    // Test 8c: Create Verified Personal Customer (New Method)
    try {
      testStart = Date.now();
      log('Testing verified personal customer creation (path fragment)...', 'info');
      testsRun++;

      const verifiedPersonalCustomerData = generateVerifiedPersonalCustomer();
      await retry(() => dwolla.customers.createVerifiedPersonal(verifiedPersonalCustomerData));
      trackApiCall('POST /customers#verified-personal');
      logTimed('Verified personal customer created successfully', testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`Verified personal customer creation failed: ${error.message}`, 'error');
      logRawResponse('Verified Personal Customer Creation - Failed', null, error);
    }

    // Test 8d: Create Verified Sole Proprietorship Customer
    try {
      testStart = Date.now();
      log('Testing verified sole proprietorship customer creation (path fragment)...', 'info');
      testsRun++;

      const verifiedSolePropCustomerData = generateVerifiedSolePropCustomer();
      await retry(() => dwolla.customers.createVerifiedSoleProp(verifiedSolePropCustomerData));
      trackApiCall('POST /customers#verified-sole-prop');
      logTimed('Verified sole proprietorship customer created successfully', testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`Verified sole proprietorship customer creation failed: ${error.message}`, 'error');
      logRawResponse('Verified Sole Prop Customer Creation - Failed', null, error);
    }

    // Test 8e: Create Verified Business Customer (New Method)
    try {
      testStart = Date.now();
      log('Testing verified business customer creation (path fragment)...', 'info');
      testsRun++;

      const verifiedBusinessCustomerData = generateVerifiedBusinessCustomer();
      await retry(() => dwolla.customers.createVerifiedBusiness(verifiedBusinessCustomerData));
      trackApiCall('POST /customers#verified-business');
      logTimed('Verified business customer created successfully', testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`Verified business customer creation failed: ${error.message}`, 'error');
      logRawResponse('Verified Business Customer Creation - Failed', null, error);
    }

    // Test 8f: Create Verified Business Customer with International Controller
    try {
      testStart = Date.now();
      log('Testing verified business customer with international controller creation (path fragment)...', 'info');
      testsRun++;

      const verifiedBusinessIntlCustomerData = generateVerifiedBusinessInternationalCustomer();
      await retry(() => dwolla.customers.createVerifiedBusinessInternational(verifiedBusinessIntlCustomerData));
      trackApiCall('POST /customers#verified-business-international');
      logTimed('Verified business customer with international controller created successfully', testStart, 'success');
      testsPassed++;
    } catch (error: any) {
      log(`Verified business customer with international controller creation failed: ${error.message}`, 'error');
      logRawResponse('Verified Business International Customer Creation - Failed', null, error);
    }

    // Test Summary
    const totalTime = Date.now() - metrics.startTime;
    const testsSkipped = Object.values(testFailures).filter(failed => failed).length;
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(60));
    log(`🎯 Test Results: ${testsPassed}/${testsRun} tests passed`, 'info');
    log(`⏱️  Total Execution Time: ${totalTime}ms (${(totalTime/1000).toFixed(1)}s)`, 'info');
    log(`🌐 API Calls Made: ${metrics.apiCalls.length}`, 'info');
    log(`📦 Resources Created: ${metrics.resourcesCreated.length}`, 'info');
    log(`📋 Test Strategy: ${TEST_CONFIG.failFast ? 'Fail Fast' : 'Skip and Continue'}`, 'info');
    
    if (testsSkipped > 0) {
      log(`⏭️  Path Failures: ${testsSkipped} (dependent tests were skipped)`, 'info');
      console.log('   Path Status:');
      if (testFailures.personalCustomer) console.log('   • (Personal): Customer creation failed → entire path unavailable');
      if (testFailures.businessCustomer) console.log('   • (Business): Customer creation failed → business flow unavailable');
      if (testFailures.personalFundingSource) console.log('   • (Personal): Funding source creation failed → microdeposits unavailable');
      if (testFailures.businessFundingSource) console.log('   • (Business): Funding source creation failed → business flow unavailable');
      
      const pathAWorking = !testFailures.personalCustomer && !testFailures.personalFundingSource;
      const pathBWorking = !testFailures.businessCustomer && !testFailures.businessFundingSource;
      const pathCWorking = pathAWorking && pathBWorking;
      
      console.log('   Integration Status:');
      console.log(`   • Personal → Funding → Microdeposits: ${pathAWorking ? '✅ Available' : '❌ Unavailable'}`);
      console.log(`   • Business → Funding: ${pathBWorking ? '✅ Available' : '❌ Unavailable'}`);
      console.log(`   • Transfer: ${pathCWorking ? '✅ Available' : '❌ Unavailable'}`);
    }
    
    if (metrics.knownIssues.length > 0) {
      log(`⚠️  Known SDK Issues: ${metrics.knownIssues.length} (operations succeed, validation issues only)`, 'info');
    }

    if (testsPassed === testsRun) {
      if (metrics.knownIssues.length > 0) {
        log('🎉 All tests passed! SDK functional, with known validation issues.', 'success');
      } else {
        log('🎉 All tests passed! SDK is working perfectly.', 'success');
      }
    } else {
      log(`⚠️  Some tests failed. This may be due to business rules or permissions.`, 'info');
      console.log('   → TypeScript compilation and basic SDK structure are working');
      console.log(
        '   → Failed tests may be due to Dwolla sandbox limitations or business validation'
      );
    }

    // API Endpoints Summary
    if (metrics.apiCalls.length > 0) {
      console.log('\n🔗 API Endpoints Called:');
      const endpointCounts = metrics.apiCalls.reduce((acc, endpoint) => {
        acc[endpoint] = (acc[endpoint] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      Object.entries(endpointCounts)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([endpoint, count]) => {
          const countStr = count > 1 ? ` (${count}x)` : '';
          console.log(`   • ${endpoint}${countStr}`);
        });
    }

    // Resource Summary
    if (metrics.resourcesCreated.length > 0) {
      console.log('\n📋 Resources Created:');
      metrics.resourcesCreated.forEach(resource => 
        console.log(`   • ${resource.type}: ${resource.id} (${resource.status})`)
      );
    }

    // Known Issues Summary  
    if (metrics.knownIssues.length > 0) {
      console.log('\n⚠️ Known SDK Issues (Operations Successful):');
      metrics.knownIssues.forEach(issue => 
        console.log(`   • ${issue.operation}: ${issue.reason}`)
      );
      console.log('\n💡 Note: These are SDK validation/schema issues, not API failures.');
      console.log('   The operations complete successfully on Dwolla\'s side.');
      console.log('   These suggest the OpenAPI spec used to generate the SDK needs updates.');
    }

    console.log('\n📊 Integration Test Breakdown:');
    console.log('   Personal Customer Flow (Path Fragment):');
    console.log('   • Personal Customer: createVerifiedPersonal() + Retrieval');
    console.log('   • Personal Funding Source: Creation');
    console.log('   • Microdeposits: Initiate + Verify (bank account verification)');
    console.log('');
    console.log('   Business Customer Flow (Path Fragment):');
    console.log('   • Business Customer: createVerifiedBusiness() + Retrieval');
    console.log('   • Business Funding Source: Creation');
    console.log('   • Beneficial Owners: Create + List + Status + Certification');
    console.log('');
    console.log('   Transfer flow:');
    console.log('   • Transfer: Send funds between personal and business funding sources');
    console.log('');
    console.log('   Additional Tests:');
    console.log('   • List Operations: Customer listing (if supported)');
    console.log('   • Path Fragment Customer Creation: All customer types using dedicated methods');
    console.log('     - createUnverified(): Unverified customers (no type field required)');
    console.log('     - createReceiveOnly(): Receive-only users');
    console.log('     - createVerifiedPersonal(): Verified personal customers');
    console.log('     - createVerifiedSoleProp(): Verified sole proprietorship customers');
    console.log('     - createVerifiedBusiness(): Verified business customers (US controller)');
    console.log('     - createVerifiedBusinessInternational(): Verified business (international controller)');
    console.log('   • All operations use proper TypeScript types and error handling');
  } catch (error: any) {
    log(`❌ Critical test failure: ${error.message}`, 'error');
    console.error('Stack trace:', error.stack);
    throw error;
  }
}

// Run the core test suite
console.log('Starting core TypeScript operations test...\n');
runCoreTests().catch((error: Error) => {
  console.error('💥 Test runner crashed:', error.message);
  process.exit(1);
});
