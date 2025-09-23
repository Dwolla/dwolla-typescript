# CustomersExchangeSessions
(*customers.exchangeSessions*)

## Overview

### Available Operations

* [create](#create) - Create customer exchange session

## create

Creates an exchange session to initiate instant bank account verification for a customer. Supports Plaid and MX open banking partners for faster verification as compared to traditional micro-deposits.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCustomerExchangeSession" method="post" path="/customers/{id}/exchange-sessions" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.exchangeSessions.create({
    id: "<id>",
    requestBody: {
      links: {
        exchangePartner: {
          href: "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
        },
        redirectUrl: {
          href: "{\"description\":\"Plaid Android example\",\"value\":\"com.example.app123\"}",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersExchangeSessionsCreate } from "dwolla/funcs/customersExchangeSessionsCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersExchangeSessionsCreate(dwolla, {
    id: "<id>",
    requestBody: {
      links: {
        exchangePartner: {
          href: "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
        },
        redirectUrl: {
          href: "{\"description\":\"Plaid Android example\",\"value\":\"com.example.app123\"}",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersExchangeSessionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerExchangeSessionRequest](../../models/operations/createcustomerexchangesessionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerExchangeSessionResponse](../../models/operations/createcustomerexchangesessionresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ResponseBodyBadRequestError1                      | 400                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.ResponseBodyBadRequestError2                      | 400                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.ResponseBodyBadRequestError3                      | 400                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.CreateCustomerExchangeSessionDwollaV1HalJSONError | 401                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.ResponseBodyForbiddenError1                       | 403                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.ResponseBodyForbiddenError2                       | 403                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.NotFoundError                                     | 404                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |