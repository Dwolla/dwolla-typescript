# ExchangeSessions
(*exchangeSessions*)

## Overview

### Available Operations

* [create](#create) - Create customer exchange session
* [get](#get) - Retrieve exchange session

## create

Create a new exchange session for a customer to initiate Instant Account Verification using Dwolla's trusted open banking partners.
Currently supported partners are Plaid, Visa, and MX.

The redirect-url is conditionally required:
- Required for Visa exchange sessions
- Required for Plaid exchange sessions on mobile platforms (Android/iOS)
- Not required for MX exchange sessions or Plaid web sessions


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
  const result = await dwolla.exchangeSessions.create({
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
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangeSessionsCreate } from "dwolla-typescript/funcs/exchangeSessionsCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await exchangeSessionsCreate(dwolla, {
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
    console.log("exchangeSessionsCreate failed:", res.error);
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

## get

Retrieve details of an exchange session

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
  const result = await dwolla.exchangeSessions.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangeSessionsGet } from "dwolla-typescript/funcs/exchangeSessionsGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await exchangeSessionsGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exchangeSessionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RetrieveCustomerExchangeSessionRequest](../../models/operations/retrievecustomerexchangesessionrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExchangeSession](../../models/exchangesession.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.RetrieveCustomerExchangeSessionForbiddenDwollaV1HalJSONError | 403                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.RetrieveCustomerExchangeSessionNotFoundDwollaV1HalJSONError  | 404                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |