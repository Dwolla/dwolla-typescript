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

> [!IMPORTANT] This SDK is not yet ready for production use. To complete setup please follow the
> steps outlined in your [workspace](https://app.speakeasy.com/org/dwolla-vc3/dwolla). Delete this
> section before > publishing to a package manager.

<!-- Start Summary [summary] -->

## Summary

Dwolla API: Dwolla API Documentation

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->

## Table of Contents

<!-- $toc-max-depth=2 -->

- [dwolla-typescript](#dwolla-typescript)
  - [SDK Installation](#sdk-installation)
  - [Requirements](#requirements)
  - [SDK Example Usage](#sdk-example-usage)
  - [Authentication](#authentication)
  - [Available Resources and Operations](#available-resources-and-operations)
  - [Standalone functions](#standalone-functions)
  - [File uploads](#file-uploads)
  - [Retries](#retries)
  - [Error Handling](#error-handling)
  - [Server Selection](#server-selection)
  - [Custom HTTP Client](#custom-http-client)
  - [Debugging](#debugging)
- [Development](#development)
  - [Maturity](#maturity)
  - [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->

## SDK Installation

> [!TIP] To finish publishing your SDK to npm and others you must
> [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/),
[bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

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

> [!NOTE] This package is published with CommonJS and ES Modules (ESM) support.

### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are exposed as tools that
can be invoked by AI applications.

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
        "-y",
        "--package",
        "dwolla-typescript",
        "--",
        "mcp",
        "start",
        "--client-id",
        "...",
        "--client-secret",
        "...",
        "--token-url",
        "..."
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
        "-y",
        "--package",
        "dwolla-typescript",
        "--",
        "mcp",
        "start",
        "--client-id",
        "...",
        "--client-secret",
        "...",
        "--token-url",
        "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull
these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release
`-H "Authorization: Bearer {GITHUB_PAT}"`.

```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": ["start"]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package dwolla-typescript -- mcp start --help
```

## Local Development

For local development before the package is published, you can configure the MCP server to run
directly from the source code.

<details>
<summary>Claude Configuration</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "dwolla-local": {
      "type": "stdio",
      "command": "node",
      "args": [
        "{your-local-path}/bin/mcp-server.js",
        "start",
        "--client-id",
        "...",
        "--client-secret",
        "...",
        "--server-url",
        "https://api-sandbox.dwolla.com"
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor Configuration</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Dwolla": {
      "command": "node",
      "args": [
        "./bin/mcp-server.js",
        "start",
        "--client-id",
        "...",
        "--client-secret",
        "...",
        "--server-url",
        "https://api-sandbox.dwolla.com"
      ]
    }
  }
}
```

</details>

This configuration assumes you have the source code cloned locally and are running the MCP server
directly from the project directory.

<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->

## SDK Example Usage

### Example

```typescript
import { Dwolla } from 'dwolla-typescript';

const dwolla = new Dwolla({
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    grantType: 'client_credentials',
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

You can set the security parameters through the `security` optional parameter when initializing the
SDK client instance. For example:

```typescript
import { Dwolla } from 'dwolla-typescript';

const dwolla = new Dwolla({
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    grantType: 'client_credentials',
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

- [get](docs/sdks/accounts/README.md#get) - Retrieve Account Details

#### [accounts.exchanges](docs/sdks/accountsexchanges/README.md)

- [list](docs/sdks/accountsexchanges/README.md#list) - List exchanges for an account
- [create](docs/sdks/accountsexchanges/README.md#create) - Create an exchange for an account

#### [accounts.fundingSources](docs/sdks/accountsfundingsources/README.md)

- [create](docs/sdks/accountsfundingsources/README.md#create) - Create a funding source for an
  account
- [list](docs/sdks/accountsfundingsources/README.md#list) - List funding sources for an account

#### [accounts.massPayments](docs/sdks/accountsmasspayments/README.md)

- [list](docs/sdks/accountsmasspayments/README.md#list) - List mass payments for an account

#### [accounts.transfers](docs/sdks/accountstransfers/README.md)

- [list](docs/sdks/accountstransfers/README.md#list) - List and search transfers for an account

### [beneficialOwners](docs/sdks/beneficialowners/README.md)

- [get](docs/sdks/beneficialowners/README.md#get) - Retrieve beneficial owner
- [update](docs/sdks/beneficialowners/README.md#update) - Update beneficial owner
- [delete](docs/sdks/beneficialowners/README.md#delete) - Delete beneficial owner
- [getOwnershipStatus](docs/sdks/beneficialowners/README.md#getownershipstatus) - Retrieve
  beneficial ownership status
- [certifyOwnership](docs/sdks/beneficialowners/README.md#certifyownership) - Certify beneficial
  ownership status

#### [beneficialOwners.documents](docs/sdks/beneficialownersdocuments/README.md)

- [list](docs/sdks/beneficialownersdocuments/README.md#list) - List document for beneficial owner
- [create](docs/sdks/beneficialownersdocuments/README.md#create) - Create a document for beneficial
  owner

### [businessClassifications](docs/sdks/businessclassifications/README.md)

- [list](docs/sdks/businessclassifications/README.md#list) - List business classifications
- [get](docs/sdks/businessclassifications/README.md#get) - Retrieve a business classification

### [clientTokens](docs/sdks/clienttokens/README.md)

- [create](docs/sdks/clienttokens/README.md#create) - Create a client token

### [customers](docs/sdks/customers/README.md)

- [list](docs/sdks/customers/README.md#list) - List and search customers
- [create](docs/sdks/customers/README.md#create) - Create a customer
- [get](docs/sdks/customers/README.md#get) - Retrieve a customer
- [update](docs/sdks/customers/README.md#update) - Update a customer
- [listAvailableConnections](docs/sdks/customers/README.md#listavailableconnections) - List
  available exchange connections

#### [customers.beneficialOwners](docs/sdks/customersbeneficialowners/README.md)

- [list](docs/sdks/customersbeneficialowners/README.md#list) - List beneficial owners
- [create](docs/sdks/customersbeneficialowners/README.md#create) - Create beneficial owner

#### [customers.documents](docs/sdks/customersdocuments/README.md)

- [list](docs/sdks/customersdocuments/README.md#list) - List documents for customer
- [create](docs/sdks/customersdocuments/README.md#create) - Create a document for customer

#### [customers.exchanges](docs/sdks/customersexchanges/README.md)

- [list](docs/sdks/customersexchanges/README.md#list) - List exchanges for a customer
- [create](docs/sdks/customersexchanges/README.md#create) - Create an exchange for a customer

#### [customers.fundingSources](docs/sdks/customersfundingsources/README.md)

- [list](docs/sdks/customersfundingsources/README.md#list) - List customer funding sources

### [documents](docs/sdks/documents/README.md)

- [get](docs/sdks/documents/README.md#get) - Retrieve a document

### [events](docs/sdks/events/README.md)

- [list](docs/sdks/events/README.md#list) - List events
- [get](docs/sdks/events/README.md#get) - Retrieve event

### [exchangePartners](docs/sdks/exchangepartners/README.md)

- [list](docs/sdks/exchangepartners/README.md#list) - List exchange partners
- [get](docs/sdks/exchangepartners/README.md#get) - Retrieve exchange partner

### [exchanges](docs/sdks/exchanges/README.md)

- [get](docs/sdks/exchanges/README.md#get) - Retrieve exchange resource
- [createReAuth](docs/sdks/exchanges/README.md#createreauth) - Create re-authentication exchange
  session

### [exchangeSessions](docs/sdks/exchangesessions/README.md)

- [create](docs/sdks/exchangesessions/README.md#create) - Create customer exchange session
- [get](docs/sdks/exchangesessions/README.md#get) - Retrieve exchange session

### [fundingSources](docs/sdks/fundingsources/README.md)

- [createForCustomer](docs/sdks/fundingsources/README.md#createforcustomer) - Create customer
  funding source
- [get](docs/sdks/fundingsources/README.md#get) - Retrieve a funding source
- [updateOrRemove](docs/sdks/fundingsources/README.md#updateorremove) - Update or remove a funding
  source
- [getMicroDeposits](docs/sdks/fundingsources/README.md#getmicrodeposits) - Retrieve micro-deposits
  details
- [initiateOrVerifyMicroDeposits](docs/sdks/fundingsources/README.md#initiateorverifymicrodeposits) -
  Initiate or Verify micro-deposits
- [getBalance](docs/sdks/fundingsources/README.md#getbalance) - Retrieve funding source balance
- [getVanRouting](docs/sdks/fundingsources/README.md#getvanrouting) - Retrieve VAN account and
  routing numbers

### [kba](docs/sdks/kba/README.md)

- [initiate](docs/sdks/kba/README.md#initiate) - Initiate a KBA session
- [getQuestions](docs/sdks/kba/README.md#getquestions) - Retrieve KBA Questions
- [verify](docs/sdks/kba/README.md#verify) - Verify KBA Questions

### [labels](docs/sdks/labels/README.md)

- [get](docs/sdks/labels/README.md#get) - Retrieve a label
- [remove](docs/sdks/labels/README.md#remove) - Remove a label
- [listForCustomer](docs/sdks/labels/README.md#listforcustomer) - List labels for a customer
- [createForCustomer](docs/sdks/labels/README.md#createforcustomer) - Create a label for a customer
- [listLedgerEntries](docs/sdks/labels/README.md#listledgerentries) - List label ledger entries
- [createLedgerEntry](docs/sdks/labels/README.md#createledgerentry) - Create a label ledger entry
- [getLedgerEntry](docs/sdks/labels/README.md#getledgerentry) - Retrieve a label ledger entry
- [createReallocation](docs/sdks/labels/README.md#createreallocation) - Create a label reallocation
- [getReallocation](docs/sdks/labels/README.md#getreallocation) - Retrieve a label reallocation

### [massPayments](docs/sdks/masspayments/README.md)

- [create](docs/sdks/masspayments/README.md#create) - Initiate a mass payment
- [get](docs/sdks/masspayments/README.md#get) - Retrieve a mass payment
- [update](docs/sdks/masspayments/README.md#update) - Update a mass payment
- [listItems](docs/sdks/masspayments/README.md#listitems) - List items for a mass payment
- [getItem](docs/sdks/masspayments/README.md#getitem) - Retrieve mass payment item
- [listForCustomer](docs/sdks/masspayments/README.md#listforcustomer) - List mass payments for
  customer

### [root](docs/sdks/root/README.md)

- [get](docs/sdks/root/README.md#get) - root

### [tokens](docs/sdks/tokens/README.md)

- [createApplicationAccessToken](docs/sdks/tokens/README.md#createapplicationaccesstoken) - Create
  an application access token

### [transfers](docs/sdks/transfers/README.md)

- [create](docs/sdks/transfers/README.md#create) - Initiate a transfer
- [get](docs/sdks/transfers/README.md#get) - Retrieve a transfer
- [cancel](docs/sdks/transfers/README.md#cancel) - Cancel a transfer
- [listForCustomer](docs/sdks/transfers/README.md#listforcustomer) - List and search transfers for a
  customer
- [listFees](docs/sdks/transfers/README.md#listfees) - List fees for a transfer
- [getFailureReason](docs/sdks/transfers/README.md#getfailurereason) - Retrieve a transfer failure
  reason
- [createOnDemandAuthorization](docs/sdks/transfers/README.md#createondemandauthorization) - Create
  an on-demand transfer authorization

### [webhooks](docs/sdks/webhooks/README.md)

- [get](docs/sdks/webhooks/README.md#get) - Retrieve a webhook
- [listRetries](docs/sdks/webhooks/README.md#listretries) - List retries for a webhook
- [retry](docs/sdks/webhooks/README.md#retry) - Retry a webhook

### [webhookSubscriptions](docs/sdks/webhooksubscriptions/README.md)

- [list](docs/sdks/webhooksubscriptions/README.md#list) - List webhook subscriptions
- [create](docs/sdks/webhooksubscriptions/README.md#create) - Create a webhook subscription
- [get](docs/sdks/webhooksubscriptions/README.md#get) - Retrieve a webhook subscription
- [update](docs/sdks/webhooksubscriptions/README.md#update) - Update a webhook subscription
- [delete](docs/sdks/webhooksubscriptions/README.md#delete) - Delete a webhook subscription
- [listWebhooks](docs/sdks/webhooksubscriptions/README.md#listwebhooks) - List webhooks for a
  webhook subscription

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->

## Standalone functions

All the methods listed above are available as standalone functions. These functions are ideal for
use in applications running in the browser, serverless runtimes or other environments where
application bundle size is a primary concern. When using a bundler to build your application, all
unused functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsExchangesCreate`](docs/sdks/accountsexchanges/README.md#create) - Create an exchange for
  an account
- [`accountsExchangesList`](docs/sdks/accountsexchanges/README.md#list) - List exchanges for an
  account
- [`accountsFundingSourcesCreate`](docs/sdks/accountsfundingsources/README.md#create) - Create a
  funding source for an account
- [`accountsFundingSourcesList`](docs/sdks/accountsfundingsources/README.md#list) - List funding
  sources for an account
- [`accountsGet`](docs/sdks/accounts/README.md#get) - Retrieve Account Details
- [`accountsMassPaymentsList`](docs/sdks/accountsmasspayments/README.md#list) - List mass payments
  for an account
- [`accountsTransfersList`](docs/sdks/accountstransfers/README.md#list) - List and search transfers
  for an account
- [`beneficialOwnersCertifyOwnership`](docs/sdks/beneficialowners/README.md#certifyownership) -
  Certify beneficial ownership status
- [`beneficialOwnersDelete`](docs/sdks/beneficialowners/README.md#delete) - Delete beneficial owner
- [`beneficialOwnersDocumentsCreate`](docs/sdks/beneficialownersdocuments/README.md#create) - Create
  a document for beneficial owner
- [`beneficialOwnersDocumentsList`](docs/sdks/beneficialownersdocuments/README.md#list) - List
  document for beneficial owner
- [`beneficialOwnersGet`](docs/sdks/beneficialowners/README.md#get) - Retrieve beneficial owner
- [`beneficialOwnersGetOwnershipStatus`](docs/sdks/beneficialowners/README.md#getownershipstatus) -
  Retrieve beneficial ownership status
- [`beneficialOwnersUpdate`](docs/sdks/beneficialowners/README.md#update) - Update beneficial owner
- [`businessClassificationsGet`](docs/sdks/businessclassifications/README.md#get) - Retrieve a
  business classification
- [`businessClassificationsList`](docs/sdks/businessclassifications/README.md#list) - List business
  classifications
- [`clientTokensCreate`](docs/sdks/clienttokens/README.md#create) - Create a client token
- [`customersBeneficialOwnersCreate`](docs/sdks/customersbeneficialowners/README.md#create) - Create
  beneficial owner
- [`customersBeneficialOwnersList`](docs/sdks/customersbeneficialowners/README.md#list) - List
  beneficial owners
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create a customer
- [`customersDocumentsCreate`](docs/sdks/customersdocuments/README.md#create) - Create a document
  for customer
- [`customersDocumentsList`](docs/sdks/customersdocuments/README.md#list) - List documents for
  customer
- [`customersExchangesCreate`](docs/sdks/customersexchanges/README.md#create) - Create an exchange
  for a customer
- [`customersExchangesList`](docs/sdks/customersexchanges/README.md#list) - List exchanges for a
  customer
- [`customersFundingSourcesList`](docs/sdks/customersfundingsources/README.md#list) - List customer
  funding sources
- [`customersGet`](docs/sdks/customers/README.md#get) - Retrieve a customer
- [`customersList`](docs/sdks/customers/README.md#list) - List and search customers
- [`customersListAvailableConnections`](docs/sdks/customers/README.md#listavailableconnections) -
  List available exchange connections
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update a customer
- [`documentsGet`](docs/sdks/documents/README.md#get) - Retrieve a document
- [`eventsGet`](docs/sdks/events/README.md#get) - Retrieve event
- [`eventsList`](docs/sdks/events/README.md#list) - List events
- [`exchangePartnersGet`](docs/sdks/exchangepartners/README.md#get) - Retrieve exchange partner
- [`exchangePartnersList`](docs/sdks/exchangepartners/README.md#list) - List exchange partners
- [`exchangesCreateReAuth`](docs/sdks/exchanges/README.md#createreauth) - Create re-authentication
  exchange session
- [`exchangeSessionsCreate`](docs/sdks/exchangesessions/README.md#create) - Create customer exchange
  session
- [`exchangeSessionsGet`](docs/sdks/exchangesessions/README.md#get) - Retrieve exchange session
- [`exchangesGet`](docs/sdks/exchanges/README.md#get) - Retrieve exchange resource
- [`fundingSourcesCreateForCustomer`](docs/sdks/fundingsources/README.md#createforcustomer) - Create
  customer funding source
- [`fundingSourcesGet`](docs/sdks/fundingsources/README.md#get) - Retrieve a funding source
- [`fundingSourcesGetBalance`](docs/sdks/fundingsources/README.md#getbalance) - Retrieve funding
  source balance
- [`fundingSourcesGetMicroDeposits`](docs/sdks/fundingsources/README.md#getmicrodeposits) - Retrieve
  micro-deposits details
- [`fundingSourcesGetVanRouting`](docs/sdks/fundingsources/README.md#getvanrouting) - Retrieve VAN
  account and routing numbers
- [`fundingSourcesInitiateOrVerifyMicroDeposits`](docs/sdks/fundingsources/README.md#initiateorverifymicrodeposits) -
  Initiate or Verify micro-deposits
- [`fundingSourcesUpdateOrRemove`](docs/sdks/fundingsources/README.md#updateorremove) - Update or
  remove a funding source
- [`kbaGetQuestions`](docs/sdks/kba/README.md#getquestions) - Retrieve KBA Questions
- [`kbaInitiate`](docs/sdks/kba/README.md#initiate) - Initiate a KBA session
- [`kbaVerify`](docs/sdks/kba/README.md#verify) - Verify KBA Questions
- [`labelsCreateForCustomer`](docs/sdks/labels/README.md#createforcustomer) - Create a label for a
  customer
- [`labelsCreateLedgerEntry`](docs/sdks/labels/README.md#createledgerentry) - Create a label ledger
  entry
- [`labelsCreateReallocation`](docs/sdks/labels/README.md#createreallocation) - Create a label
  reallocation
- [`labelsGet`](docs/sdks/labels/README.md#get) - Retrieve a label
- [`labelsGetLedgerEntry`](docs/sdks/labels/README.md#getledgerentry) - Retrieve a label ledger
  entry
- [`labelsGetReallocation`](docs/sdks/labels/README.md#getreallocation) - Retrieve a label
  reallocation
- [`labelsListForCustomer`](docs/sdks/labels/README.md#listforcustomer) - List labels for a customer
- [`labelsListLedgerEntries`](docs/sdks/labels/README.md#listledgerentries) - List label ledger
  entries
- [`labelsRemove`](docs/sdks/labels/README.md#remove) - Remove a label
- [`massPaymentsCreate`](docs/sdks/masspayments/README.md#create) - Initiate a mass payment
- [`massPaymentsGet`](docs/sdks/masspayments/README.md#get) - Retrieve a mass payment
- [`massPaymentsGetItem`](docs/sdks/masspayments/README.md#getitem) - Retrieve mass payment item
- [`massPaymentsListForCustomer`](docs/sdks/masspayments/README.md#listforcustomer) - List mass
  payments for customer
- [`massPaymentsListItems`](docs/sdks/masspayments/README.md#listitems) - List items for a mass
  payment
- [`massPaymentsUpdate`](docs/sdks/masspayments/README.md#update) - Update a mass payment
- [`rootGet`](docs/sdks/root/README.md#get) - root
- [`tokensCreateApplicationAccessToken`](docs/sdks/tokens/README.md#createapplicationaccesstoken) -
  Create an application access token
- [`transfersCancel`](docs/sdks/transfers/README.md#cancel) - Cancel a transfer
- [`transfersCreate`](docs/sdks/transfers/README.md#create) - Initiate a transfer
- [`transfersCreateOnDemandAuthorization`](docs/sdks/transfers/README.md#createondemandauthorization) -
  Create an on-demand transfer authorization
- [`transfersGet`](docs/sdks/transfers/README.md#get) - Retrieve a transfer
- [`transfersGetFailureReason`](docs/sdks/transfers/README.md#getfailurereason) - Retrieve a
  transfer failure reason
- [`transfersListFees`](docs/sdks/transfers/README.md#listfees) - List fees for a transfer
- [`transfersListForCustomer`](docs/sdks/transfers/README.md#listforcustomer) - List and search
  transfers for a customer
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Retrieve a webhook
- [`webhooksListRetries`](docs/sdks/webhooks/README.md#listretries) - List retries for a webhook
- [`webhooksRetry`](docs/sdks/webhooks/README.md#retry) - Retry a webhook
- [`webhookSubscriptionsCreate`](docs/sdks/webhooksubscriptions/README.md#create) - Create a webhook
  subscription
- [`webhookSubscriptionsDelete`](docs/sdks/webhooksubscriptions/README.md#delete) - Delete a webhook
  subscription
- [`webhookSubscriptionsGet`](docs/sdks/webhooksubscriptions/README.md#get) - Retrieve a webhook
  subscription
- [`webhookSubscriptionsList`](docs/sdks/webhooksubscriptions/README.md#list) - List webhook
  subscriptions
- [`webhookSubscriptionsListWebhooks`](docs/sdks/webhooksubscriptions/README.md#listwebhooks) - List
  webhooks for a webhook subscription
- [`webhookSubscriptionsUpdate`](docs/sdks/webhooksubscriptions/README.md#update) - Update a webhook
  subscription

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->

## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically
recommended to upload files as a stream rather than reading the entire contents into memory. This
avoids excessive memory consumption and potentially crashing with out-of-memory errors when working
with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a
> file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in
>   [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file)
>   function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a
>   [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an
>   `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from
>   [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Dwolla } from 'dwolla-typescript';

const dwolla = new Dwolla({
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  const result = await dwolla.customers.documents.create({
    id: '<id>',
    requestBody: {},
  });

  console.log(result);
}

run();
```

<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->

## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it
will fall back to the default retry strategy provided by the API. However, the default retry
strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to
the call:

```typescript
import { Dwolla } from 'dwolla-typescript';

const dwolla = new Dwolla({
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken(
    {
      grantType: 'client_credentials',
    },
    {
      retries: {
        strategy: 'backoff',
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    }
  );

  console.log(result);
}

run();
```

If you'd like to override the default retry strategy for all operations that support retries, you
can provide a retryConfig at SDK initialization:

```typescript
import { Dwolla } from 'dwolla-typescript';

const dwolla = new Dwolla({
  retryConfig: {
    strategy: 'backoff',
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    grantType: 'client_credentials',
  });

  console.log(result);
}

run();
```

<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->

## Error Handling

This table shows properties which are common on error classes. For full details see
[error classes](#error-classes).

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.name`        | `string`   | Error class name eg `APIError`                                                          |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP status code eg `404`                                                               |
| `error.contentType` | `string`   | HTTP content type eg `application/json`                                                 |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response. Access to headers and more.                                          |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example

```typescript
import { Dwolla } from 'dwolla-typescript';
import * as errors from 'dwolla-typescript/models/errors';

const dwolla = new Dwolla({
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  try {
    const result = await dwolla.tokens.createApplicationAccessToken({
      grantType: 'client_credentials',
    });

    console.log(result);
  } catch (error) {
    // Depending on the method different errors may be thrown
    if (error instanceof errors.UnauthorizedError) {
      console.log(error.message);
      console.log(error.data$.error); // string
    }

    // Fallback error class, if no other more specific error class is matched
    if (error instanceof errors.APIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.rawResponse.headers);
    }
  }
}

run();
```

### Error Classes

- `APIError`: The fallback error class, if no other more specific error class is matched.
- `SDKValidationError`: Type mismatch between the data returned from the server and the structure
  expected by the SDK. This can also be thrown for invalid method arguments. See `error.rawValue`
  for the raw value and `error.pretty()` for a nicely formatted multi-line string.
- Network errors:
  - `ConnectionError`: HTTP client was unable to make a request to a server.
  - `RequestTimeoutError`: HTTP request timed out due to an AbortSignal signal.
  - `RequestAbortedError`: HTTP request was aborted by the client.
  - `InvalidRequestError`: Any input used to create a request is invalid.
  - `UnexpectedClientError`: Unrecognised or unexpected error.

<details><summary>Less common errors, applicable to a subset of methods (165)</summary>

- [`NotFoundError`](docs/models/errors/notfounderror.md): Error response schema for 404 NotFound.
  Status code `404`. Applicable to 36 of 81 methods.\*
- [`ForbiddenError`](docs/models/errors/forbiddenerror.md): Error response schema for 403 Forbidden.
  Status code `403`. Applicable to 24 of 81 methods.\*
- [`BadRequestError`](docs/models/errors/badrequesterror.md): Error response schema for 400 Bad
  Request. Status code `400`. Applicable to 11 of 81 methods.\*
- [`ValidationErrorSchema`](docs/models/errors/validationerrorschema.md): Status code `400`.
  Applicable to 3 of 81 methods.\*
- [`DuplicateResourceSchemaError`](docs/models/errors/duplicateresourceschemaerror.md): Status code
  `400`. Applicable to 3 of 81 methods.\*
- [`MaximumNumberOfResourcesSchemaError`](docs/models/errors/maximumnumberofresourcesschemaerror.md):
  Bad Request. Status code `400`. Applicable to 2 of 81 methods.\*
- [`InvalidFileTypeSchemaError`](docs/models/errors/invalidfiletypeschemaerror.md): Bad Request.
  Status code `400`. Applicable to 2 of 81 methods.\*
- [`InvalidResourceStateSchemaError`](docs/models/errors/invalidresourcestateschemaerror.md): Status
  code `403`. Applicable to 2 of 81 methods.\*
- [`UpdateBadRequestDwollaV1HalJSONError`](docs/models/errors/updatebadrequestdwollav1haljsonerror.md):
  bad request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerFundingSourceResponseBodyError1`](docs/models/errors/createcustomerfundingsourceresponsebodyerror1.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerFundingSourceResponseBodyError2`](docs/models/errors/createcustomerfundingsourceresponsebodyerror2.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerFundingSourceResponseBodyError3`](docs/models/errors/createcustomerfundingsourceresponsebodyerror3.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`UpdateOrRemoveFundingSourceBadRequestDwollaV1HalJSONError`](docs/models/errors/updateorremovefundingsourcebadrequestdwollav1haljsonerror.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`SourceNotFoundError`](docs/models/errors/sourcenotfounderror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`ReceiverNotFoundError`](docs/models/errors/receivernotfounderror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`InvalidSourceFundingSourceError`](docs/models/errors/invalidsourcefundingsourceerror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`SenderRestrictedError`](docs/models/errors/senderrestrictederror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`ReceiverRestrictedError`](docs/models/errors/receiverrestrictederror.md): Bad Request. Status
  code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidMetadataError`](docs/models/errors/invalidmetadataerror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`OperationBlockedError`](docs/models/errors/operationblockederror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`InvalidAmountLimitError`](docs/models/errors/invalidamountlimiterror.md): Bad Request. Status
  code `400`. Applicable to 1 of 81 methods.\*
- [`CannotParseAmountError`](docs/models/errors/cannotparseamounterror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`InsufficientFundsError`](docs/models/errors/insufficientfundserror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`FacilitatorFeeAccountNotFoundError`](docs/models/errors/facilitatorfeeaccountnotfounderror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`FacilitatorFeeSumTooLargeError`](docs/models/errors/facilitatorfeesumtoolargeerror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`FacilitatorFeeBelowMinimumError`](docs/models/errors/facilitatorfeebelowminimumerror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`HighRiskError`](docs/models/errors/highriskerror.md): Bad Request. Status code `400`. Applicable
  to 1 of 81 methods.\*
- [`IncompatibleHoldingsError`](docs/models/errors/incompatibleholdingserror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`DirectAccountWithoutBankError`](docs/models/errors/directaccountwithoutbankerror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`SourceSameAsDestinationError`](docs/models/errors/sourcesameasdestinationerror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidFacilitatorError`](docs/models/errors/invalidfacilitatorerror.md): Bad Request. Status
  code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidFacilitatorFeeCollectFromError`](docs/models/errors/invalidfacilitatorfeecollectfromerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidFacilitatorFeeCollectFromCombinationError`](docs/models/errors/invalidfacilitatorfeecollectfromcombinationerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidDestinationFundingSourceError`](docs/models/errors/invaliddestinationfundingsourceerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidFacilitatorFeeAmountError`](docs/models/errors/invalidfacilitatorfeeamounterror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WeeklyReceiveLimitReachedError`](docs/models/errors/weeklyreceivelimitreachederror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidDestinationClearingTypeError`](docs/models/errors/invaliddestinationclearingtypeerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidAmountForDestinationClearingTypeError`](docs/models/errors/invalidamountfordestinationclearingtypeerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidCorrelationIdError`](docs/models/errors/invalidcorrelationiderror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`SourceAddendaMaxLengthError`](docs/models/errors/sourceaddendamaxlengtherror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`DestinationAddendaMaxLengthError`](docs/models/errors/destinationaddendamaxlengtherror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`AchAddendaEntriesNotEnabledForAccountError`](docs/models/errors/achaddendaentriesnotenabledforaccounterror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`PointOfSaleAddendaEntriesNotEnabledForAccountError`](docs/models/errors/pointofsaleaddendaentriesnotenabledforaccounterror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`IncompatibleAddendaEntriesError`](docs/models/errors/incompatibleaddendaentrieserror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidPointOfSaleAddendaIdentificationCodeError`](docs/models/errors/invalidpointofsaleaddendaidentificationcodeerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidPointOfSaleAddendaSerialNumberError`](docs/models/errors/invalidpointofsaleaddendaserialnumbererror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidPointOfSaleAddendaDateError`](docs/models/errors/invalidpointofsaleaddendadateerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidPointOfSaleAddendaAddressError`](docs/models/errors/invalidpointofsaleaddendaaddresserror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidPointOfSaleAddendaCityError`](docs/models/errors/invalidpointofsaleaddendacityerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidPointOfSaleAddendaStateError`](docs/models/errors/invalidpointofsaleaddendastateerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`TransferExpiredForFeeError`](docs/models/errors/transferexpiredforfeeerror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidFeeOdfiError`](docs/models/errors/invalidfeeodfierror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`InvalidSourceBankAccountTypeError`](docs/models/errors/invalidsourcebankaccounttypeerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidDestinationBankAccountTypeError`](docs/models/errors/invaliddestinationbankaccounttypeerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`IncompatibleSourceAndDestinationTypesError`](docs/models/errors/incompatiblesourceanddestinationtypeserror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`IncompatibleSourceForRtpDestinationError`](docs/models/errors/incompatiblesourceforrtpdestinationerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidAmountForDestinationProcessingChannelError`](docs/models/errors/invalidamountfordestinationprocessingchannelerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`RtpFacilitatorFeeNotSupportedError`](docs/models/errors/rtpfacilitatorfeenotsupportederror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`RtpUnverifiedSenderNotSupportedError`](docs/models/errors/rtpunverifiedsendernotsupportederror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`RtpPersonalToPersonalNotSupportedError`](docs/models/errors/rtppersonaltopersonalnotsupportederror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`DestinationProcessingChannelNotSupportedError`](docs/models/errors/destinationprocessingchannelnotsupportederror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`DestinationRemittanceDataMaxLengthError`](docs/models/errors/destinationremittancedatamaxlengtherror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawInvalidAmountError`](docs/models/errors/withdrawinvalidamounterror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawInvalidFundingSourceError`](docs/models/errors/withdrawinvalidfundingsourceerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawAccountRestrictedError`](docs/models/errors/withdrawaccountrestrictederror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawInvalidAmountForClearingTypeError`](docs/models/errors/withdrawinvalidamountforclearingtypeerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawInvalidWireBeneficiaryLocalityError`](docs/models/errors/withdrawinvalidwirebeneficiarylocalityerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawInvalidWireBeneficiaryRegionError`](docs/models/errors/withdrawinvalidwirebeneficiaryregionerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawInvalidWireBeneficiaryCountryError`](docs/models/errors/withdrawinvalidwirebeneficiarycountryerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawInvalidWireOriginatorToBeneficiaryError`](docs/models/errors/withdrawinvalidwireoriginatortobeneficiaryerror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawProcessingChannelNotSupportedError`](docs/models/errors/withdrawprocessingchannelnotsupportederror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawRtpUnverifiedSenderNotSupportedError`](docs/models/errors/withdrawrtpunverifiedsendernotsupportederror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WithdrawRtpPersonalWithdrawalNotSupportedError`](docs/models/errors/withdrawrtppersonalwithdrawalnotsupportederror.md):
  Bad Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`DepositAccountRestrictedError`](docs/models/errors/depositaccountrestrictederror.md): Bad
  Request. Status code `400`. Applicable to 1 of 81 methods.\*
- [`WireInvalidImadError`](docs/models/errors/wireinvalidimaderror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`WireAccountRestrictedError`](docs/models/errors/wireaccountrestrictederror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`WireNotEnabledError`](docs/models/errors/wirenotenablederror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`WireAccountNotFoundError`](docs/models/errors/wireaccountnotfounderror.md): Bad Request. Status
  code `400`. Applicable to 1 of 81 methods.\*
- [`StatusInvalidError`](docs/models/errors/statusinvaliderror.md): 400 Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`StatusNotAllowedError`](docs/models/errors/statusnotallowederror.md): 400 Bad Request. Status
  code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidUrlFormatError`](docs/models/errors/invalidurlformaterror.md): Bad request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`SecretTooLongError`](docs/models/errors/secrettoolongerror.md): Bad request. Status code `400`.
  Applicable to 1 of 81 methods.\*
- [`MaxSubscriptionsReachedError`](docs/models/errors/maxsubscriptionsreachederror.md): Bad request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`CreateReAuthExchangeSessionBadRequestDwollaV1HalJSONError`](docs/models/errors/createreauthexchangesessionbadrequestdwollav1haljsonerror.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerExchangeSessionResponseBodyBadRequestError1`](docs/models/errors/createcustomerexchangesessionresponsebodybadrequesterror1.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerExchangeSessionResponseBodyBadRequestError2`](docs/models/errors/createcustomerexchangesessionresponsebodybadrequesterror2.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerExchangeSessionResponseBodyBadRequestError3`](docs/models/errors/createcustomerexchangesessionresponsebodybadrequesterror3.md):
  validation error. Status code `400`. Applicable to 1 of 81 methods.\*
- [`BadRequestSchemaError`](docs/models/errors/badrequestschemaerror.md): Bad request or duplicate
  resource. Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidExchangeTokenError`](docs/models/errors/invalidexchangetokenerror.md): Bad Request.
  Status code `400`. Applicable to 1 of 81 methods.\*
- [`InvalidExchangeError`](docs/models/errors/invalidexchangeerror.md): Bad Request. Status code
  `400`. Applicable to 1 of 81 methods.\*
- [`UnauthorizedError`](docs/models/errors/unauthorizederror.md): Unauthorized. Status code `401`.
  Applicable to 1 of 81 methods.\*
- [`GetRootDwollaV1HalJSONError`](docs/models/errors/getrootdwollav1haljsonerror.md): unauthorized.
  Status code `401`. Applicable to 1 of 81 methods.\*
- [`GetExchangeUnauthorizedDwollaV1HalJSONError`](docs/models/errors/getexchangeunauthorizeddwollav1haljsonerror.md):
  Invalid Scope. Status code `401`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerExchangeSessionDwollaV1HalJSONError`](docs/models/errors/createcustomerexchangesessiondwollav1haljsonerror.md):
  unauthorized. Status code `401`. Applicable to 1 of 81 methods.\*
- [`CreateAccountExchangeDwollaV1HalJSONError`](docs/models/errors/createaccountexchangedwollav1haljsonerror.md):
  Invalid Scope. Status code `401`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerExchangeDwollaV1HalJSONError`](docs/models/errors/createcustomerexchangedwollav1haljsonerror.md):
  Invalid Scope. Status code `401`. Applicable to 1 of 81 methods.\*
- [`GetAccountDwollaV1HalJSONError`](docs/models/errors/getaccountdwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerForbiddenDwollaV1HalJSONError`](docs/models/errors/createcustomerforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`GetCustomerForbiddenDwollaV1HalJSONError`](docs/models/errors/getcustomerforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`UpdateForbiddenDwollaV1HalJSONError`](docs/models/errors/updateforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`UpdateBeneficialOwnerForbiddenDwollaV1HalJSONError`](docs/models/errors/updatebeneficialownerforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`GetBeneficialOwnershipStatusForCustomerForbiddenDwollaV1HalJSONError`](docs/models/errors/getbeneficialownershipstatusforcustomerforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError`](docs/models/errors/certifybeneficialownershipforcustomerdwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`InvalidKbaSessionError`](docs/models/errors/invalidkbasessionerror.md): 403 Error. Status code
  `403`. Applicable to 1 of 81 methods.\*
- [`ExpiredKbaSessionError`](docs/models/errors/expiredkbasessionerror.md): 403 Error. Status code
  `403`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerFundingSourceForbiddenDwollaV1HalJSONError`](docs/models/errors/createcustomerfundingsourceforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`UpdateOrRemoveFundingSourceForbiddenDwollaV1HalJSONError`](docs/models/errors/updateorremovefundingsourceforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`InvalidAttemptToFacilitateFundsError`](docs/models/errors/invalidattempttofacilitatefundserror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`InvalidAttemptToPayInFundsError`](docs/models/errors/invalidattempttopayinfundserror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`InvalidAttemptToPayOutFundsError`](docs/models/errors/invalidattempttopayoutfundserror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`RtpAccountSettingNotEnabledError`](docs/models/errors/rtpaccountsettingnotenablederror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`InitiateMassPaymentDwollaV1HalJSONError`](docs/models/errors/initiatemasspaymentdwollav1haljsonerror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`GetMassPaymentForbiddenDwollaV1HalJSONError`](docs/models/errors/getmasspaymentforbiddendwollav1haljsonerror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`UpdateMassPaymentForbiddenDwollaV1HalJSONError`](docs/models/errors/updatemasspaymentforbiddendwollav1haljsonerror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`ListMassPaymentItemsForbiddenDwollaV1HalJSONError`](docs/models/errors/listmasspaymentitemsforbiddendwollav1haljsonerror.md):
  Not authorized to list mass payment items. Status code `403`. Applicable to 1 of 81 methods.\*
- [`GetMassPaymentItemForbiddenDwollaV1HalJSONError`](docs/models/errors/getmasspaymentitemforbiddendwollav1haljsonerror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`ListCustomerMassPaymentsForbiddenDwollaV1HalJSONError`](docs/models/errors/listcustomermasspaymentsforbiddendwollav1haljsonerror.md):
  Not authorized to list mass payments. Status code `403`. Applicable to 1 of 81 methods.\*
- [`RemoveLabelDwollaV1HalJSONError`](docs/models/errors/removelabeldwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`ListCustomerLabelsForbiddenDwollaV1HalJSONError`](docs/models/errors/listcustomerlabelsforbiddendwollav1haljsonerror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerLabelForbiddenDwollaV1HalJSONError`](docs/models/errors/createcustomerlabelforbiddendwollav1haljsonerror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`CreateLabelReallocationForbiddenDwollaV1HalJSONError`](docs/models/errors/createlabelreallocationforbiddendwollav1haljsonerror.md):
  Forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`CreateReAuthExchangeSessionForbiddenDwollaV1HalJSONError`](docs/models/errors/createreauthexchangesessionforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`ResponseBodyForbiddenError1`](docs/models/errors/responsebodyforbiddenerror1.md): forbidden.
  Status code `403`. Applicable to 1 of 81 methods.\*
- [`ResponseBodyForbiddenError2`](docs/models/errors/responsebodyforbiddenerror2.md): forbidden.
  Status code `403`. Applicable to 1 of 81 methods.\*
- [`RetrieveCustomerExchangeSessionForbiddenDwollaV1HalJSONError`](docs/models/errors/retrievecustomerexchangesessionforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`CreateFundingSourceDwollaV1HalJSONError`](docs/models/errors/createfundingsourcedwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`ListFundingSourcesForbiddenDwollaV1HalJSONError`](docs/models/errors/listfundingsourcesforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`ListMassPaymentsForbiddenDwollaV1HalJSONError`](docs/models/errors/listmasspaymentsforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`NotAuthorizedSchemaError`](docs/models/errors/notauthorizedschemaerror.md): not found. Status
  code `403`. Applicable to 1 of 81 methods.\*
- [`ListCustomerFundingSourcesForbiddenDwollaV1HalJSONError`](docs/models/errors/listcustomerfundingsourcesforbiddendwollav1haljsonerror.md):
  forbidden. Status code `403`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerNotFoundDwollaV1HalJSONError`](docs/models/errors/createcustomernotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetCustomerNotFoundDwollaV1HalJSONError`](docs/models/errors/getcustomernotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListAvailableExchangeConnectionsDwollaV1HalJSONError`](docs/models/errors/listavailableexchangeconnectionsdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`RetrieveBusinessClassificationDwollaV1HalJSONError`](docs/models/errors/retrievebusinessclassificationdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`RetrieveBeneficialOwnerDwollaV1HalJSONError`](docs/models/errors/retrievebeneficialownerdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`UpdateBeneficialOwnerNotFoundDwollaV1HalJSONError`](docs/models/errors/updatebeneficialownernotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`DeleteBeneficialOwnerDwollaV1HalJSONError`](docs/models/errors/deletebeneficialownerdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetBeneficialOwnershipStatusForCustomerNotFoundDwollaV1HalJSONError`](docs/models/errors/getbeneficialownershipstatusforcustomernotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetKbaQuestionsDwollaV1HalJSONError`](docs/models/errors/getkbaquestionsdwollav1haljsonerror.md):
  404 Error. Status code `404`. Applicable to 1 of 81 methods.\*
- [`VerifyDwollaV1HalJSONError`](docs/models/errors/verifydwollav1haljsonerror.md): 404 Error.
  Status code `404`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerFundingSourceNotFoundDwollaV1HalJSONError`](docs/models/errors/createcustomerfundingsourcenotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetFundingSourceDwollaV1HalJSONError`](docs/models/errors/getfundingsourcedwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`InitiateOrVerifyMicroDepositsDwollaV1HalJSONError`](docs/models/errors/initiateorverifymicrodepositsdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetFundingSourceBalanceDwollaV1HalJSONError`](docs/models/errors/getfundingsourcebalancedwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetVanRoutingDwollaV1HalJSONError`](docs/models/errors/getvanroutingdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetMassPaymentNotFoundDwollaV1HalJSONError`](docs/models/errors/getmasspaymentnotfounddwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`UpdateMassPaymentNotFoundDwollaV1HalJSONError`](docs/models/errors/updatemasspaymentnotfounddwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListMassPaymentItemsNotFoundDwollaV1HalJSONError`](docs/models/errors/listmasspaymentitemsnotfounddwollav1haljsonerror.md):
  Mass payment not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetMassPaymentItemNotFoundDwollaV1HalJSONError`](docs/models/errors/getmasspaymentitemnotfounddwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListCustomerMassPaymentsNotFoundDwollaV1HalJSONError`](docs/models/errors/listcustomermasspaymentsnotfounddwollav1haljsonerror.md):
  Customer not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListCustomerLabelsNotFoundDwollaV1HalJSONError`](docs/models/errors/listcustomerlabelsnotfounddwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerLabelNotFoundDwollaV1HalJSONError`](docs/models/errors/createcustomerlabelnotfounddwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`CreateLabelReallocationNotFoundDwollaV1HalJSONError`](docs/models/errors/createlabelreallocationnotfounddwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`GetExchangeNotFoundDwollaV1HalJSONError`](docs/models/errors/getexchangenotfounddwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`RetrieveCustomerExchangeSessionNotFoundDwollaV1HalJSONError`](docs/models/errors/retrievecustomerexchangesessionnotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListFundingSourcesNotFoundDwollaV1HalJSONError`](docs/models/errors/listfundingsourcesnotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListAndSearchTransfersDwollaV1HalJSONError`](docs/models/errors/listandsearchtransfersdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListMassPaymentsNotFoundDwollaV1HalJSONError`](docs/models/errors/listmasspaymentsnotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListBeneficialOwnersForCustomerDwollaV1HalJSONError`](docs/models/errors/listbeneficialownersforcustomerdwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerDocumentNotFoundDwollaV1HalJSONError`](docs/models/errors/createcustomerdocumentnotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListCustomerFundingSourcesNotFoundDwollaV1HalJSONError`](docs/models/errors/listcustomerfundingsourcesnotfounddwollav1haljsonerror.md):
  not found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`ListCustomerExchangesDwollaV1HalJSONError`](docs/models/errors/listcustomerexchangesdwollav1haljsonerror.md):
  Not Found. Status code `404`. Applicable to 1 of 81 methods.\*
- [`CreateCustomerDocumentRequestEntityTooLargeDwollaV1HalJSONError`](docs/models/errors/createcustomerdocumentrequestentitytoolargedwollav1haljsonerror.md):
  request entity too large. Status code `413`. Applicable to 1 of 81 methods.\*
- [`CreateBeneficialOwnerDocumentDwollaV1HalJSONError`](docs/models/errors/createbeneficialownerdocumentdwollav1haljsonerror.md):
  request entity too large. Status code `413`. Applicable to 1 of 81 methods.\*
- [`TooManyRequestsErrorError`](docs/models/errors/toomanyrequestserrorerror.md): Too Many Requests.
Status code `429`. Applicable to 1 of 81 methods.\*
</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is
applicable.

<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->

## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number`
optional parameter when initializing the SDK client instance. The selected server will then be used
as the default on the operations that use it. This table lists the indexes associated with the
available servers:

| #   | Server                           | Description       |
| --- | -------------------------------- | ----------------- |
| 0   | `https://api.dwolla.com`         | Production server |
| 1   | `https://api-sandbox.dwolla.com` | Sandbox server    |

#### Example

```typescript
import { Dwolla } from 'dwolla-typescript';

const dwolla = new Dwolla({
  serverIdx: 1,
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    grantType: 'client_credentials',
  });

  console.log(result);
}

run();
```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string`
optional parameter when initializing the SDK client instance. For example:

```typescript
import { Dwolla } from 'dwolla-typescript';

const dwolla = new Dwolla({
  serverURL: 'https://api-sandbox.dwolla.com',
  security: {
    clientID: process.env['DWOLLA_CLIENT_ID'] ?? '',
    clientSecret: process.env['DWOLLA_CLIENT_SECRET'] ?? '',
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    grantType: 'client_credentials',
  });

  console.log(result);
}

run();
```

<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This client is a thin
wrapper around `fetch` and provides the ability to attach hooks around the request lifecycle that
can be used to modify the request or handle errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be used to integrate a
third-party HTTP client or when writing tests to mock out the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a custom header and a
timeout to requests and how to use the `"requestError"` hook to log errors:

```typescript
import { Dwolla } from 'dwolla-typescript';
import { HTTPClient } from 'dwolla-typescript/lib/http';

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  },
});

httpClient.addHook('beforeRequest', (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000),
  });

  nextRequest.headers.set('x-custom-header', 'custom value');

  return nextRequest;
});

httpClient.addHook('requestError', (error, request) => {
  console.group('Request Error');
  console.log('Reason:', `${error}`);
  console.log('Endpoint:', `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Dwolla({ httpClient });
```

<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->

## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING] Beware that debug logging will reveal secrets, like API tokens in headers, in log
> messages printed to a console or files. It's recommended to use this feature only during local
> development and not in production.

```typescript
import { Dwolla } from 'dwolla-typescript';

const sdk = new Dwolla({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DWOLLA_DEBUG` to
true.

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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=dwolla-typescript&utm_campaign=typescript)
