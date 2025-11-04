# dwolla-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage _dwolla-typescript_
API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=dwolla-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />

> [!IMPORTANT]
> **Beta Release** - This SDK is currently in beta. Core operations including customer creation, funding sources, transfers, and beneficial ownership have been tested and are functional. We are conducting thorough internal testing of all operations before general availability. Please note that breaking changes may occur as we continue to make improvements. While suitable for development and testing, please use with appropriate caution in production environments.

<!-- Start Summary [summary] -->
## Summary

Dwolla API: Dwolla API Documentation
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [dwolla-typescript](#dwolla-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add dwolla
```

### PNPM

```bash
pnpm add dwolla
```

### Bun

```bash
bun add dwolla
```

### Yarn

```bash
yarn add dwolla
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.create({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                                         | Type   | Scheme                         | Environment Variable                                                 |
| -------------------------------------------- | ------ | ------------------------------ | -------------------------------------------------------------------- |
| `clientID`<br/>`clientSecret`<br/>`tokenURL` | oauth2 | OAuth2 Client Credentials Flow | `DWOLLA_CLIENT_ID`<br/>`DWOLLA_CLIENT_SECRET`<br/>`DWOLLA_TOKEN_URL` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.create({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounts](docs/sdks/accounts/README.md)

* [get](docs/sdks/accounts/README.md#get) - Retrieve account details

#### [accounts.exchanges](docs/sdks/accountsexchanges/README.md)

* [list](docs/sdks/accountsexchanges/README.md#list) - List exchanges for an account
* [create](docs/sdks/accountsexchanges/README.md#create) - Create an exchange for an account

#### [accounts.fundingSources](docs/sdks/accountsfundingsources/README.md)

* [create](docs/sdks/accountsfundingsources/README.md#create) - Create a funding source for an account
* [list](docs/sdks/accountsfundingsources/README.md#list) - List funding sources for an account

#### [accounts.massPayments](docs/sdks/accountsmasspayments/README.md)

* [list](docs/sdks/accountsmasspayments/README.md#list) - List account mass payments

#### [accounts.transfers](docs/sdks/accountstransfers/README.md)

* [list](docs/sdks/accountstransfers/README.md#list) - List and search account transfers

### [beneficialOwners](docs/sdks/beneficialowners/README.md)

* [get](docs/sdks/beneficialowners/README.md#get) - Retrieve beneficial owner
* [update](docs/sdks/beneficialowners/README.md#update) - Update beneficial owner
* [delete](docs/sdks/beneficialowners/README.md#delete) - Remove beneficial owner

#### [beneficialOwners.documents](docs/sdks/beneficialownersdocuments/README.md)

* [list](docs/sdks/beneficialownersdocuments/README.md#list) - List documents for beneficial owner
* [create](docs/sdks/beneficialownersdocuments/README.md#create) - Create a document for beneficial owner

### [businessClassifications](docs/sdks/businessclassifications/README.md)

* [list](docs/sdks/businessclassifications/README.md#list) - List business classifications
* [get](docs/sdks/businessclassifications/README.md#get) - Retrieve a business classification

### [clientTokens](docs/sdks/clienttokens/README.md)

* [create](docs/sdks/clienttokens/README.md#create) - Create a client token

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List and search customers
* [get](docs/sdks/customers/README.md#get) - Retrieve a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer
* [listAvailableConnections](docs/sdks/customers/README.md#listavailableconnections) - List available exchange connections
* [createUnverified](docs/sdks/customers/README.md#createunverified) - Create an unverified customer
* [createReceiveOnly](docs/sdks/customers/README.md#createreceiveonly) - Create a receive-only user
* [createVerifiedPersonal](docs/sdks/customers/README.md#createverifiedpersonal) - Create a verified personal customer
* [createVerifiedSoleProp](docs/sdks/customers/README.md#createverifiedsoleprop) - Create a verified sole proprietorship customer
* [createVerifiedBusiness](docs/sdks/customers/README.md#createverifiedbusiness) - Create a verified business customer
* [createVerifiedBusinessInternational](docs/sdks/customers/README.md#createverifiedbusinessinternational) - Create a verified business customer with international controller

#### [customers.beneficialOwners](docs/sdks/customersbeneficialowners/README.md)

* [list](docs/sdks/customersbeneficialowners/README.md#list) - List customer beneficial owners
* [create](docs/sdks/customersbeneficialowners/README.md#create) - Create customer beneficial owner

#### [customers.beneficialOwnership](docs/sdks/beneficialownership/README.md)

* [get](docs/sdks/beneficialownership/README.md#get) - Retrieve beneficial ownership status
* [certify](docs/sdks/beneficialownership/README.md#certify) - Certify beneficial ownership

#### [customers.documents](docs/sdks/customersdocuments/README.md)

* [list](docs/sdks/customersdocuments/README.md#list) - List documents for customer
* [create](docs/sdks/customersdocuments/README.md#create) - Create a document for customer

#### [customers.exchanges](docs/sdks/customersexchanges/README.md)

* [list](docs/sdks/customersexchanges/README.md#list) - List exchanges for a customer
* [create](docs/sdks/customersexchanges/README.md#create) - Create an exchange for a customer

#### [customers.exchangeSessions](docs/sdks/customersexchangesessions/README.md)

* [create](docs/sdks/customersexchangesessions/README.md#create) - Create customer exchange session

#### [customers.fundingSources](docs/sdks/customersfundingsources/README.md)

* [list](docs/sdks/customersfundingsources/README.md#list) - List customer funding sources
* [create](docs/sdks/customersfundingsources/README.md#create) - Create customer funding source

#### [customers.kba](docs/sdks/customerskba/README.md)

* [initiate](docs/sdks/customerskba/README.md#initiate) - Initiate a KBA session

#### [customers.labels](docs/sdks/customerslabels/README.md)

* [list](docs/sdks/customerslabels/README.md#list) - List labels for a customer
* [create](docs/sdks/customerslabels/README.md#create) - Create a label for a customer

#### [customers.massPayments](docs/sdks/customersmasspayments/README.md)

* [list](docs/sdks/customersmasspayments/README.md#list) - List mass payments for customer

#### [customers.transfers](docs/sdks/customerstransfers/README.md)

* [list](docs/sdks/customerstransfers/README.md#list) - List and search transfers for a customer

### [documents](docs/sdks/documents/README.md)

* [get](docs/sdks/documents/README.md#get) - Retrieve a document

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - List events
* [get](docs/sdks/events/README.md#get) - Retrieve event

### [exchangePartners](docs/sdks/exchangepartners/README.md)

* [list](docs/sdks/exchangepartners/README.md#list) - List exchange partners
* [get](docs/sdks/exchangepartners/README.md#get) - Retrieve exchange partner

### [exchanges](docs/sdks/exchanges/README.md)

* [get](docs/sdks/exchanges/README.md#get) - Retrieve exchange resource

#### [exchanges.exchangeSessions](docs/sdks/exchangesexchangesessions/README.md)

* [createReAuth](docs/sdks/exchangesexchangesessions/README.md#createreauth) - Create re-authentication exchange session

### [exchangeSessions](docs/sdks/exchangesessions/README.md)

* [get](docs/sdks/exchangesessions/README.md#get) - Retrieve exchange session

### [fundingSources](docs/sdks/fundingsources/README.md)

* [get](docs/sdks/fundingsources/README.md#get) - Retrieve a funding source
* [updateOrRemove](docs/sdks/fundingsources/README.md#updateorremove) - Update or remove a funding source
* [getVanRouting](docs/sdks/fundingsources/README.md#getvanrouting) - Retrieve VAN account and routing numbers

#### [fundingSources.balance](docs/sdks/balance/README.md)

* [get](docs/sdks/balance/README.md#get) - Retrieve funding source balance

#### [fundingSources.microDeposits](docs/sdks/microdeposits/README.md)

* [get](docs/sdks/microdeposits/README.md#get) - Retrieve micro-deposits details
* [initiate](docs/sdks/microdeposits/README.md#initiate) - Initiate micro-deposits
* [verify](docs/sdks/microdeposits/README.md#verify) - Verify micro-deposits

#### [fundingSources.onDemandTransferAuthorizations](docs/sdks/ondemandtransferauthorizations/README.md)

* [create](docs/sdks/ondemandtransferauthorizations/README.md#create) - Create an on-demand transfer authorization

### [kba](docs/sdks/kba/README.md)

* [getQuestions](docs/sdks/kba/README.md#getquestions) - Retrieve KBA Questions
* [verify](docs/sdks/kba/README.md#verify) - Verify KBA Questions

### [labels](docs/sdks/labels/README.md)

* [get](docs/sdks/labels/README.md#get) - Retrieve a label
* [remove](docs/sdks/labels/README.md#remove) - Remove a label

#### [labels.ledgerEntries](docs/sdks/ledgerentries/README.md)

* [list](docs/sdks/ledgerentries/README.md#list) - List label ledger entries
* [create](docs/sdks/ledgerentries/README.md#create) - Create a label ledger entry
* [get](docs/sdks/ledgerentries/README.md#get) - Retrieve a label ledger entry

#### [labels.reallocations](docs/sdks/reallocations/README.md)

* [create](docs/sdks/reallocations/README.md#create) - Create a label reallocation
* [get](docs/sdks/reallocations/README.md#get) - Retrieve a label reallocation

### [massPayments](docs/sdks/masspayments/README.md)

* [create](docs/sdks/masspayments/README.md#create) - Initiate a mass payment
* [get](docs/sdks/masspayments/README.md#get) - Retrieve a mass payment
* [update](docs/sdks/masspayments/README.md#update) - Update a mass payment

#### [massPayments.items](docs/sdks/items/README.md)

* [list](docs/sdks/items/README.md#list) - List items for a mass payment
* [get](docs/sdks/items/README.md#get) - Retrieve mass payment item

### [root](docs/sdks/root/README.md)

* [get](docs/sdks/root/README.md#get) - root

### [sandboxSimulations](docs/sdks/sandboxsimulations/README.md)

* [simulate](docs/sdks/sandboxsimulations/README.md#simulate) - Simulate bank transfer processing (Sandbox only)

### [tokens](docs/sdks/tokens/README.md)

* [create](docs/sdks/tokens/README.md#create) - Create an application access token

### [transfers](docs/sdks/transfers/README.md)

* [create](docs/sdks/transfers/README.md#create) - Initiate a transfer
* [get](docs/sdks/transfers/README.md#get) - Retrieve a transfer
* [cancel](docs/sdks/transfers/README.md#cancel) - Cancel a transfer

#### [transfers.failure](docs/sdks/failure/README.md)

* [get](docs/sdks/failure/README.md#get) - Retrieve a transfer failure reason

#### [transfers.fees](docs/sdks/fees/README.md)

* [list](docs/sdks/fees/README.md#list) - List fees for a transfer

### [webhooks](docs/sdks/webhooks/README.md)

* [get](docs/sdks/webhooks/README.md#get) - Retrieve a webhook
* [retry](docs/sdks/webhooks/README.md#retry) - Retry a webhook

#### [webhooks.retries](docs/sdks/retries/README.md)

* [list](docs/sdks/retries/README.md#list) - List retries for a webhook

### [webhookSubscriptions](docs/sdks/webhooksubscriptions/README.md)

* [list](docs/sdks/webhooksubscriptions/README.md#list) - List webhook subscriptions
* [create](docs/sdks/webhooksubscriptions/README.md#create) - Create a webhook subscription
* [get](docs/sdks/webhooksubscriptions/README.md#get) - Retrieve a webhook subscription
* [update](docs/sdks/webhooksubscriptions/README.md#update) - Update a webhook subscription
* [delete](docs/sdks/webhooksubscriptions/README.md#delete) - Delete a webhook subscription

#### [webhookSubscriptions.webhooks](docs/sdks/webhooksubscriptionswebhooks/README.md)

* [list](docs/sdks/webhooksubscriptionswebhooks/README.md#list) - List webhooks for a webhook subscription

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsExchangesCreate`](docs/sdks/accountsexchanges/README.md#create) - Create an exchange for an account
- [`accountsExchangesList`](docs/sdks/accountsexchanges/README.md#list) - List exchanges for an account
- [`accountsFundingSourcesCreate`](docs/sdks/accountsfundingsources/README.md#create) - Create a funding source for an account
- [`accountsFundingSourcesList`](docs/sdks/accountsfundingsources/README.md#list) - List funding sources for an account
- [`accountsGet`](docs/sdks/accounts/README.md#get) - Retrieve account details
- [`accountsMassPaymentsList`](docs/sdks/accountsmasspayments/README.md#list) - List account mass payments
- [`accountsTransfersList`](docs/sdks/accountstransfers/README.md#list) - List and search account transfers
- [`beneficialOwnersDelete`](docs/sdks/beneficialowners/README.md#delete) - Remove beneficial owner
- [`beneficialOwnersDocumentsCreate`](docs/sdks/beneficialownersdocuments/README.md#create) - Create a document for beneficial owner
- [`beneficialOwnersDocumentsList`](docs/sdks/beneficialownersdocuments/README.md#list) - List documents for beneficial owner
- [`beneficialOwnersGet`](docs/sdks/beneficialowners/README.md#get) - Retrieve beneficial owner
- [`beneficialOwnersUpdate`](docs/sdks/beneficialowners/README.md#update) - Update beneficial owner
- [`businessClassificationsGet`](docs/sdks/businessclassifications/README.md#get) - Retrieve a business classification
- [`businessClassificationsList`](docs/sdks/businessclassifications/README.md#list) - List business classifications
- [`clientTokensCreate`](docs/sdks/clienttokens/README.md#create) - Create a client token
- [`customersBeneficialOwnersCreate`](docs/sdks/customersbeneficialowners/README.md#create) - Create customer beneficial owner
- [`customersBeneficialOwnershipCertify`](docs/sdks/beneficialownership/README.md#certify) - Certify beneficial ownership
- [`customersBeneficialOwnershipGet`](docs/sdks/beneficialownership/README.md#get) - Retrieve beneficial ownership status
- [`customersBeneficialOwnersList`](docs/sdks/customersbeneficialowners/README.md#list) - List customer beneficial owners
- [`customersCreateReceiveOnly`](docs/sdks/customers/README.md#createreceiveonly) - Create a receive-only user
- [`customersCreateUnverified`](docs/sdks/customers/README.md#createunverified) - Create an unverified customer
- [`customersCreateVerifiedBusiness`](docs/sdks/customers/README.md#createverifiedbusiness) - Create a verified business customer
- [`customersCreateVerifiedBusinessInternational`](docs/sdks/customers/README.md#createverifiedbusinessinternational) - Create a verified business customer with international controller
- [`customersCreateVerifiedPersonal`](docs/sdks/customers/README.md#createverifiedpersonal) - Create a verified personal customer
- [`customersCreateVerifiedSoleProp`](docs/sdks/customers/README.md#createverifiedsoleprop) - Create a verified sole proprietorship customer
- [`customersDocumentsCreate`](docs/sdks/customersdocuments/README.md#create) - Create a document for customer
- [`customersDocumentsList`](docs/sdks/customersdocuments/README.md#list) - List documents for customer
- [`customersExchangesCreate`](docs/sdks/customersexchanges/README.md#create) - Create an exchange for a customer
- [`customersExchangeSessionsCreate`](docs/sdks/customersexchangesessions/README.md#create) - Create customer exchange session
- [`customersExchangesList`](docs/sdks/customersexchanges/README.md#list) - List exchanges for a customer
- [`customersFundingSourcesCreate`](docs/sdks/customersfundingsources/README.md#create) - Create customer funding source
- [`customersFundingSourcesList`](docs/sdks/customersfundingsources/README.md#list) - List customer funding sources
- [`customersGet`](docs/sdks/customers/README.md#get) - Retrieve a customer
- [`customersKbaInitiate`](docs/sdks/customerskba/README.md#initiate) - Initiate a KBA session
- [`customersLabelsCreate`](docs/sdks/customerslabels/README.md#create) - Create a label for a customer
- [`customersLabelsList`](docs/sdks/customerslabels/README.md#list) - List labels for a customer
- [`customersList`](docs/sdks/customers/README.md#list) - List and search customers
- [`customersListAvailableConnections`](docs/sdks/customers/README.md#listavailableconnections) - List available exchange connections
- [`customersMassPaymentsList`](docs/sdks/customersmasspayments/README.md#list) - List mass payments for customer
- [`customersTransfersList`](docs/sdks/customerstransfers/README.md#list) - List and search transfers for a customer
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update a customer
- [`documentsGet`](docs/sdks/documents/README.md#get) - Retrieve a document
- [`eventsGet`](docs/sdks/events/README.md#get) - Retrieve event
- [`eventsList`](docs/sdks/events/README.md#list) - List events
- [`exchangePartnersGet`](docs/sdks/exchangepartners/README.md#get) - Retrieve exchange partner
- [`exchangePartnersList`](docs/sdks/exchangepartners/README.md#list) - List exchange partners
- [`exchangeSessionsGet`](docs/sdks/exchangesessions/README.md#get) - Retrieve exchange session
- [`exchangesExchangeSessionsCreateReAuth`](docs/sdks/exchangesexchangesessions/README.md#createreauth) - Create re-authentication exchange session
- [`exchangesGet`](docs/sdks/exchanges/README.md#get) - Retrieve exchange resource
- [`fundingSourcesBalanceGet`](docs/sdks/balance/README.md#get) - Retrieve funding source balance
- [`fundingSourcesGet`](docs/sdks/fundingsources/README.md#get) - Retrieve a funding source
- [`fundingSourcesGetVanRouting`](docs/sdks/fundingsources/README.md#getvanrouting) - Retrieve VAN account and routing numbers
- [`fundingSourcesMicroDepositsGet`](docs/sdks/microdeposits/README.md#get) - Retrieve micro-deposits details
- [`fundingSourcesMicroDepositsInitiate`](docs/sdks/microdeposits/README.md#initiate) - Initiate micro-deposits
- [`fundingSourcesMicroDepositsVerify`](docs/sdks/microdeposits/README.md#verify) - Verify micro-deposits
- [`fundingSourcesOnDemandTransferAuthorizationsCreate`](docs/sdks/ondemandtransferauthorizations/README.md#create) - Create an on-demand transfer authorization
- [`fundingSourcesUpdateOrRemove`](docs/sdks/fundingsources/README.md#updateorremove) - Update or remove a funding source
- [`kbaGetQuestions`](docs/sdks/kba/README.md#getquestions) - Retrieve KBA Questions
- [`kbaVerify`](docs/sdks/kba/README.md#verify) - Verify KBA Questions
- [`labelsGet`](docs/sdks/labels/README.md#get) - Retrieve a label
- [`labelsLedgerEntriesCreate`](docs/sdks/ledgerentries/README.md#create) - Create a label ledger entry
- [`labelsLedgerEntriesGet`](docs/sdks/ledgerentries/README.md#get) - Retrieve a label ledger entry
- [`labelsLedgerEntriesList`](docs/sdks/ledgerentries/README.md#list) - List label ledger entries
- [`labelsReallocationsCreate`](docs/sdks/reallocations/README.md#create) - Create a label reallocation
- [`labelsReallocationsGet`](docs/sdks/reallocations/README.md#get) - Retrieve a label reallocation
- [`labelsRemove`](docs/sdks/labels/README.md#remove) - Remove a label
- [`massPaymentsCreate`](docs/sdks/masspayments/README.md#create) - Initiate a mass payment
- [`massPaymentsGet`](docs/sdks/masspayments/README.md#get) - Retrieve a mass payment
- [`massPaymentsItemsGet`](docs/sdks/items/README.md#get) - Retrieve mass payment item
- [`massPaymentsItemsList`](docs/sdks/items/README.md#list) - List items for a mass payment
- [`massPaymentsUpdate`](docs/sdks/masspayments/README.md#update) - Update a mass payment
- [`rootGet`](docs/sdks/root/README.md#get) - root
- [`sandboxSimulationsSimulate`](docs/sdks/sandboxsimulations/README.md#simulate) - Simulate bank transfer processing (Sandbox only)
- [`tokensCreate`](docs/sdks/tokens/README.md#create) - Create an application access token
- [`transfersCancel`](docs/sdks/transfers/README.md#cancel) - Cancel a transfer
- [`transfersCreate`](docs/sdks/transfers/README.md#create) - Initiate a transfer
- [`transfersFailureGet`](docs/sdks/failure/README.md#get) - Retrieve a transfer failure reason
- [`transfersFeesList`](docs/sdks/fees/README.md#list) - List fees for a transfer
- [`transfersGet`](docs/sdks/transfers/README.md#get) - Retrieve a transfer
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Retrieve a webhook
- [`webhooksRetriesList`](docs/sdks/retries/README.md#list) - List retries for a webhook
- [`webhooksRetry`](docs/sdks/webhooks/README.md#retry) - Retry a webhook
- [`webhookSubscriptionsCreate`](docs/sdks/webhooksubscriptions/README.md#create) - Create a webhook subscription
- [`webhookSubscriptionsDelete`](docs/sdks/webhooksubscriptions/README.md#delete) - Delete a webhook subscription
- [`webhookSubscriptionsGet`](docs/sdks/webhooksubscriptions/README.md#get) - Retrieve a webhook subscription
- [`webhookSubscriptionsList`](docs/sdks/webhooksubscriptions/README.md#list) - List webhook subscriptions
- [`webhookSubscriptionsUpdate`](docs/sdks/webhooksubscriptions/README.md#update) - Update a webhook subscription
- [`webhookSubscriptionsWebhooksList`](docs/sdks/webhooksubscriptionswebhooks/README.md#list) - List webhooks for a webhook subscription

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.documents.create({
    id: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.create({
    grantType: "client_credentials",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.create({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`DwollaError`](./src/models/errors/dwollaerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Dwolla } from "dwolla";
import * as errors from "dwolla/models/errors";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  try {
    const result = await dwolla.tokens.create({
      grantType: "client_credentials",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.DwollaError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.UnauthorizedError) {
        console.log(error.data$.error); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`DwollaError`](./src/models/errors/dwollaerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (176)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`DwollaError`](./src/models/errors/dwollaerror.ts)**:
* [`NotFoundError`](./src/models/errors/notfounderror.ts): Error response schema for 404 NotFound. Status code `404`. Applicable to 36 of 88 methods.*
* [`ForbiddenError`](./src/models/errors/forbiddenerror.ts): Error response schema for 403 Forbidden. Status code `403`. Applicable to 30 of 88 methods.*
* [`BadRequestError`](./src/models/errors/badrequesterror.ts): Error response schema for 400 Bad Request. Status code `400`. Applicable to 10 of 88 methods.*
* [`BadRequestSchemaError`](./src/models/errors/badrequestschemaerror.ts): Status code `400`. Applicable to 7 of 88 methods.*
* [`DuplicateResourceSchemaError`](./src/models/errors/duplicateresourceschemaerror.ts): Status code `400`. Applicable to 3 of 88 methods.*
* [`ValidationErrorSchema`](./src/models/errors/validationerrorschema.ts): ValidationError. Status code `400`. Applicable to 2 of 88 methods.*
* [`InvalidExchangeTokenError`](./src/models/errors/invalidexchangetokenerror.ts): Bad Request. Status code `400`. Applicable to 2 of 88 methods.*
* [`InvalidExchangeError`](./src/models/errors/invalidexchangeerror.ts): Bad Request. Status code `400`. Applicable to 2 of 88 methods.*
* [`MaximumNumberOfResourcesSchemaError`](./src/models/errors/maximumnumberofresourcesschemaerror.ts): Bad Request. Status code `400`. Applicable to 2 of 88 methods.*
* [`InvalidFileTypeSchemaError`](./src/models/errors/invalidfiletypeschemaerror.ts): Bad Request. Status code `400`. Applicable to 2 of 88 methods.*
* [`InvalidResourceStateSchemaError`](./src/models/errors/invalidresourcestateschemaerror.ts): Status code `403`. Applicable to 2 of 88 methods.*
* [`UpdateBadRequestDwollaV1HalJSONError`](./src/models/errors/updatebadrequestdwollav1haljsonerror.ts): bad request. Status code `400`. Applicable to 1 of 88 methods.*
* [`UpdateOrRemoveFundingSourceBadRequestDwollaV1HalJSONError`](./src/models/errors/updateorremovefundingsourcebadrequestdwollav1haljsonerror.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`SourceNotFoundError`](./src/models/errors/sourcenotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`ReceiverNotFoundError`](./src/models/errors/receivernotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidSourceFundingSourceError`](./src/models/errors/invalidsourcefundingsourceerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`SenderRestrictedError`](./src/models/errors/senderrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`ReceiverRestrictedError`](./src/models/errors/receiverrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidMetadataError`](./src/models/errors/invalidmetadataerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`OperationBlockedError`](./src/models/errors/operationblockederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidAmountLimitError`](./src/models/errors/invalidamountlimiterror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`CannotParseAmountError`](./src/models/errors/cannotparseamounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InsufficientFundsError`](./src/models/errors/insufficientfundserror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`FacilitatorFeeAccountNotFoundError`](./src/models/errors/facilitatorfeeaccountnotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`FacilitatorFeeSumTooLargeError`](./src/models/errors/facilitatorfeesumtoolargeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`FacilitatorFeeBelowMinimumError`](./src/models/errors/facilitatorfeebelowminimumerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`HighRiskError`](./src/models/errors/highriskerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`IncompatibleHoldingsError`](./src/models/errors/incompatibleholdingserror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`DirectAccountWithoutBankError`](./src/models/errors/directaccountwithoutbankerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`SourceSameAsDestinationError`](./src/models/errors/sourcesameasdestinationerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidFacilitatorError`](./src/models/errors/invalidfacilitatorerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidFacilitatorFeeCollectFromError`](./src/models/errors/invalidfacilitatorfeecollectfromerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidFacilitatorFeeCollectFromCombinationError`](./src/models/errors/invalidfacilitatorfeecollectfromcombinationerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidDestinationFundingSourceError`](./src/models/errors/invaliddestinationfundingsourceerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidFacilitatorFeeAmountError`](./src/models/errors/invalidfacilitatorfeeamounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WeeklyReceiveLimitReachedError`](./src/models/errors/weeklyreceivelimitreachederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidDestinationClearingTypeError`](./src/models/errors/invaliddestinationclearingtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidAmountForDestinationClearingTypeError`](./src/models/errors/invalidamountfordestinationclearingtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidCorrelationIdError`](./src/models/errors/invalidcorrelationiderror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`SourceAddendaMaxLengthError`](./src/models/errors/sourceaddendamaxlengtherror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`DestinationAddendaMaxLengthError`](./src/models/errors/destinationaddendamaxlengtherror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`AchAddendaEntriesNotEnabledForAccountError`](./src/models/errors/achaddendaentriesnotenabledforaccounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`PointOfSaleAddendaEntriesNotEnabledForAccountError`](./src/models/errors/pointofsaleaddendaentriesnotenabledforaccounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`IncompatibleAddendaEntriesError`](./src/models/errors/incompatibleaddendaentrieserror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidPointOfSaleAddendaIdentificationCodeError`](./src/models/errors/invalidpointofsaleaddendaidentificationcodeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidPointOfSaleAddendaSerialNumberError`](./src/models/errors/invalidpointofsaleaddendaserialnumbererror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidPointOfSaleAddendaDateError`](./src/models/errors/invalidpointofsaleaddendadateerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidPointOfSaleAddendaAddressError`](./src/models/errors/invalidpointofsaleaddendaaddresserror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidPointOfSaleAddendaCityError`](./src/models/errors/invalidpointofsaleaddendacityerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidPointOfSaleAddendaStateError`](./src/models/errors/invalidpointofsaleaddendastateerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`TransferExpiredForFeeError`](./src/models/errors/transferexpiredforfeeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidFeeOdfiError`](./src/models/errors/invalidfeeodfierror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidSourceBankAccountTypeError`](./src/models/errors/invalidsourcebankaccounttypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidDestinationBankAccountTypeError`](./src/models/errors/invaliddestinationbankaccounttypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`IncompatibleSourceAndDestinationTypesError`](./src/models/errors/incompatiblesourceanddestinationtypeserror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`IncompatibleSourceForRtpDestinationError`](./src/models/errors/incompatiblesourceforrtpdestinationerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidAmountForDestinationProcessingChannelError`](./src/models/errors/invalidamountfordestinationprocessingchannelerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`RtpFacilitatorFeeNotSupportedError`](./src/models/errors/rtpfacilitatorfeenotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`RtpUnverifiedSenderNotSupportedError`](./src/models/errors/rtpunverifiedsendernotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`RtpPersonalToPersonalNotSupportedError`](./src/models/errors/rtppersonaltopersonalnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`DestinationProcessingChannelNotSupportedError`](./src/models/errors/destinationprocessingchannelnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`DestinationRemittanceDataMaxLengthError`](./src/models/errors/destinationremittancedatamaxlengtherror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawInvalidAmountError`](./src/models/errors/withdrawinvalidamounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawInvalidFundingSourceError`](./src/models/errors/withdrawinvalidfundingsourceerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawAccountRestrictedError`](./src/models/errors/withdrawaccountrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawInvalidAmountForClearingTypeError`](./src/models/errors/withdrawinvalidamountforclearingtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawInvalidWireBeneficiaryLocalityError`](./src/models/errors/withdrawinvalidwirebeneficiarylocalityerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawInvalidWireBeneficiaryRegionError`](./src/models/errors/withdrawinvalidwirebeneficiaryregionerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawInvalidWireBeneficiaryCountryError`](./src/models/errors/withdrawinvalidwirebeneficiarycountryerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawInvalidWireOriginatorToBeneficiaryError`](./src/models/errors/withdrawinvalidwireoriginatortobeneficiaryerror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawProcessingChannelNotSupportedError`](./src/models/errors/withdrawprocessingchannelnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawRtpUnverifiedSenderNotSupportedError`](./src/models/errors/withdrawrtpunverifiedsendernotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WithdrawRtpPersonalWithdrawalNotSupportedError`](./src/models/errors/withdrawrtppersonalwithdrawalnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`DepositAccountRestrictedError`](./src/models/errors/depositaccountrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WireInvalidImadError`](./src/models/errors/wireinvalidimaderror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WireAccountRestrictedError`](./src/models/errors/wireaccountrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WireNotEnabledError`](./src/models/errors/wirenotenablederror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`WireAccountNotFoundError`](./src/models/errors/wireaccountnotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`StatusInvalidError`](./src/models/errors/statusinvaliderror.ts): 400 Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`StatusNotAllowedError`](./src/models/errors/statusnotallowederror.ts): 400 Bad Request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidUrlFormatError`](./src/models/errors/invalidurlformaterror.ts): Bad request. Status code `400`. Applicable to 1 of 88 methods.*
* [`SecretTooLongError`](./src/models/errors/secrettoolongerror.ts): Bad request. Status code `400`. Applicable to 1 of 88 methods.*
* [`MaxSubscriptionsReachedError`](./src/models/errors/maxsubscriptionsreachederror.ts): Bad request. Status code `400`. Applicable to 1 of 88 methods.*
* [`InactiveExchangeError`](./src/models/errors/inactiveexchangeerror.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`InvalidExchangeTokenErrorError`](./src/models/errors/invalidexchangetokenerrorerror.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`DuplicateFundingSourceError`](./src/models/errors/duplicatefundingsourceerror.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`ResponseBodyBadRequestError1`](./src/models/errors/responsebodybadrequesterror1.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`ResponseBodyBadRequestError2`](./src/models/errors/responsebodybadrequesterror2.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`ResponseBodyBadRequestError3`](./src/models/errors/responsebodybadrequesterror3.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`VerifyMicroDepositsBadRequestDwollaV1HalJSONError`](./src/models/errors/verifymicrodepositsbadrequestdwollav1haljsonerror.ts): Bad Request - invalid deposit amounts. Status code `400`. Applicable to 1 of 88 methods.*
* [`CreateReAuthExchangeSessionBadRequestDwollaV1HalJSONError`](./src/models/errors/createreauthexchangesessionbadrequestdwollav1haljsonerror.ts): validation error. Status code `400`. Applicable to 1 of 88 methods.*
* [`UnauthorizedError`](./src/models/errors/unauthorizederror.ts): Unauthorized. Status code `401`. Applicable to 1 of 88 methods.*
* [`GetRootDwollaV1HalJSONError`](./src/models/errors/getrootdwollav1haljsonerror.ts): unauthorized. Status code `401`. Applicable to 1 of 88 methods.*
* [`SimulateBankTransferProcessingUnauthorizedDwollaV1HalJSONError`](./src/models/errors/simulatebanktransferprocessingunauthorizeddwollav1haljsonerror.ts): unauthorized. Status code `401`. Applicable to 1 of 88 methods.*
* [`GetExchangeUnauthorizedDwollaV1HalJSONError`](./src/models/errors/getexchangeunauthorizeddwollav1haljsonerror.ts): Invalid Scope. Status code `401`. Applicable to 1 of 88 methods.*
* [`CreateAccountExchangeDwollaV1HalJSONError`](./src/models/errors/createaccountexchangedwollav1haljsonerror.ts): Invalid Scope. Status code `401`. Applicable to 1 of 88 methods.*
* [`CreateCustomerExchangeResponseBodyError1`](./src/models/errors/createcustomerexchangeresponsebodyerror1.ts): Unauthorized. Status code `401`. Applicable to 1 of 88 methods.*
* [`CreateCustomerExchangeResponseBodyError2`](./src/models/errors/createcustomerexchangeresponsebodyerror2.ts): Unauthorized. Status code `401`. Applicable to 1 of 88 methods.*
* [`CreateCustomerExchangeSessionDwollaV1HalJSONError`](./src/models/errors/createcustomerexchangesessiondwollav1haljsonerror.ts): unauthorized. Status code `401`. Applicable to 1 of 88 methods.*
* [`GetAccountDwollaV1HalJSONError`](./src/models/errors/getaccountdwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`GetCustomerForbiddenDwollaV1HalJSONError`](./src/models/errors/getcustomerforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`UpdateForbiddenDwollaV1HalJSONError`](./src/models/errors/updateforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`UpdateBeneficialOwnerForbiddenDwollaV1HalJSONError`](./src/models/errors/updatebeneficialownerforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`InvalidKbaSessionError`](./src/models/errors/invalidkbasessionerror.ts): 403 Error. Status code `403`. Applicable to 1 of 88 methods.*
* [`ExpiredKbaSessionError`](./src/models/errors/expiredkbasessionerror.ts): 403 Error. Status code `403`. Applicable to 1 of 88 methods.*
* [`UpdateOrRemoveFundingSourceForbiddenDwollaV1HalJSONError`](./src/models/errors/updateorremovefundingsourceforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`InvalidAttemptToFacilitateFundsError`](./src/models/errors/invalidattempttofacilitatefundserror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`InvalidAttemptToPayInFundsError`](./src/models/errors/invalidattempttopayinfundserror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`InvalidAttemptToPayOutFundsError`](./src/models/errors/invalidattempttopayoutfundserror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`RtpAccountSettingNotEnabledError`](./src/models/errors/rtpaccountsettingnotenablederror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`InitiateMassPaymentDwollaV1HalJSONError`](./src/models/errors/initiatemasspaymentdwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`GetMassPaymentForbiddenDwollaV1HalJSONError`](./src/models/errors/getmasspaymentforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`UpdateMassPaymentForbiddenDwollaV1HalJSONError`](./src/models/errors/updatemasspaymentforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`RemoveLabelDwollaV1HalJSONError`](./src/models/errors/removelabeldwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`SimulateBankTransferProcessingForbiddenDwollaV1HalJSONError`](./src/models/errors/simulatebanktransferprocessingforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`RetrieveCustomerExchangeSessionForbiddenDwollaV1HalJSONError`](./src/models/errors/retrievecustomerexchangesessionforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`CreateFundingSourceDwollaV1HalJSONError`](./src/models/errors/createfundingsourcedwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`ListFundingSourcesForbiddenDwollaV1HalJSONError`](./src/models/errors/listfundingsourcesforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`ListMassPaymentsForbiddenDwollaV1HalJSONError`](./src/models/errors/listmasspaymentsforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`GetBeneficialOwnershipStatusForCustomerForbiddenDwollaV1HalJSONError`](./src/models/errors/getbeneficialownershipstatusforcustomerforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError`](./src/models/errors/certifybeneficialownershipforcustomerdwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`NotAuthorizedSchemaError`](./src/models/errors/notauthorizedschemaerror.ts): not found. Status code `403`. Applicable to 1 of 88 methods.*
* [`ListCustomerFundingSourcesForbiddenDwollaV1HalJSONError`](./src/models/errors/listcustomerfundingsourcesforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`CreateCustomerFundingSourceForbiddenDwollaV1HalJSONError`](./src/models/errors/createcustomerfundingsourceforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`ListCustomerMassPaymentsForbiddenDwollaV1HalJSONError`](./src/models/errors/listcustomermasspaymentsforbiddendwollav1haljsonerror.ts): Not authorized to list mass payments. Status code `403`. Applicable to 1 of 88 methods.*
* [`ListCustomerLabelsForbiddenDwollaV1HalJSONError`](./src/models/errors/listcustomerlabelsforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`CreateCustomerLabelForbiddenDwollaV1HalJSONError`](./src/models/errors/createcustomerlabelforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`ResponseBodyForbiddenError1`](./src/models/errors/responsebodyforbiddenerror1.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`ResponseBodyForbiddenError2`](./src/models/errors/responsebodyforbiddenerror2.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`InitiateMicroDepositsForbiddenDwollaV1HalJSONError`](./src/models/errors/initiatemicrodepositsforbiddendwollav1haljsonerror.ts): Forbidden - funding source not eligible for micro-deposits. Status code `403`. Applicable to 1 of 88 methods.*
* [`VerifyMicroDepositsForbiddenDwollaV1HalJSONError`](./src/models/errors/verifymicrodepositsforbiddendwollav1haljsonerror.ts): Forbidden - verification not allowed in current state. Status code `403`. Applicable to 1 of 88 methods.*
* [`ListMassPaymentItemsForbiddenDwollaV1HalJSONError`](./src/models/errors/listmasspaymentitemsforbiddendwollav1haljsonerror.ts): Not authorized to list mass payment items. Status code `403`. Applicable to 1 of 88 methods.*
* [`GetMassPaymentItemForbiddenDwollaV1HalJSONError`](./src/models/errors/getmasspaymentitemforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`CreateLabelReallocationForbiddenDwollaV1HalJSONError`](./src/models/errors/createlabelreallocationforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`CreateReAuthExchangeSessionForbiddenDwollaV1HalJSONError`](./src/models/errors/createreauthexchangesessionforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 88 methods.*
* [`GetCustomerNotFoundDwollaV1HalJSONError`](./src/models/errors/getcustomernotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListAvailableExchangeConnectionsDwollaV1HalJSONError`](./src/models/errors/listavailableexchangeconnectionsdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`RetrieveBusinessClassificationDwollaV1HalJSONError`](./src/models/errors/retrievebusinessclassificationdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`RetrieveBeneficialOwnerDwollaV1HalJSONError`](./src/models/errors/retrievebeneficialownerdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`UpdateBeneficialOwnerNotFoundDwollaV1HalJSONError`](./src/models/errors/updatebeneficialownernotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`DeleteBeneficialOwnerDwollaV1HalJSONError`](./src/models/errors/deletebeneficialownerdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetKbaQuestionsDwollaV1HalJSONError`](./src/models/errors/getkbaquestionsdwollav1haljsonerror.ts): 404 Error. Status code `404`. Applicable to 1 of 88 methods.*
* [`VerifyKbaQuestionsDwollaV1HalJSONError`](./src/models/errors/verifykbaquestionsdwollav1haljsonerror.ts): 404 Error. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetFundingSourceDwollaV1HalJSONError`](./src/models/errors/getfundingsourcedwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetVanRoutingDwollaV1HalJSONError`](./src/models/errors/getvanroutingdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetMassPaymentNotFoundDwollaV1HalJSONError`](./src/models/errors/getmasspaymentnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`UpdateMassPaymentNotFoundDwollaV1HalJSONError`](./src/models/errors/updatemasspaymentnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetExchangeNotFoundDwollaV1HalJSONError`](./src/models/errors/getexchangenotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`RetrieveCustomerExchangeSessionNotFoundDwollaV1HalJSONError`](./src/models/errors/retrievecustomerexchangesessionnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListFundingSourcesNotFoundDwollaV1HalJSONError`](./src/models/errors/listfundingsourcesnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListAndSearchTransfersDwollaV1HalJSONError`](./src/models/errors/listandsearchtransfersdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListMassPaymentsNotFoundDwollaV1HalJSONError`](./src/models/errors/listmasspaymentsnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListBeneficialOwnersForCustomerDwollaV1HalJSONError`](./src/models/errors/listbeneficialownersforcustomerdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetBeneficialOwnershipStatusForCustomerNotFoundDwollaV1HalJSONError`](./src/models/errors/getbeneficialownershipstatusforcustomernotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`CreateCustomerDocumentNotFoundDwollaV1HalJSONError`](./src/models/errors/createcustomerdocumentnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListCustomerFundingSourcesNotFoundDwollaV1HalJSONError`](./src/models/errors/listcustomerfundingsourcesnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`CreateCustomerFundingSourceNotFoundDwollaV1HalJSONError`](./src/models/errors/createcustomerfundingsourcenotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListCustomerMassPaymentsNotFoundDwollaV1HalJSONError`](./src/models/errors/listcustomermasspaymentsnotfounddwollav1haljsonerror.ts): Customer not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListCustomerLabelsNotFoundDwollaV1HalJSONError`](./src/models/errors/listcustomerlabelsnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`CreateCustomerLabelNotFoundDwollaV1HalJSONError`](./src/models/errors/createcustomerlabelnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListCustomerExchangesDwollaV1HalJSONError`](./src/models/errors/listcustomerexchangesdwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`InitiateMicroDepositsNotFoundDwollaV1HalJSONError`](./src/models/errors/initiatemicrodepositsnotfounddwollav1haljsonerror.ts): Funding source not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`VerifyMicroDepositsNotFoundDwollaV1HalJSONError`](./src/models/errors/verifymicrodepositsnotfounddwollav1haljsonerror.ts): Funding source not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetFundingSourceBalanceDwollaV1HalJSONError`](./src/models/errors/getfundingsourcebalancedwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`ListMassPaymentItemsNotFoundDwollaV1HalJSONError`](./src/models/errors/listmasspaymentitemsnotfounddwollav1haljsonerror.ts): Mass payment not found. Status code `404`. Applicable to 1 of 88 methods.*
* [`GetMassPaymentItemNotFoundDwollaV1HalJSONError`](./src/models/errors/getmasspaymentitemnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`CreateLabelReallocationNotFoundDwollaV1HalJSONError`](./src/models/errors/createlabelreallocationnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 88 methods.*
* [`CreateCustomerDocumentRequestEntityTooLargeDwollaV1HalJSONError`](./src/models/errors/createcustomerdocumentrequestentitytoolargedwollav1haljsonerror.ts): request entity too large. Status code `413`. Applicable to 1 of 88 methods.*
* [`CreateBeneficialOwnerDocumentDwollaV1HalJSONError`](./src/models/errors/createbeneficialownerdocumentdwollav1haljsonerror.ts): request entity too large. Status code `413`. Applicable to 1 of 88 methods.*
* [`TooManyRequestsErrorError`](./src/models/errors/toomanyrequestserrorerror.ts): Too Many Requests. Status code `429`. Applicable to 1 of 88 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name      | Server                           | Description       |
| --------- | -------------------------------- | ----------------- |
| `prod`    | `https://api.dwolla.com`         | Production server |
| `sandbox` | `https://api-sandbox.dwolla.com` | Sandbox server    |

#### Example

```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  server: "prod",
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.create({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  serverURL: "https://api.dwolla.com",
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.create({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Dwolla } from "dwolla";
import { HTTPClient } from "dwolla/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Dwolla({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Dwolla } from "dwolla";

const sdk = new Dwolla({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DWOLLA_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version
update. Therefore, we recommend pinning usage to a specific package version. This way, you can
install the same version each time without breaking changes unless you are intentionally looking for
the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Any manual changes added to internal files will be overwritten on the next generation. We look
forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and
we'll do our best to include it in a future release.

