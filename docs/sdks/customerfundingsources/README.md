# CustomerFundingSources
(*customer.fundingSources*)

## Overview

### Available Operations

* [create](#create) - Create customer funding source

## create

Create a new funding source for a customer.
There are multiple methods available:
- Basic bank funding source (with routing/account numbers)
- Using an exchange


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customer.fundingSources.create({
    id: "<id>",
    requestBody: {
      links: {
        exchange: {
          href: "https://api-sandbox.dwolla.com/exchanges/6bc9109a-04fd-49b6-ace6-ca06fd282d65",
        },
        onDemandAuthorization: {
          href: "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
        },
      },
      bankAccountType: "checking",
      name: "Jane Doe's Checking",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { customerFundingSourcesCreate } from "dwolla-typescript/funcs/customerFundingSourcesCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customerFundingSourcesCreate(dwolla, {
    id: "<id>",
    requestBody: {
      links: {
        exchange: {
          href: "https://api-sandbox.dwolla.com/exchanges/6bc9109a-04fd-49b6-ace6-ca06fd282d65",
        },
        onDemandAuthorization: {
          href: "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
        },
      },
      bankAccountType: "checking",
      name: "Jane Doe's Checking",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerFundingSourcesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerFundingSourceRequest](../../models/operations/createcustomerfundingsourcerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerFundingSourceResponse](../../models/operations/createcustomerfundingsourceresponse.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.InactiveExchangeError                                    | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.InvalidExchangeTokenErrorError                           | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.DuplicateFundingSourceError                              | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.CreateCustomerFundingSourceForbiddenDwollaV1HalJSONError | 403                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.CreateCustomerFundingSourceNotFoundDwollaV1HalJSONError  | 404                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |