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
yarn add dwolla zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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
  const result = await dwolla.tokens.createApplicationAccessToken({
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

| Name                          | Type   | Scheme                         | Environment Variable                                                 |
| ----------------------------- | ------ | ------------------------------ | -------------------------------------------------------------------- |
| `clientID`<br/>`clientSecret` | oauth2 | OAuth2 Client Credentials Flow | `DWOLLA_CLIENT_ID`<br/>`DWOLLA_CLIENT_SECRET`<br/>`DWOLLA_TOKEN_URL` |

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
  const result = await dwolla.tokens.createApplicationAccessToken({
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

* [get](docs/sdks/accounts/README.md#get) - Retrieve Account Details

#### [accounts.exchanges](docs/sdks/accountsexchanges/README.md)

* [list](docs/sdks/accountsexchanges/README.md#list) - List exchanges for an account
* [create](docs/sdks/accountsexchanges/README.md#create) - Create an exchange for an account

#### [accounts.fundingSources](docs/sdks/accountsfundingsources/README.md)

* [create](docs/sdks/accountsfundingsources/README.md#create) - Create a funding source for an account
* [list](docs/sdks/accountsfundingsources/README.md#list) - List funding sources for an account

#### [accounts.massPayments](docs/sdks/accountsmasspayments/README.md)

* [list](docs/sdks/accountsmasspayments/README.md#list) - List mass payments for an account

#### [accounts.transfers](docs/sdks/accountstransfers/README.md)

* [list](docs/sdks/accountstransfers/README.md#list) - List and search transfers for an account

### [beneficialOwners](docs/sdks/beneficialowners/README.md)

* [get](docs/sdks/beneficialowners/README.md#get) - Retrieve beneficial owner
* [update](docs/sdks/beneficialowners/README.md#update) - Update beneficial owner
* [delete](docs/sdks/beneficialowners/README.md#delete) - Delete beneficial owner
* [getOwnershipStatus](docs/sdks/beneficialowners/README.md#getownershipstatus) - Retrieve beneficial ownership status
* [certifyOwnership](docs/sdks/beneficialowners/README.md#certifyownership) - Certify beneficial ownership status

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
* [create](docs/sdks/customers/README.md#create) - Create a customer
* [get](docs/sdks/customers/README.md#get) - Retrieve a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer
* [listAvailableConnections](docs/sdks/customers/README.md#listavailableconnections) - List available exchange connections

#### [customers.beneficialOwners](docs/sdks/customersbeneficialowners/README.md)

* [list](docs/sdks/customersbeneficialowners/README.md#list) - List beneficial owners
* [create](docs/sdks/customersbeneficialowners/README.md#create) - Create beneficial owner

#### [customers.documents](docs/sdks/customersdocuments/README.md)

* [list](docs/sdks/customersdocuments/README.md#list) - List documents for customer
* [create](docs/sdks/customersdocuments/README.md#create) - Create a document for customer

#### [customers.exchanges](docs/sdks/customersexchanges/README.md)

* [list](docs/sdks/customersexchanges/README.md#list) - List exchanges for a customer
* [create](docs/sdks/customersexchanges/README.md#create) - Create an exchange for a customer

#### [customers.fundingSources](docs/sdks/customersfundingsources/README.md)

* [list](docs/sdks/customersfundingsources/README.md#list) - List customer funding sources
* [create](docs/sdks/customersfundingsources/README.md#create) - Create customer funding source

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
* [createReAuth](docs/sdks/exchanges/README.md#createreauth) - Create re-authentication exchange session

### [exchangeSessions](docs/sdks/exchangesessions/README.md)

* [create](docs/sdks/exchangesessions/README.md#create) - Create customer exchange session
* [get](docs/sdks/exchangesessions/README.md#get) - Retrieve exchange session

### [fundingSources](docs/sdks/fundingsources/README.md)

* [get](docs/sdks/fundingsources/README.md#get) - Retrieve a funding source
* [updateOrRemove](docs/sdks/fundingsources/README.md#updateorremove) - Update or remove a funding source
* [getMicroDeposits](docs/sdks/fundingsources/README.md#getmicrodeposits) - Retrieve micro-deposits details
* [initiateOrVerifyMicroDeposits](docs/sdks/fundingsources/README.md#initiateorverifymicrodeposits) - Initiate or Verify micro-deposits
* [getBalance](docs/sdks/fundingsources/README.md#getbalance) - Retrieve funding source balance
* [getVanRouting](docs/sdks/fundingsources/README.md#getvanrouting) - Retrieve VAN account and routing numbers

### [kba](docs/sdks/kba/README.md)

* [initiate](docs/sdks/kba/README.md#initiate) - Initiate a KBA session
* [getQuestions](docs/sdks/kba/README.md#getquestions) - Retrieve KBA Questions
* [verify](docs/sdks/kba/README.md#verify) - Verify KBA Questions

### [labels](docs/sdks/labels/README.md)

* [get](docs/sdks/labels/README.md#get) - Retrieve a label
* [remove](docs/sdks/labels/README.md#remove) - Remove a label
* [listForCustomer](docs/sdks/labels/README.md#listforcustomer) - List labels for a customer
* [createForCustomer](docs/sdks/labels/README.md#createforcustomer) - Create a label for a customer
* [listLedgerEntries](docs/sdks/labels/README.md#listledgerentries) - List label ledger entries
* [createLedgerEntry](docs/sdks/labels/README.md#createledgerentry) - Create a label ledger entry
* [getLedgerEntry](docs/sdks/labels/README.md#getledgerentry) - Retrieve a label ledger entry
* [createReallocation](docs/sdks/labels/README.md#createreallocation) - Create a label reallocation
* [getReallocation](docs/sdks/labels/README.md#getreallocation) - Retrieve a label reallocation

### [massPayments](docs/sdks/masspayments/README.md)

* [create](docs/sdks/masspayments/README.md#create) - Initiate a mass payment
* [get](docs/sdks/masspayments/README.md#get) - Retrieve a mass payment
* [update](docs/sdks/masspayments/README.md#update) - Update a mass payment
* [listItems](docs/sdks/masspayments/README.md#listitems) - List items for a mass payment
* [getItem](docs/sdks/masspayments/README.md#getitem) - Retrieve mass payment item

### [root](docs/sdks/root/README.md)

* [get](docs/sdks/root/README.md#get) - root

### [tokens](docs/sdks/tokens/README.md)

* [createApplicationAccessToken](docs/sdks/tokens/README.md#createapplicationaccesstoken) - Create an application access token

### [transfers](docs/sdks/transfers/README.md)

* [create](docs/sdks/transfers/README.md#create) - Initiate a transfer
* [get](docs/sdks/transfers/README.md#get) - Retrieve a transfer
* [cancel](docs/sdks/transfers/README.md#cancel) - Cancel a transfer
* [listFees](docs/sdks/transfers/README.md#listfees) - List fees for a transfer
* [getFailureReason](docs/sdks/transfers/README.md#getfailurereason) - Retrieve a transfer failure reason
* [createOnDemandAuthorization](docs/sdks/transfers/README.md#createondemandauthorization) - Create an on-demand transfer authorization

### [webhooks](docs/sdks/webhooks/README.md)

* [get](docs/sdks/webhooks/README.md#get) - Retrieve a webhook
* [listRetries](docs/sdks/webhooks/README.md#listretries) - List retries for a webhook
* [retry](docs/sdks/webhooks/README.md#retry) - Retry a webhook

### [webhookSubscriptions](docs/sdks/webhooksubscriptions/README.md)

* [list](docs/sdks/webhooksubscriptions/README.md#list) - List webhook subscriptions
* [create](docs/sdks/webhooksubscriptions/README.md#create) - Create a webhook subscription
* [get](docs/sdks/webhooksubscriptions/README.md#get) - Retrieve a webhook subscription
* [update](docs/sdks/webhooksubscriptions/README.md#update) - Update a webhook subscription
* [delete](docs/sdks/webhooksubscriptions/README.md#delete) - Delete a webhook subscription
* [listWebhooks](docs/sdks/webhooksubscriptions/README.md#listwebhooks) - List webhooks for a webhook subscription

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
- [`accountsGet`](docs/sdks/accounts/README.md#get) - Retrieve Account Details
- [`accountsMassPaymentsList`](docs/sdks/accountsmasspayments/README.md#list) - List mass payments for an account
- [`accountsTransfersList`](docs/sdks/accountstransfers/README.md#list) - List and search transfers for an account
- [`beneficialOwnersCertifyOwnership`](docs/sdks/beneficialowners/README.md#certifyownership) - Certify beneficial ownership status
- [`beneficialOwnersDelete`](docs/sdks/beneficialowners/README.md#delete) - Delete beneficial owner
- [`beneficialOwnersDocumentsCreate`](docs/sdks/beneficialownersdocuments/README.md#create) - Create a document for beneficial owner
- [`beneficialOwnersDocumentsList`](docs/sdks/beneficialownersdocuments/README.md#list) - List documents for beneficial owner
- [`beneficialOwnersGet`](docs/sdks/beneficialowners/README.md#get) - Retrieve beneficial owner
- [`beneficialOwnersGetOwnershipStatus`](docs/sdks/beneficialowners/README.md#getownershipstatus) - Retrieve beneficial ownership status
- [`beneficialOwnersUpdate`](docs/sdks/beneficialowners/README.md#update) - Update beneficial owner
- [`businessClassificationsGet`](docs/sdks/businessclassifications/README.md#get) - Retrieve a business classification
- [`businessClassificationsList`](docs/sdks/businessclassifications/README.md#list) - List business classifications
- [`clientTokensCreate`](docs/sdks/clienttokens/README.md#create) - Create a client token
- [`customersBeneficialOwnersCreate`](docs/sdks/customersbeneficialowners/README.md#create) - Create beneficial owner
- [`customersBeneficialOwnersList`](docs/sdks/customersbeneficialowners/README.md#list) - List beneficial owners
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create a customer
- [`customersDocumentsCreate`](docs/sdks/customersdocuments/README.md#create) - Create a document for customer
- [`customersDocumentsList`](docs/sdks/customersdocuments/README.md#list) - List documents for customer
- [`customersExchangesCreate`](docs/sdks/customersexchanges/README.md#create) - Create an exchange for a customer
- [`customersExchangesList`](docs/sdks/customersexchanges/README.md#list) - List exchanges for a customer
- [`customersFundingSourcesCreate`](docs/sdks/customersfundingsources/README.md#create) - Create customer funding source
- [`customersFundingSourcesList`](docs/sdks/customersfundingsources/README.md#list) - List customer funding sources
- [`customersGet`](docs/sdks/customers/README.md#get) - Retrieve a customer
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
- [`exchangesCreateReAuth`](docs/sdks/exchanges/README.md#createreauth) - Create re-authentication exchange session
- [`exchangeSessionsCreate`](docs/sdks/exchangesessions/README.md#create) - Create customer exchange session
- [`exchangeSessionsGet`](docs/sdks/exchangesessions/README.md#get) - Retrieve exchange session
- [`exchangesGet`](docs/sdks/exchanges/README.md#get) - Retrieve exchange resource
- [`fundingSourcesGet`](docs/sdks/fundingsources/README.md#get) - Retrieve a funding source
- [`fundingSourcesGetBalance`](docs/sdks/fundingsources/README.md#getbalance) - Retrieve funding source balance
- [`fundingSourcesGetMicroDeposits`](docs/sdks/fundingsources/README.md#getmicrodeposits) - Retrieve micro-deposits details
- [`fundingSourcesGetVanRouting`](docs/sdks/fundingsources/README.md#getvanrouting) - Retrieve VAN account and routing numbers
- [`fundingSourcesInitiateOrVerifyMicroDeposits`](docs/sdks/fundingsources/README.md#initiateorverifymicrodeposits) - Initiate or Verify micro-deposits
- [`fundingSourcesUpdateOrRemove`](docs/sdks/fundingsources/README.md#updateorremove) - Update or remove a funding source
- [`kbaGetQuestions`](docs/sdks/kba/README.md#getquestions) - Retrieve KBA Questions
- [`kbaInitiate`](docs/sdks/kba/README.md#initiate) - Initiate a KBA session
- [`kbaVerify`](docs/sdks/kba/README.md#verify) - Verify KBA Questions
- [`labelsCreateForCustomer`](docs/sdks/labels/README.md#createforcustomer) - Create a label for a customer
- [`labelsCreateLedgerEntry`](docs/sdks/labels/README.md#createledgerentry) - Create a label ledger entry
- [`labelsCreateReallocation`](docs/sdks/labels/README.md#createreallocation) - Create a label reallocation
- [`labelsGet`](docs/sdks/labels/README.md#get) - Retrieve a label
- [`labelsGetLedgerEntry`](docs/sdks/labels/README.md#getledgerentry) - Retrieve a label ledger entry
- [`labelsGetReallocation`](docs/sdks/labels/README.md#getreallocation) - Retrieve a label reallocation
- [`labelsListForCustomer`](docs/sdks/labels/README.md#listforcustomer) - List labels for a customer
- [`labelsListLedgerEntries`](docs/sdks/labels/README.md#listledgerentries) - List label ledger entries
- [`labelsRemove`](docs/sdks/labels/README.md#remove) - Remove a label
- [`massPaymentsCreate`](docs/sdks/masspayments/README.md#create) - Initiate a mass payment
- [`massPaymentsGet`](docs/sdks/masspayments/README.md#get) - Retrieve a mass payment
- [`massPaymentsGetItem`](docs/sdks/masspayments/README.md#getitem) - Retrieve mass payment item
- [`massPaymentsListItems`](docs/sdks/masspayments/README.md#listitems) - List items for a mass payment
- [`massPaymentsUpdate`](docs/sdks/masspayments/README.md#update) - Update a mass payment
- [`rootGet`](docs/sdks/root/README.md#get) - root
- [`tokensCreateApplicationAccessToken`](docs/sdks/tokens/README.md#createapplicationaccesstoken) - Create an application access token
- [`transfersCancel`](docs/sdks/transfers/README.md#cancel) - Cancel a transfer
- [`transfersCreate`](docs/sdks/transfers/README.md#create) - Initiate a transfer
- [`transfersCreateOnDemandAuthorization`](docs/sdks/transfers/README.md#createondemandauthorization) - Create an on-demand transfer authorization
- [`transfersGet`](docs/sdks/transfers/README.md#get) - Retrieve a transfer
- [`transfersGetFailureReason`](docs/sdks/transfers/README.md#getfailurereason) - Retrieve a transfer failure reason
- [`transfersListFees`](docs/sdks/transfers/README.md#listfees) - List fees for a transfer
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Retrieve a webhook
- [`webhooksListRetries`](docs/sdks/webhooks/README.md#listretries) - List retries for a webhook
- [`webhooksRetry`](docs/sdks/webhooks/README.md#retry) - Retry a webhook
- [`webhookSubscriptionsCreate`](docs/sdks/webhooksubscriptions/README.md#create) - Create a webhook subscription
- [`webhookSubscriptionsDelete`](docs/sdks/webhooksubscriptions/README.md#delete) - Delete a webhook subscription
- [`webhookSubscriptionsGet`](docs/sdks/webhooksubscriptions/README.md#get) - Retrieve a webhook subscription
- [`webhookSubscriptionsList`](docs/sdks/webhooksubscriptions/README.md#list) - List webhook subscriptions
- [`webhookSubscriptionsListWebhooks`](docs/sdks/webhooksubscriptions/README.md#listwebhooks) - List webhooks for a webhook subscription
- [`webhookSubscriptionsUpdate`](docs/sdks/webhooksubscriptions/README.md#update) - Update a webhook subscription

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
  const result = await dwolla.tokens.createApplicationAccessToken({
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
  const result = await dwolla.tokens.createApplicationAccessToken({
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
    const result = await dwolla.tokens.createApplicationAccessToken({
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

<details><summary>Less common errors (173)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`DwollaError`](./src/models/errors/dwollaerror.ts)**:
* [`NotFoundError`](./src/models/errors/notfounderror.ts): Error response schema for 404 NotFound. Status code `404`. Applicable to 36 of 81 methods.*
* [`ForbiddenError`](./src/models/errors/forbiddenerror.ts): Error response schema for 403 Forbidden. Status code `403`. Applicable to 24 of 81 methods.*
* [`BadRequestError`](./src/models/errors/badrequesterror.ts): Error response schema for 400 Bad Request. Status code `400`. Applicable to 11 of 81 methods.*
* [`DuplicateResourceSchemaError`](./src/models/errors/duplicateresourceschemaerror.ts): Status code `400`. Applicable to 3 of 81 methods.*
* [`ValidationErrorSchema`](./src/models/errors/validationerrorschema.ts): ValidationError. Status code `400`. Applicable to 2 of 81 methods.*
* [`InvalidExchangeTokenError`](./src/models/errors/invalidexchangetokenerror.ts): Bad Request. Status code `400`. Applicable to 2 of 81 methods.*
* [`InvalidExchangeError`](./src/models/errors/invalidexchangeerror.ts): Bad Request. Status code `400`. Applicable to 2 of 81 methods.*
* [`MaximumNumberOfResourcesSchemaError`](./src/models/errors/maximumnumberofresourcesschemaerror.ts): Bad Request. Status code `400`. Applicable to 2 of 81 methods.*
* [`InvalidFileTypeSchemaError`](./src/models/errors/invalidfiletypeschemaerror.ts): Bad Request. Status code `400`. Applicable to 2 of 81 methods.*
* [`InvalidResourceStateSchemaError`](./src/models/errors/invalidresourcestateschemaerror.ts): Status code `403`. Applicable to 2 of 81 methods.*
* [`UpdateBadRequestDwollaV1HalJSONError`](./src/models/errors/updatebadrequestdwollav1haljsonerror.ts): bad request. Status code `400`. Applicable to 1 of 81 methods.*
* [`UpdateOrRemoveFundingSourceBadRequestDwollaV1HalJSONError`](./src/models/errors/updateorremovefundingsourcebadrequestdwollav1haljsonerror.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`SourceNotFoundError`](./src/models/errors/sourcenotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`ReceiverNotFoundError`](./src/models/errors/receivernotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidSourceFundingSourceError`](./src/models/errors/invalidsourcefundingsourceerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`SenderRestrictedError`](./src/models/errors/senderrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`ReceiverRestrictedError`](./src/models/errors/receiverrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidMetadataError`](./src/models/errors/invalidmetadataerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`OperationBlockedError`](./src/models/errors/operationblockederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidAmountLimitError`](./src/models/errors/invalidamountlimiterror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`CannotParseAmountError`](./src/models/errors/cannotparseamounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InsufficientFundsError`](./src/models/errors/insufficientfundserror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`FacilitatorFeeAccountNotFoundError`](./src/models/errors/facilitatorfeeaccountnotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`FacilitatorFeeSumTooLargeError`](./src/models/errors/facilitatorfeesumtoolargeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`FacilitatorFeeBelowMinimumError`](./src/models/errors/facilitatorfeebelowminimumerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`HighRiskError`](./src/models/errors/highriskerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`IncompatibleHoldingsError`](./src/models/errors/incompatibleholdingserror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`DirectAccountWithoutBankError`](./src/models/errors/directaccountwithoutbankerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`SourceSameAsDestinationError`](./src/models/errors/sourcesameasdestinationerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidFacilitatorError`](./src/models/errors/invalidfacilitatorerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidFacilitatorFeeCollectFromError`](./src/models/errors/invalidfacilitatorfeecollectfromerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidFacilitatorFeeCollectFromCombinationError`](./src/models/errors/invalidfacilitatorfeecollectfromcombinationerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidDestinationFundingSourceError`](./src/models/errors/invaliddestinationfundingsourceerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidFacilitatorFeeAmountError`](./src/models/errors/invalidfacilitatorfeeamounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WeeklyReceiveLimitReachedError`](./src/models/errors/weeklyreceivelimitreachederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidDestinationClearingTypeError`](./src/models/errors/invaliddestinationclearingtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidAmountForDestinationClearingTypeError`](./src/models/errors/invalidamountfordestinationclearingtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidCorrelationIdError`](./src/models/errors/invalidcorrelationiderror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`SourceAddendaMaxLengthError`](./src/models/errors/sourceaddendamaxlengtherror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`DestinationAddendaMaxLengthError`](./src/models/errors/destinationaddendamaxlengtherror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`AchAddendaEntriesNotEnabledForAccountError`](./src/models/errors/achaddendaentriesnotenabledforaccounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`PointOfSaleAddendaEntriesNotEnabledForAccountError`](./src/models/errors/pointofsaleaddendaentriesnotenabledforaccounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`IncompatibleAddendaEntriesError`](./src/models/errors/incompatibleaddendaentrieserror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidPointOfSaleAddendaIdentificationCodeError`](./src/models/errors/invalidpointofsaleaddendaidentificationcodeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidPointOfSaleAddendaSerialNumberError`](./src/models/errors/invalidpointofsaleaddendaserialnumbererror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidPointOfSaleAddendaDateError`](./src/models/errors/invalidpointofsaleaddendadateerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidPointOfSaleAddendaAddressError`](./src/models/errors/invalidpointofsaleaddendaaddresserror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidPointOfSaleAddendaCityError`](./src/models/errors/invalidpointofsaleaddendacityerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidPointOfSaleAddendaStateError`](./src/models/errors/invalidpointofsaleaddendastateerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`TransferExpiredForFeeError`](./src/models/errors/transferexpiredforfeeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidFeeOdfiError`](./src/models/errors/invalidfeeodfierror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidSourceBankAccountTypeError`](./src/models/errors/invalidsourcebankaccounttypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidDestinationBankAccountTypeError`](./src/models/errors/invaliddestinationbankaccounttypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`IncompatibleSourceAndDestinationTypesError`](./src/models/errors/incompatiblesourceanddestinationtypeserror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`IncompatibleSourceForRtpDestinationError`](./src/models/errors/incompatiblesourceforrtpdestinationerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidAmountForDestinationProcessingChannelError`](./src/models/errors/invalidamountfordestinationprocessingchannelerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`RtpFacilitatorFeeNotSupportedError`](./src/models/errors/rtpfacilitatorfeenotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`RtpUnverifiedSenderNotSupportedError`](./src/models/errors/rtpunverifiedsendernotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`RtpPersonalToPersonalNotSupportedError`](./src/models/errors/rtppersonaltopersonalnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`DestinationProcessingChannelNotSupportedError`](./src/models/errors/destinationprocessingchannelnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`DestinationRemittanceDataMaxLengthError`](./src/models/errors/destinationremittancedatamaxlengtherror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawInvalidAmountError`](./src/models/errors/withdrawinvalidamounterror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawInvalidFundingSourceError`](./src/models/errors/withdrawinvalidfundingsourceerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawAccountRestrictedError`](./src/models/errors/withdrawaccountrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawInvalidAmountForClearingTypeError`](./src/models/errors/withdrawinvalidamountforclearingtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawInvalidWireBeneficiaryLocalityError`](./src/models/errors/withdrawinvalidwirebeneficiarylocalityerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawInvalidWireBeneficiaryRegionError`](./src/models/errors/withdrawinvalidwirebeneficiaryregionerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawInvalidWireBeneficiaryCountryError`](./src/models/errors/withdrawinvalidwirebeneficiarycountryerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawInvalidWireOriginatorToBeneficiaryError`](./src/models/errors/withdrawinvalidwireoriginatortobeneficiaryerror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawProcessingChannelNotSupportedError`](./src/models/errors/withdrawprocessingchannelnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawRtpUnverifiedSenderNotSupportedError`](./src/models/errors/withdrawrtpunverifiedsendernotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WithdrawRtpPersonalWithdrawalNotSupportedError`](./src/models/errors/withdrawrtppersonalwithdrawalnotsupportederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`DepositAccountRestrictedError`](./src/models/errors/depositaccountrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WireInvalidImadError`](./src/models/errors/wireinvalidimaderror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WireAccountRestrictedError`](./src/models/errors/wireaccountrestrictederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WireNotEnabledError`](./src/models/errors/wirenotenablederror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`WireAccountNotFoundError`](./src/models/errors/wireaccountnotfounderror.ts): Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`StatusInvalidError`](./src/models/errors/statusinvaliderror.ts): 400 Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`StatusNotAllowedError`](./src/models/errors/statusnotallowederror.ts): 400 Bad Request. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidUrlFormatError`](./src/models/errors/invalidurlformaterror.ts): Bad request. Status code `400`. Applicable to 1 of 81 methods.*
* [`SecretTooLongError`](./src/models/errors/secrettoolongerror.ts): Bad request. Status code `400`. Applicable to 1 of 81 methods.*
* [`MaxSubscriptionsReachedError`](./src/models/errors/maxsubscriptionsreachederror.ts): Bad request. Status code `400`. Applicable to 1 of 81 methods.*
* [`CreateReAuthExchangeSessionBadRequestDwollaV1HalJSONError`](./src/models/errors/createreauthexchangesessionbadrequestdwollav1haljsonerror.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`ResponseBodyBadRequestError1`](./src/models/errors/responsebodybadrequesterror1.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`ResponseBodyBadRequestError2`](./src/models/errors/responsebodybadrequesterror2.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`ResponseBodyBadRequestError3`](./src/models/errors/responsebodybadrequesterror3.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`BadRequestSchemaError`](./src/models/errors/badrequestschemaerror.ts): Bad request or duplicate resource. Status code `400`. Applicable to 1 of 81 methods.*
* [`InactiveExchangeError`](./src/models/errors/inactiveexchangeerror.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`InvalidExchangeTokenErrorError`](./src/models/errors/invalidexchangetokenerrorerror.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`DuplicateFundingSourceError`](./src/models/errors/duplicatefundingsourceerror.ts): validation error. Status code `400`. Applicable to 1 of 81 methods.*
* [`UnauthorizedError`](./src/models/errors/unauthorizederror.ts): Unauthorized. Status code `401`. Applicable to 1 of 81 methods.*
* [`GetRootDwollaV1HalJSONError`](./src/models/errors/getrootdwollav1haljsonerror.ts): unauthorized. Status code `401`. Applicable to 1 of 81 methods.*
* [`GetExchangeUnauthorizedDwollaV1HalJSONError`](./src/models/errors/getexchangeunauthorizeddwollav1haljsonerror.ts): Invalid Scope. Status code `401`. Applicable to 1 of 81 methods.*
* [`CreateCustomerExchangeSessionDwollaV1HalJSONError`](./src/models/errors/createcustomerexchangesessiondwollav1haljsonerror.ts): unauthorized. Status code `401`. Applicable to 1 of 81 methods.*
* [`CreateAccountExchangeDwollaV1HalJSONError`](./src/models/errors/createaccountexchangedwollav1haljsonerror.ts): Invalid Scope. Status code `401`. Applicable to 1 of 81 methods.*
* [`CreateCustomerExchangeResponseBodyError1`](./src/models/errors/createcustomerexchangeresponsebodyerror1.ts): Unauthorized. Status code `401`. Applicable to 1 of 81 methods.*
* [`CreateCustomerExchangeResponseBodyError2`](./src/models/errors/createcustomerexchangeresponsebodyerror2.ts): Unauthorized. Status code `401`. Applicable to 1 of 81 methods.*
* [`GetAccountDwollaV1HalJSONError`](./src/models/errors/getaccountdwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`CreateCustomerForbiddenDwollaV1HalJSONError`](./src/models/errors/createcustomerforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`GetCustomerForbiddenDwollaV1HalJSONError`](./src/models/errors/getcustomerforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`UpdateForbiddenDwollaV1HalJSONError`](./src/models/errors/updateforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`UpdateBeneficialOwnerForbiddenDwollaV1HalJSONError`](./src/models/errors/updatebeneficialownerforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`GetBeneficialOwnershipStatusForCustomerForbiddenDwollaV1HalJSONError`](./src/models/errors/getbeneficialownershipstatusforcustomerforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError`](./src/models/errors/certifybeneficialownershipforcustomerdwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`InvalidKbaSessionError`](./src/models/errors/invalidkbasessionerror.ts): 403 Error. Status code `403`. Applicable to 1 of 81 methods.*
* [`ExpiredKbaSessionError`](./src/models/errors/expiredkbasessionerror.ts): 403 Error. Status code `403`. Applicable to 1 of 81 methods.*
* [`UpdateOrRemoveFundingSourceForbiddenDwollaV1HalJSONError`](./src/models/errors/updateorremovefundingsourceforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`InitiateOrVerifyMicroDepositsForbiddenDwollaV1HalJSONError`](./src/models/errors/initiateorverifymicrodepositsforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`InvalidAttemptToFacilitateFundsError`](./src/models/errors/invalidattempttofacilitatefundserror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`InvalidAttemptToPayInFundsError`](./src/models/errors/invalidattempttopayinfundserror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`InvalidAttemptToPayOutFundsError`](./src/models/errors/invalidattempttopayoutfundserror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`RtpAccountSettingNotEnabledError`](./src/models/errors/rtpaccountsettingnotenablederror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`InitiateMassPaymentDwollaV1HalJSONError`](./src/models/errors/initiatemasspaymentdwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`GetMassPaymentForbiddenDwollaV1HalJSONError`](./src/models/errors/getmasspaymentforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`UpdateMassPaymentForbiddenDwollaV1HalJSONError`](./src/models/errors/updatemasspaymentforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`ListMassPaymentItemsForbiddenDwollaV1HalJSONError`](./src/models/errors/listmasspaymentitemsforbiddendwollav1haljsonerror.ts): Not authorized to list mass payment items. Status code `403`. Applicable to 1 of 81 methods.*
* [`GetMassPaymentItemForbiddenDwollaV1HalJSONError`](./src/models/errors/getmasspaymentitemforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`RemoveLabelDwollaV1HalJSONError`](./src/models/errors/removelabeldwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`ListCustomerLabelsForbiddenDwollaV1HalJSONError`](./src/models/errors/listcustomerlabelsforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`CreateCustomerLabelForbiddenDwollaV1HalJSONError`](./src/models/errors/createcustomerlabelforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`CreateLabelReallocationForbiddenDwollaV1HalJSONError`](./src/models/errors/createlabelreallocationforbiddendwollav1haljsonerror.ts): Forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`CreateReAuthExchangeSessionForbiddenDwollaV1HalJSONError`](./src/models/errors/createreauthexchangesessionforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`ResponseBodyForbiddenError1`](./src/models/errors/responsebodyforbiddenerror1.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`ResponseBodyForbiddenError2`](./src/models/errors/responsebodyforbiddenerror2.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`RetrieveCustomerExchangeSessionForbiddenDwollaV1HalJSONError`](./src/models/errors/retrievecustomerexchangesessionforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`CreateFundingSourceDwollaV1HalJSONError`](./src/models/errors/createfundingsourcedwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`ListFundingSourcesForbiddenDwollaV1HalJSONError`](./src/models/errors/listfundingsourcesforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`ListMassPaymentsForbiddenDwollaV1HalJSONError`](./src/models/errors/listmasspaymentsforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`NotAuthorizedSchemaError`](./src/models/errors/notauthorizedschemaerror.ts): not found. Status code `403`. Applicable to 1 of 81 methods.*
* [`ListCustomerFundingSourcesForbiddenDwollaV1HalJSONError`](./src/models/errors/listcustomerfundingsourcesforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`CreateCustomerFundingSourceForbiddenDwollaV1HalJSONError`](./src/models/errors/createcustomerfundingsourceforbiddendwollav1haljsonerror.ts): forbidden. Status code `403`. Applicable to 1 of 81 methods.*
* [`ListCustomerMassPaymentsForbiddenDwollaV1HalJSONError`](./src/models/errors/listcustomermasspaymentsforbiddendwollav1haljsonerror.ts): Not authorized to list mass payments. Status code `403`. Applicable to 1 of 81 methods.*
* [`CreateCustomerNotFoundDwollaV1HalJSONError`](./src/models/errors/createcustomernotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetCustomerNotFoundDwollaV1HalJSONError`](./src/models/errors/getcustomernotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListAvailableExchangeConnectionsDwollaV1HalJSONError`](./src/models/errors/listavailableexchangeconnectionsdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`RetrieveBusinessClassificationDwollaV1HalJSONError`](./src/models/errors/retrievebusinessclassificationdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`RetrieveBeneficialOwnerDwollaV1HalJSONError`](./src/models/errors/retrievebeneficialownerdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`UpdateBeneficialOwnerNotFoundDwollaV1HalJSONError`](./src/models/errors/updatebeneficialownernotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`DeleteBeneficialOwnerDwollaV1HalJSONError`](./src/models/errors/deletebeneficialownerdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetBeneficialOwnershipStatusForCustomerNotFoundDwollaV1HalJSONError`](./src/models/errors/getbeneficialownershipstatusforcustomernotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetKbaQuestionsDwollaV1HalJSONError`](./src/models/errors/getkbaquestionsdwollav1haljsonerror.ts): 404 Error. Status code `404`. Applicable to 1 of 81 methods.*
* [`VerifyDwollaV1HalJSONError`](./src/models/errors/verifydwollav1haljsonerror.ts): 404 Error. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetFundingSourceDwollaV1HalJSONError`](./src/models/errors/getfundingsourcedwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`InitiateOrVerifyMicroDepositsNotFoundDwollaV1HalJSONError`](./src/models/errors/initiateorverifymicrodepositsnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetFundingSourceBalanceDwollaV1HalJSONError`](./src/models/errors/getfundingsourcebalancedwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetVanRoutingDwollaV1HalJSONError`](./src/models/errors/getvanroutingdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetMassPaymentNotFoundDwollaV1HalJSONError`](./src/models/errors/getmasspaymentnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`UpdateMassPaymentNotFoundDwollaV1HalJSONError`](./src/models/errors/updatemasspaymentnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListMassPaymentItemsNotFoundDwollaV1HalJSONError`](./src/models/errors/listmasspaymentitemsnotfounddwollav1haljsonerror.ts): Mass payment not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetMassPaymentItemNotFoundDwollaV1HalJSONError`](./src/models/errors/getmasspaymentitemnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListCustomerLabelsNotFoundDwollaV1HalJSONError`](./src/models/errors/listcustomerlabelsnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`CreateCustomerLabelNotFoundDwollaV1HalJSONError`](./src/models/errors/createcustomerlabelnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`CreateLabelReallocationNotFoundDwollaV1HalJSONError`](./src/models/errors/createlabelreallocationnotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`GetExchangeNotFoundDwollaV1HalJSONError`](./src/models/errors/getexchangenotfounddwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`RetrieveCustomerExchangeSessionNotFoundDwollaV1HalJSONError`](./src/models/errors/retrievecustomerexchangesessionnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListFundingSourcesNotFoundDwollaV1HalJSONError`](./src/models/errors/listfundingsourcesnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListAndSearchTransfersDwollaV1HalJSONError`](./src/models/errors/listandsearchtransfersdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListMassPaymentsNotFoundDwollaV1HalJSONError`](./src/models/errors/listmasspaymentsnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListBeneficialOwnersForCustomerDwollaV1HalJSONError`](./src/models/errors/listbeneficialownersforcustomerdwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`CreateCustomerDocumentNotFoundDwollaV1HalJSONError`](./src/models/errors/createcustomerdocumentnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListCustomerFundingSourcesNotFoundDwollaV1HalJSONError`](./src/models/errors/listcustomerfundingsourcesnotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`CreateCustomerFundingSourceNotFoundDwollaV1HalJSONError`](./src/models/errors/createcustomerfundingsourcenotfounddwollav1haljsonerror.ts): not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListCustomerMassPaymentsNotFoundDwollaV1HalJSONError`](./src/models/errors/listcustomermasspaymentsnotfounddwollav1haljsonerror.ts): Customer not found. Status code `404`. Applicable to 1 of 81 methods.*
* [`ListCustomerExchangesDwollaV1HalJSONError`](./src/models/errors/listcustomerexchangesdwollav1haljsonerror.ts): Not Found. Status code `404`. Applicable to 1 of 81 methods.*
* [`CreateCustomerDocumentRequestEntityTooLargeDwollaV1HalJSONError`](./src/models/errors/createcustomerdocumentrequestentitytoolargedwollav1haljsonerror.ts): request entity too large. Status code `413`. Applicable to 1 of 81 methods.*
* [`CreateBeneficialOwnerDocumentDwollaV1HalJSONError`](./src/models/errors/createbeneficialownerdocumentdwollav1haljsonerror.ts): request entity too large. Status code `413`. Applicable to 1 of 81 methods.*
* [`TooManyRequestsErrorError`](./src/models/errors/toomanyrequestserrorerror.ts): Too Many Requests. Status code `429`. Applicable to 1 of 81 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                           | Description       |
| --- | -------------------------------- | ----------------- |
| 0   | `https://api.dwolla.com`         | Production server |
| 1   | `https://api-sandbox.dwolla.com` | Sandbox server    |

#### Example

```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  serverIdx: 1,
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
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
  serverURL: "https://api-sandbox.dwolla.com",
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
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

const sdk = new Dwolla({ httpClient });
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

