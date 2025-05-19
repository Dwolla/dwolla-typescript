# dwolla-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *dwolla-typescript* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=dwolla-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/dwolla-vc3/dwolla). Delete this section before > publishing to a package manager.

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

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Dwolla": {
      "command": "npx",
      "args": [
        "-y", "--package", "dwolla-typescript",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Dwolla": {
      "command": "npx",
      "args": [
        "-y", "--package", "dwolla-typescript",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package dwolla-typescript -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla();

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `DWOLLA_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.root.root();

  // Handle the result
  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla();

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [account](docs/sdks/account/README.md)

* [getAccount](docs/sdks/account/README.md#getaccount) - Retrieve Account Details
* [createAccountFundingSource](docs/sdks/account/README.md#createaccountfundingsource) - Create a funding source for an account
* [listAccountFundingSources](docs/sdks/account/README.md#listaccountfundingsources) - List funding sources for an account
* [listAndSearchAccountTransfers](docs/sdks/account/README.md#listandsearchaccounttransfers) - List and search transfers for an account
* [listAccountMassPayments](docs/sdks/account/README.md#listaccountmasspayments) - List mass payments for an account

### [beneficialOwners](docs/sdks/beneficialowners/README.md)

* [listBeneficialOwnersForCustomer](docs/sdks/beneficialowners/README.md#listbeneficialownersforcustomer) - List beneficial owners
* [createBeneficialOwnerForCustomer](docs/sdks/beneficialowners/README.md#createbeneficialownerforcustomer) - Create beneficial owner
* [retrieveBeneficialOwner](docs/sdks/beneficialowners/README.md#retrievebeneficialowner) - Retrieve beneficial owner
* [updateBeneficialOwner](docs/sdks/beneficialowners/README.md#updatebeneficialowner) - Update beneficial owner
* [deleteBeneficialOwner](docs/sdks/beneficialowners/README.md#deletebeneficialowner) - Delete beneficial owner
* [getBeneficialOwnershipStatusForCustomer](docs/sdks/beneficialowners/README.md#getbeneficialownershipstatusforcustomer) - Retrieve beneficial ownership status
* [certifyBeneficialOwnershipForCustomer](docs/sdks/beneficialowners/README.md#certifybeneficialownershipforcustomer) - Certify beneficial ownership status

### [customers](docs/sdks/customers/README.md)

* [listAndSearchCustomers](docs/sdks/customers/README.md#listandsearchcustomers) - List and search customers
* [createCustomer](docs/sdks/customers/README.md#createcustomer) - Create a customer
* [getCustomer](docs/sdks/customers/README.md#getcustomer) - Retrieve a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer
* [listBusinessClassifications](docs/sdks/customers/README.md#listbusinessclassifications) - List business classification
* [retrieveBusinessClassification](docs/sdks/customers/README.md#retrievebusinessclassification) - Retrieve a business classification

### [documents](docs/sdks/documents/README.md)

* [listCustomerDocuments](docs/sdks/documents/README.md#listcustomerdocuments) - List documents for customer
* [createCustomerDocument](docs/sdks/documents/README.md#createcustomerdocument) - Create a document for customer
* [listBeneficialOwnerDocuments](docs/sdks/documents/README.md#listbeneficialownerdocuments) - List document for beneficial owner
* [createBeneficialOwnerDocument](docs/sdks/documents/README.md#createbeneficialownerdocument) - Create a document for beneficial owner
* [getDocument](docs/sdks/documents/README.md#getdocument) - Retrieve a document


### [events](docs/sdks/events/README.md)

* [getEvent](docs/sdks/events/README.md#getevent) - Retrieve event

### [exchanges](docs/sdks/exchanges/README.md)

* [listExchangePartners](docs/sdks/exchanges/README.md#listexchangepartners) - List exchange partners
* [getExchangePartner](docs/sdks/exchanges/README.md#getexchangepartner) - Retrieve exchange partner
* [listAccountExchanges](docs/sdks/exchanges/README.md#listaccountexchanges) - List exchanges for an account
* [createAccountExchange](docs/sdks/exchanges/README.md#createaccountexchange) - Create an exchange for an account
* [getExchange](docs/sdks/exchanges/README.md#getexchange) - Retrieve exchange resource
* [listCustomerExchanges](docs/sdks/exchanges/README.md#listcustomerexchanges) - List exchanges for a customer
* [createCustomerExchange](docs/sdks/exchanges/README.md#createcustomerexchange) - Create an exchange for a customer

### [exchangeSessions](docs/sdks/exchangesessions/README.md)

* [createCustomerExchangeSession](docs/sdks/exchangesessions/README.md#createcustomerexchangesession) - Create customer exchange session
* [retrieveCustomerExchangeSession](docs/sdks/exchangesessions/README.md#retrievecustomerexchangesession) - Retrieve exchange session
* [createReAuthExchangeSession](docs/sdks/exchangesessions/README.md#createreauthexchangesession) - Create re-authentication exchange session
* [listAvailableExchangeConnections](docs/sdks/exchangesessions/README.md#listavailableexchangeconnections) - List available exchange connections

### [fundingSources](docs/sdks/fundingsources/README.md)

* [listCustomerFundingSources](docs/sdks/fundingsources/README.md#listcustomerfundingsources) - List customer funding sources
* [createCustomerFundingSource](docs/sdks/fundingsources/README.md#createcustomerfundingsource) - Create customer funding source
* [~~createCustomerFundingSourceToken~~](docs/sdks/fundingsources/README.md#createcustomerfundingsourcetoken) - Create a funding sources token for dwolla.js :warning: **Deprecated**
* [~~createCustomerIavToken~~](docs/sdks/fundingsources/README.md#createcustomeriavtoken) - Create an IAV token for dwolla.js :warning: **Deprecated**
* [getFundingSource](docs/sdks/fundingsources/README.md#getfundingsource) - Retrieve a funding source
* [updateOrRemoveFundingSource](docs/sdks/fundingsources/README.md#updateorremovefundingsource) - Update or remove a funding source
* [getMicroDeposits](docs/sdks/fundingsources/README.md#getmicrodeposits) - Retrieve micro-deposits details
* [initiateOrVerifyMicroDeposits](docs/sdks/fundingsources/README.md#initiateorverifymicrodeposits) - Initiate or Verify micro-deposits
* [getFundingSourceBalance](docs/sdks/fundingsources/README.md#getfundingsourcebalance) - Retrieve funding source balance
* [getVanAchRouting](docs/sdks/fundingsources/README.md#getvanachrouting) - Retrieve account and routing numbers for a VAN (Virtual Account Number)

### [kba](docs/sdks/kba/README.md)

* [initiateKbaForCustomer](docs/sdks/kba/README.md#initiatekbaforcustomer) - Initiate a KBA session
* [getKbaQuestions](docs/sdks/kba/README.md#getkbaquestions) - Retrieve KBA Questions
* [verifyKbaQuestions](docs/sdks/kba/README.md#verifykbaquestions) - Verify KBA Questions

### [labels](docs/sdks/labels/README.md)

* [getLabel](docs/sdks/labels/README.md#getlabel) - Retrieve a label
* [removeLabel](docs/sdks/labels/README.md#removelabel) - Remove a label
* [listCustomerLabels](docs/sdks/labels/README.md#listcustomerlabels) - List labels for a customer
* [createCustomerLabel](docs/sdks/labels/README.md#createcustomerlabel) - Create a label for a customer
* [listLabelLedgerEntries](docs/sdks/labels/README.md#listlabelledgerentries) - List label ledger entries
* [createLabelLedgerEntry](docs/sdks/labels/README.md#createlabelledgerentry) - Create label ledger entries
* [getLabelLedgerEntry](docs/sdks/labels/README.md#getlabelledgerentry) - Retrieve a label ledger entry
* [createLabelReallocation](docs/sdks/labels/README.md#createlabelreallocation) - Create a label reallocation
* [retrieveLabelLedgerEntry](docs/sdks/labels/README.md#retrievelabelledgerentry) - Retrieve a label reallocation

### [massPayments](docs/sdks/masspayments/README.md)

* [initiateMassPayment](docs/sdks/masspayments/README.md#initiatemasspayment) - Initiate a mass payment
* [getMassPayment](docs/sdks/masspayments/README.md#getmasspayment) - Retrieve a mass payment
* [updateMassPayment](docs/sdks/masspayments/README.md#updatemasspayment) - Update a mass payment to process or cancel it
* [listMassPaymentItems](docs/sdks/masspayments/README.md#listmasspaymentitems) - List items for a mass payment
* [getMassPaymentItem](docs/sdks/masspayments/README.md#getmasspaymentitem) - Retrieve mass payment item
* [listCustomerMassPayments](docs/sdks/masspayments/README.md#listcustomermasspayments) - List mass payments for customer

### [root](docs/sdks/root/README.md)

* [root](docs/sdks/root/README.md#root) - root

### [tokens](docs/sdks/tokens/README.md)

* [createApplicationAccessToken](docs/sdks/tokens/README.md#createapplicationaccesstoken) - Create an application access token

### [transfers](docs/sdks/transfers/README.md)

* [initiateTransfer](docs/sdks/transfers/README.md#initiatetransfer) - Initiate a transfer
* [getTransfer](docs/sdks/transfers/README.md#gettransfer) - Retrieve a transfer
* [cancelTransfer](docs/sdks/transfers/README.md#canceltransfer) - Cancel a transfer
* [listCustomerTransfers](docs/sdks/transfers/README.md#listcustomertransfers) - List and search transfers for a customer
* [listTransferFees](docs/sdks/transfers/README.md#listtransferfees) - List fees for a transfer
* [getTransferFailureReason](docs/sdks/transfers/README.md#gettransferfailurereason) - Retrieve a transfer failure reason
* [createOnDemandTransferAuthorization](docs/sdks/transfers/README.md#createondemandtransferauthorization) - Create an on-demand transfer authorization

### [webhooks](docs/sdks/webhooks/README.md)

* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Retrieve a webhook
* [listWebhookRetries](docs/sdks/webhooks/README.md#listwebhookretries) - List retries for a webhook
* [retryWebhook](docs/sdks/webhooks/README.md#retrywebhook) - Retry a webhook

### [webhookSubscriptions](docs/sdks/webhooksubscriptions/README.md)

* [listWebhookSubscriptions](docs/sdks/webhooksubscriptions/README.md#listwebhooksubscriptions) - List webhook subscriptions
* [createWebhookSubscription](docs/sdks/webhooksubscriptions/README.md#createwebhooksubscription) - Create a webhook subscription
* [getWebhookSubscription](docs/sdks/webhooksubscriptions/README.md#getwebhooksubscription) - Retrieve a webhook subscription
* [updateWebhookSubscription](docs/sdks/webhooksubscriptions/README.md#updatewebhooksubscription) - Update a webhook subscription
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

- [`accountCreateAccountFundingSource`](docs/sdks/account/README.md#createaccountfundingsource) - Create a funding source for an account
- [`accountGetAccount`](docs/sdks/account/README.md#getaccount) - Retrieve Account Details
- [`accountListAccountFundingSources`](docs/sdks/account/README.md#listaccountfundingsources) - List funding sources for an account
- [`accountListAccountMassPayments`](docs/sdks/account/README.md#listaccountmasspayments) - List mass payments for an account
- [`accountListAndSearchAccountTransfers`](docs/sdks/account/README.md#listandsearchaccounttransfers) - List and search transfers for an account
- [`beneficialOwnersCertifyBeneficialOwnershipForCustomer`](docs/sdks/beneficialowners/README.md#certifybeneficialownershipforcustomer) - Certify beneficial ownership status
- [`beneficialOwnersCreateBeneficialOwnerForCustomer`](docs/sdks/beneficialowners/README.md#createbeneficialownerforcustomer) - Create beneficial owner
- [`beneficialOwnersDeleteBeneficialOwner`](docs/sdks/beneficialowners/README.md#deletebeneficialowner) - Delete beneficial owner
- [`beneficialOwnersGetBeneficialOwnershipStatusForCustomer`](docs/sdks/beneficialowners/README.md#getbeneficialownershipstatusforcustomer) - Retrieve beneficial ownership status
- [`beneficialOwnersListBeneficialOwnersForCustomer`](docs/sdks/beneficialowners/README.md#listbeneficialownersforcustomer) - List beneficial owners
- [`beneficialOwnersRetrieveBeneficialOwner`](docs/sdks/beneficialowners/README.md#retrievebeneficialowner) - Retrieve beneficial owner
- [`beneficialOwnersUpdateBeneficialOwner`](docs/sdks/beneficialowners/README.md#updatebeneficialowner) - Update beneficial owner
- [`customersCreateCustomer`](docs/sdks/customers/README.md#createcustomer) - Create a customer
- [`customersGetCustomer`](docs/sdks/customers/README.md#getcustomer) - Retrieve a customer
- [`customersListAndSearchCustomers`](docs/sdks/customers/README.md#listandsearchcustomers) - List and search customers
- [`customersListBusinessClassifications`](docs/sdks/customers/README.md#listbusinessclassifications) - List business classification
- [`customersRetrieveBusinessClassification`](docs/sdks/customers/README.md#retrievebusinessclassification) - Retrieve a business classification
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update a customer
- [`documentsCreateBeneficialOwnerDocument`](docs/sdks/documents/README.md#createbeneficialownerdocument) - Create a document for beneficial owner
- [`documentsCreateCustomerDocument`](docs/sdks/documents/README.md#createcustomerdocument) - Create a document for customer
- [`documentsGetDocument`](docs/sdks/documents/README.md#getdocument) - Retrieve a document
- [`documentsListBeneficialOwnerDocuments`](docs/sdks/documents/README.md#listbeneficialownerdocuments) - List document for beneficial owner
- [`documentsListCustomerDocuments`](docs/sdks/documents/README.md#listcustomerdocuments) - List documents for customer
- [`eventsGetEvent`](docs/sdks/events/README.md#getevent) - Retrieve event
- [`exchangesCreateAccountExchange`](docs/sdks/exchanges/README.md#createaccountexchange) - Create an exchange for an account
- [`exchangesCreateCustomerExchange`](docs/sdks/exchanges/README.md#createcustomerexchange) - Create an exchange for a customer
- [`exchangeSessionsCreateCustomerExchangeSession`](docs/sdks/exchangesessions/README.md#createcustomerexchangesession) - Create customer exchange session
- [`exchangeSessionsCreateReAuthExchangeSession`](docs/sdks/exchangesessions/README.md#createreauthexchangesession) - Create re-authentication exchange session
- [`exchangeSessionsListAvailableExchangeConnections`](docs/sdks/exchangesessions/README.md#listavailableexchangeconnections) - List available exchange connections
- [`exchangeSessionsRetrieveCustomerExchangeSession`](docs/sdks/exchangesessions/README.md#retrievecustomerexchangesession) - Retrieve exchange session
- [`exchangesGetExchange`](docs/sdks/exchanges/README.md#getexchange) - Retrieve exchange resource
- [`exchangesGetExchangePartner`](docs/sdks/exchanges/README.md#getexchangepartner) - Retrieve exchange partner
- [`exchangesListAccountExchanges`](docs/sdks/exchanges/README.md#listaccountexchanges) - List exchanges for an account
- [`exchangesListCustomerExchanges`](docs/sdks/exchanges/README.md#listcustomerexchanges) - List exchanges for a customer
- [`exchangesListExchangePartners`](docs/sdks/exchanges/README.md#listexchangepartners) - List exchange partners
- [`fundingSourcesCreateCustomerFundingSource`](docs/sdks/fundingsources/README.md#createcustomerfundingsource) - Create customer funding source
- [`fundingSourcesGetFundingSource`](docs/sdks/fundingsources/README.md#getfundingsource) - Retrieve a funding source
- [`fundingSourcesGetFundingSourceBalance`](docs/sdks/fundingsources/README.md#getfundingsourcebalance) - Retrieve funding source balance
- [`fundingSourcesGetMicroDeposits`](docs/sdks/fundingsources/README.md#getmicrodeposits) - Retrieve micro-deposits details
- [`fundingSourcesGetVanAchRouting`](docs/sdks/fundingsources/README.md#getvanachrouting) - Retrieve account and routing numbers for a VAN (Virtual Account Number)
- [`fundingSourcesInitiateOrVerifyMicroDeposits`](docs/sdks/fundingsources/README.md#initiateorverifymicrodeposits) - Initiate or Verify micro-deposits
- [`fundingSourcesListCustomerFundingSources`](docs/sdks/fundingsources/README.md#listcustomerfundingsources) - List customer funding sources
- [`fundingSourcesUpdateOrRemoveFundingSource`](docs/sdks/fundingsources/README.md#updateorremovefundingsource) - Update or remove a funding source
- [`kbaGetKbaQuestions`](docs/sdks/kba/README.md#getkbaquestions) - Retrieve KBA Questions
- [`kbaInitiateKbaForCustomer`](docs/sdks/kba/README.md#initiatekbaforcustomer) - Initiate a KBA session
- [`kbaVerifyKbaQuestions`](docs/sdks/kba/README.md#verifykbaquestions) - Verify KBA Questions
- [`labelsCreateCustomerLabel`](docs/sdks/labels/README.md#createcustomerlabel) - Create a label for a customer
- [`labelsCreateLabelLedgerEntry`](docs/sdks/labels/README.md#createlabelledgerentry) - Create label ledger entries
- [`labelsCreateLabelReallocation`](docs/sdks/labels/README.md#createlabelreallocation) - Create a label reallocation
- [`labelsGetLabel`](docs/sdks/labels/README.md#getlabel) - Retrieve a label
- [`labelsGetLabelLedgerEntry`](docs/sdks/labels/README.md#getlabelledgerentry) - Retrieve a label ledger entry
- [`labelsListCustomerLabels`](docs/sdks/labels/README.md#listcustomerlabels) - List labels for a customer
- [`labelsListLabelLedgerEntries`](docs/sdks/labels/README.md#listlabelledgerentries) - List label ledger entries
- [`labelsRemoveLabel`](docs/sdks/labels/README.md#removelabel) - Remove a label
- [`labelsRetrieveLabelLedgerEntry`](docs/sdks/labels/README.md#retrievelabelledgerentry) - Retrieve a label reallocation
- [`massPaymentsGetMassPayment`](docs/sdks/masspayments/README.md#getmasspayment) - Retrieve a mass payment
- [`massPaymentsGetMassPaymentItem`](docs/sdks/masspayments/README.md#getmasspaymentitem) - Retrieve mass payment item
- [`massPaymentsInitiateMassPayment`](docs/sdks/masspayments/README.md#initiatemasspayment) - Initiate a mass payment
- [`massPaymentsListCustomerMassPayments`](docs/sdks/masspayments/README.md#listcustomermasspayments) - List mass payments for customer
- [`massPaymentsListMassPaymentItems`](docs/sdks/masspayments/README.md#listmasspaymentitems) - List items for a mass payment
- [`massPaymentsUpdateMassPayment`](docs/sdks/masspayments/README.md#updatemasspayment) - Update a mass payment to process or cancel it
- [`rootRoot`](docs/sdks/root/README.md#root) - root
- [`tokensCreateApplicationAccessToken`](docs/sdks/tokens/README.md#createapplicationaccesstoken) - Create an application access token
- [`transfersCancelTransfer`](docs/sdks/transfers/README.md#canceltransfer) - Cancel a transfer
- [`transfersCreateOnDemandTransferAuthorization`](docs/sdks/transfers/README.md#createondemandtransferauthorization) - Create an on-demand transfer authorization
- [`transfersGetTransfer`](docs/sdks/transfers/README.md#gettransfer) - Retrieve a transfer
- [`transfersGetTransferFailureReason`](docs/sdks/transfers/README.md#gettransferfailurereason) - Retrieve a transfer failure reason
- [`transfersInitiateTransfer`](docs/sdks/transfers/README.md#initiatetransfer) - Initiate a transfer
- [`transfersListCustomerTransfers`](docs/sdks/transfers/README.md#listcustomertransfers) - List and search transfers for a customer
- [`transfersListTransferFees`](docs/sdks/transfers/README.md#listtransferfees) - List fees for a transfer
- [`webhooksGetWebhook`](docs/sdks/webhooks/README.md#getwebhook) - Retrieve a webhook
- [`webhooksListWebhookRetries`](docs/sdks/webhooks/README.md#listwebhookretries) - List retries for a webhook
- [`webhooksRetryWebhook`](docs/sdks/webhooks/README.md#retrywebhook) - Retry a webhook
- [`webhookSubscriptionsCreateWebhookSubscription`](docs/sdks/webhooksubscriptions/README.md#createwebhooksubscription) - Create a webhook subscription
- [`webhookSubscriptionsDelete`](docs/sdks/webhooksubscriptions/README.md#delete) - Delete a webhook subscription
- [`webhookSubscriptionsGetWebhookSubscription`](docs/sdks/webhooksubscriptions/README.md#getwebhooksubscription) - Retrieve a webhook subscription
- [`webhookSubscriptionsListWebhooks`](docs/sdks/webhooksubscriptions/README.md#listwebhooks) - List webhooks for a webhook subscription
- [`webhookSubscriptionsListWebhookSubscriptions`](docs/sdks/webhooksubscriptions/README.md#listwebhooksubscriptions) - List webhook subscriptions
- [`webhookSubscriptionsUpdateWebhookSubscription`](docs/sdks/webhooksubscriptions/README.md#updatewebhooksubscription) - Update a webhook subscription
- ~~[`fundingSourcesCreateCustomerFundingSourceToken`](docs/sdks/fundingsources/README.md#createcustomerfundingsourcetoken)~~ - Create a funding sources token for dwolla.js :warning: **Deprecated**
- ~~[`fundingSourcesCreateCustomerIavToken`](docs/sdks/fundingsources/README.md#createcustomeriavtoken)~~ - Create an IAV token for dwolla.js :warning: **Deprecated**

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
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.documents.createCustomerDocument({
    id: "<id>",
    requestBody: {},
  });

  // Handle the result
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
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla();

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
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

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Dwolla } from "dwolla-typescript";

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
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `createApplicationAccessToken` method may throw the following errors:

| Error Type               | Status Code | Content Type     |
| ------------------------ | ----------- | ---------------- |
| errors.UnauthorizedError | 401         | application/json |
| errors.APIError          | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Dwolla } from "dwolla-typescript";
import {
  SDKValidationError,
  UnauthorizedError,
} from "dwolla-typescript/models/errors";

const dwolla = new Dwolla();

async function run() {
  let result;
  try {
    result = await dwolla.tokens.createApplicationAccessToken({
      username: "",
      password: "",
    }, {
      grantType: "client_credentials",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof UnauthorizedError): {
        // Handle err.data$: UnauthorizedErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
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
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  serverIdx: 1,
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  serverURL: "https://api-sandbox.dwolla.com",
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
  });

  // Handle the result
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
import { Dwolla } from "dwolla-typescript";
import { HTTPClient } from "dwolla-typescript/lib/http";

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
import { Dwolla } from "dwolla-typescript";

const sdk = new Dwolla({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DWOLLA_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=dwolla-typescript&utm_campaign=typescript)
