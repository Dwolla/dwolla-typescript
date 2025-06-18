# Exchanges
(*exchanges*)

## Overview

Operations related to Exchanges

### Available Operations

* [get](#get) - Retrieve exchange resource
* [createReAuth](#createreauth) - Create re-authentication exchange session

## get

Retrieve exchange resource

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientCredentials: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["DWOLLA_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await dwolla.exchanges.get({
    id: "292317ec-e252-47d8-93c3-2d128e037aa4",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangesGet } from "dwolla-typescript/funcs/exchangesGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientCredentials: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["DWOLLA_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await exchangesGet(dwolla, {
    id: "292317ec-e252-47d8-93c3-2d128e037aa4",
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

## createReAuth

Create a new re-authentication exchange session.

Request body requirements vary by exchange type:
- For Visa: Request body with redirect URL is required
- For Plaid Web: No request body is required
- For Plaid Mobile: Request body with redirect URL is required

The redirect URL will be validated against previously configured URLs stored in Dwolla.
After completing the re-authorization process, the user will be redirected back to your application using this URL.


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientCredentials: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["DWOLLA_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await dwolla.exchanges.createReAuth({
    id: "<id>",
    createReAuthExchangeSession: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangesCreateReAuth } from "dwolla-typescript/funcs/exchangesCreateReAuth.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientCredentials: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["DWOLLA_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await exchangesCreateReAuth(dwolla, {
    id: "<id>",
    createReAuthExchangeSession: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exchangesCreateReAuth failed:", res.error);
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