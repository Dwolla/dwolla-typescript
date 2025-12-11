/*
 * Minimal shared test setup
 */

import { Dwolla } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

// Cached values - minimal set
let _dwolla: Dwolla | undefined;
let _accountId: string | undefined;
let _initialized = false;
let _initError: Error | undefined;

/**
 * Creates and returns a configured Dwolla client for testing.
 */
export function createDwollaClient(testName: string): Dwolla {
  return new Dwolla({
    serverURL: "https://api-sandbox.dwolla.com",
    httpClient: createTestHTTPClient(testName),
    security: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "value",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "value",
    },
  });
}

/**
 * Extracts resource ID from Location header URL
 */
export function extractIdFromLocationHeader(
  headers: Record<string, string[]> | undefined
): string | undefined {
  const locationHeader = headers?.["Location"]?.[0] ?? headers?.["location"]?.[0];
  if (!locationHeader) return undefined;
  return new URL(locationHeader).pathname.split("/").pop();
}

/**
 * Minimal initialization - just gets the account ID.
 * Safe to call multiple times - only initializes once.
 */
async function initialize(): Promise<void> {
  if (_initialized) return;
  if (_initError) throw _initError;

  try {
    _dwolla = createDwollaClient("setup");

    // Get the account ID from the root endpoint - this is the only shared resource
    const root = await _dwolla.root.get();
    _accountId = new URL(root.links?.["account"]?.href ?? "").pathname
      .split("/")
      .pop();

    _initialized = true;
  } catch (error) {
    _initError = error as Error;
    throw error;
  }
}

/**
 * Returns the account ID associated with the API credentials.
 */
export async function getAccountId(): Promise<string> {
  await initialize();
  if (!_accountId) {
    throw new Error("Failed to retrieve account ID from root endpoint");
  }
  return _accountId;
}

/**
 * Returns a shared Dwolla client instance.
 */
export async function getSharedClient(): Promise<Dwolla> {
  await initialize();
  if (!_dwolla) {
    throw new Error("Failed to initialize Dwolla client");
  }
  return _dwolla;
}

// ============================================================================
// HELPER FUNCTIONS - Tests can use these to create resources they need
// ============================================================================

/**
 * Creates a Personal Verified Customer. Returns the customer ID.
 */
export async function createPersonalCustomer(dwolla: Dwolla): Promise<string> {
  const timestamp = Date.now();
  const result = await dwolla.customers.create({
    firstName: "Test",
    lastName: "Personal",
    email: `test+personal+${timestamp}@example.com`,
    type: "personal",
    address1: "9876 Million Dollar St",
    city: "Des Moines",
    state: "IA",
    postalCode: "50265",
    ssn: "123456789",
    dateOfBirth: "1980-01-01",
  });

  const customerId = extractIdFromLocationHeader(result?.headers);
  if (!customerId) throw new Error("Failed to create personal customer");
  return customerId;
}

/**
 * Creates a Business Verified Customer (LLC). Returns the customer ID.
 */
export async function createBusinessCustomer(dwolla: Dwolla): Promise<string> {
  const timestamp = Date.now();
  const result = await dwolla.customers.create({
    firstName: "Test",
    lastName: "Business",
    email: `test+llc+${timestamp}@example.com`,
    type: "business",
    address1: "9876 Million Dollar St",
    city: "Des Moines",
    state: "IA",
    postalCode: "50265",
    businessClassification: "9ed38155-7d6f-11e3-83c3-5404a6144203",
    businessName: "Typescript Test LLC",
    businessType: "llc",
    ein: "00-0000000",
    controller: {
      firstName: "Controller",
      lastName: "Person",
      title: "CEO",
      dateOfBirth: "1980-01-01",
      ssn: "1234",
      address: {
        address1: "1749 18th st",
        city: "Des Moines",
        stateProvinceRegion: "IA",
        postalCode: "50266",
        country: "US",
      },
    },
  });

  const customerId = extractIdFromLocationHeader(result?.headers);
  if (!customerId) throw new Error("Failed to create business customer");
  return customerId;
}

/**
 * Creates an Unverified Customer. Returns the customer ID.
 */
export async function createUnverifiedCustomer(dwolla: Dwolla): Promise<string> {
  const timestamp = Date.now();
  const result = await dwolla.customers.create({
    firstName: "Unverified",
    lastName: "Customer",
    type: "unverified",
    email: `test+unverified+${timestamp}@example.com`,
  });

  const customerId = extractIdFromLocationHeader(result?.headers);
  if (!customerId) throw new Error("Failed to create unverified customer");
  return customerId;
}

/**
 * Creates a Receive-Only Customer. Returns the customer ID.
 */
export async function createReceiveOnlyCustomer(dwolla: Dwolla): Promise<string> {
  const timestamp = Date.now();
  const result = await dwolla.customers.create({
    firstName: "ReceiveOnly",
    lastName: "Customer",
    type: "receive-only",
    email: `test+receiveonly+${timestamp}@example.com`,
  });

  const customerId = extractIdFromLocationHeader(result?.headers);
  if (!customerId) throw new Error("Failed to create receive-only customer");
  return customerId;
}

/**
 * Gets the balance funding source ID for a customer.
 */
export async function getBalanceFundingSourceId(
  dwolla: Dwolla,
  customerId: string
): Promise<string | undefined> {
  const fundingSources = await dwolla.customers.fundingSources.list({ id: customerId });
  const balanceFs = fundingSources.embedded?.fundingSources?.find(
    (fs) => fs.type === "balance"
  );
  return balanceFs?.id;
}

/**
 * Creates a bank funding source for a customer. Returns the funding source ID.
 * Uses sandbox test routing number (auto-verified).
 */
export async function createBankFundingSource(
  dwolla: Dwolla,
  customerId: string,
  name: string
): Promise<string> {
  const result = await dwolla.customers.fundingSources.create({
    id: customerId,
    createCustomerFundingSource: {
      routingNumber: "222222226",
      accountNumber: String(Date.now()), // Unique account number
      bankAccountType: "checking",
      name: name,
    },
  });

  // if a bank already exists, return the existing funding source id
  const fundingSourceId = extractIdFromLocationHeader(result?.headers);
  if (!fundingSourceId) throw new Error("Failed to create bank funding source");
  return fundingSourceId;
}

/**
 * Creates a verified bank funding source for a customer.
 * Initiates microdeposits and verifies them using sandbox test amounts.
 * Returns the funding source ID.
 */
export async function createVerifiedBankFundingSource(
  dwolla: Dwolla,
  customerId: string,
  name: string
): Promise<string> {
  // Create the bank funding source
  const fundingSourceId = await createBankFundingSource(dwolla, customerId, name);
  
  // Check if already verified (sandbox auto-verifies some accounts)
  const fs = await dwolla.fundingSources.get({ id: fundingSourceId });
  if (fs.status === "verified") {
    return fundingSourceId;
  }
  
  // Initiate microdeposits
  try {
    await dwolla.fundingSources.microDeposits.initiate({
      id: fundingSourceId,
    });
  } catch (e: unknown) {
    // May already have microdeposits initiated
    const error = e as { statusCode?: number };
    if (error.statusCode !== 400) {
      throw e;
    }
  }
  
  // Verify microdeposits with sandbox test amounts (0.00, 0.00)
  try {
    await dwolla.fundingSources.microDeposits.verify({
      id: fundingSourceId,
      requestBody: {
        amount1: {
          value: "0.02",
          currency: "USD",
        },
        amount2: {
          value: "0.03",
          currency: "USD",
        },
      },
    });
  } catch (e: unknown) {
    // May already be verified
    const error = e as { statusCode?: number };
    if (error.statusCode !== 400) {
      throw e;
    }
  }
  
  return fundingSourceId;
}

