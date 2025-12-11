# Exchanges.ExchangeSessions

## Overview

### Available Operations

* [createReAuth](#createreauth) - Create re-authentication exchange session

## createReAuth

Creates a re-authentication exchange session to refresh a user's bank account connection when their existing authorization is no longer valid. Required when receiving an UpdateCredentials error during bank balance checks or when user re-authentication is needed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createReAuthExchangeSession" method="post" path="/exchanges/{id}/exchange-sessions" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.exchanges.exchangeSessions.createReAuth({
    id: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { exchangesExchangeSessionsCreateReAuth } from "dwolla/funcs/exchangesExchangeSessionsCreateReAuth.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await exchangesExchangeSessionsCreateReAuth(dwolla, {
    id: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exchangesExchangeSessionsCreateReAuth failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateReAuthExchangeSessionRequest](../../models/operations/createreauthexchangesessionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateReAuthExchangeSessionResponse](../../models/operations/createreauthexchangesessionresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.CreateReAuthExchangeSessionBadRequestDwollaV1HalJSONError | 400                                                              | application/vnd.dwolla.v1.hal+json                               |
| errors.CreateReAuthExchangeSessionForbiddenDwollaV1HalJSONError  | 403                                                              | application/vnd.dwolla.v1.hal+json                               |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |