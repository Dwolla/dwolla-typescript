# Accounts.FundingSources

## Overview

### Available Operations

* [create](#create) - Create a funding source for an account
* [list](#list) - List funding sources for an account

## create

Create a funding source by adding a bank account to a Main Dwolla Account. This endpoint allows you to connect a checking or savings account using either manual bank account details or an exchange resource.

For more information about funding sources, see the [Funding Sources API Reference](https://developers.dwolla.com/docs/api-reference/funding-sources).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createFundingSource" method="post" path="/funding-sources" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.accounts.fundingSources.create({
    name: "<value>",
    bankAccountType: "checking",
    accountNumber: "<value>",
    routingNumber: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { accountsFundingSourcesCreate } from "dwolla/funcs/accountsFundingSourcesCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await accountsFundingSourcesCreate(dwolla, {
    name: "<value>",
    bankAccountType: "checking",
    accountNumber: "<value>",
    routingNumber: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsFundingSourcesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateAccountFundingSource](../../models/createaccountfundingsource.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateFundingSourceResponse](../../models/operations/createfundingsourceresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.BadRequestSchemaError                   | 400                                            | application/vnd.dwolla.v1.hal+json             |
| errors.DuplicateResourceSchemaError            | 400                                            | application/vnd.dwolla.v1.hal+json             |
| errors.CreateFundingSourceDwollaV1HalJSONError | 403                                            | application/vnd.dwolla.v1.hal+json             |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## list

Get a list of all funding sources associated with a specific Main Dwolla Account. This endpoint returns both bank accounts and balance funding sources, with detailed information about each funding source's status, type, and available processing channels.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFundingSources" method="get" path="/accounts/{id}/funding-sources" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.accounts.fundingSources.list({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { accountsFundingSourcesList } from "dwolla/funcs/accountsFundingSourcesList.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await accountsFundingSourcesList(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsFundingSourcesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFundingSourcesRequest](../../models/operations/listfundingsourcesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FundingSources](../../models/fundingsources.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ListFundingSourcesForbiddenDwollaV1HalJSONError | 403                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.ListFundingSourcesNotFoundDwollaV1HalJSONError  | 404                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |