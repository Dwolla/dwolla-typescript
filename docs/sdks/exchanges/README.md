# Exchanges

## Overview

Operations related to Exchanges

### Available Operations

* [get](#get) - Retrieve exchange resource

## get

Returns details for a specific exchange connection between Dwolla and an open banking partner for a customer's bank account. Includes exchange status, creation date, and links to the associated customer and exchange partner.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getExchange" method="get" path="/exchanges/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.exchanges.get({
    id: "e5e9f2d3-a96c-4abd-a097-8ec7ae28aa8a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { exchangesGet } from "dwolla/funcs/exchangesGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await exchangesGet(dwolla, {
    id: "e5e9f2d3-a96c-4abd-a097-8ec7ae28aa8a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exchangesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExchangeRequest](../../models/operations/getexchangerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Exchange](../../models/exchange.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetExchangeUnauthorizedDwollaV1HalJSONError | 401                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.GetExchangeNotFoundDwollaV1HalJSONError     | 404                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |