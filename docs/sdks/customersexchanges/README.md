# Customers.Exchanges

## Overview

### Available Operations

* [list](#list) - List exchanges for a customer
* [create](#create) - Create an exchange for a customer

## list

Returns all exchanges for a specific customer. Exchanges represent connections between the customer's external bank accounts and open banking partners. Includes exchange status, creation date, and links to associated funding sources and partners.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCustomerExchanges" method="get" path="/customers/{id}/exchanges" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.exchanges.list({
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
import { customersExchangesList } from "dwolla/funcs/customersExchangesList.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersExchangesList(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersExchangesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomerExchangesRequest](../../models/operations/listcustomerexchangesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Exchanges](../../models/exchanges.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.ListCustomerExchangesDwollaV1HalJSONError | 404                                              | application/vnd.dwolla.v1.hal+json               |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## create

Creates an exchange connection between a customer's external bank account and Dwolla through open banking partners. Acts as the handshake that establishes secure access to the customer's bank account data. Request body varies by partner (Plaid, MX, Flinks, Finicity).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCustomerExchange" method="post" path="/customers/{id}/exchanges" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.exchanges.create({
    id: "<id>",
    requestBody: {
      links: {
        exchangePartner: {
          href: "https://api.dwolla.com/exchange-partners/f53ffb32-c84f-496a-9d9d-acd100d396ef",
        },
      },
      plaid: {
        publicToken: "public-production-d5456acb-01d5-4932-9783-e4c883cf1c0c",
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
import { customersExchangesCreate } from "dwolla/funcs/customersExchangesCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersExchangesCreate(dwolla, {
    id: "<id>",
    requestBody: {
      links: {
        exchangePartner: {
          href: "https://api.dwolla.com/exchange-partners/f53ffb32-c84f-496a-9d9d-acd100d396ef",
        },
      },
      plaid: {
        publicToken: "public-production-d5456acb-01d5-4932-9783-e4c883cf1c0c",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersExchangesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerExchangeRequest](../../models/operations/createcustomerexchangerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerExchangeResponse](../../models/operations/createcustomerexchangeresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.InvalidExchangeTokenError                | 400                                             | application/vnd.dwolla.v1.hal+json              |
| errors.InvalidExchangeError                     | 400                                             | application/vnd.dwolla.v1.hal+json              |
| errors.CreateCustomerExchangeResponseBodyError1 | 401                                             | application/vnd.dwolla.v1.hal+json              |
| errors.CreateCustomerExchangeResponseBodyError2 | 401                                             | application/vnd.dwolla.v1.hal+json              |
| errors.NotFoundError                            | 404                                             | application/vnd.dwolla.v1.hal+json              |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |