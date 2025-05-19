# ExchangeSessions
(*exchangeSessions*)

## Overview

Operations related to Exchange Sessions

### Available Operations

* [createCustomerExchangeSession](#createcustomerexchangesession) - Create customer exchange session
* [retrieveCustomerExchangeSession](#retrievecustomerexchangesession) - Retrieve exchange session
* [createReAuthExchangeSession](#createreauthexchangesession) - Create re-authentication exchange session
* [listAvailableExchangeConnections](#listavailableexchangeconnections) - List available exchange connections

## createCustomerExchangeSession

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
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchangeSessions.createCustomerExchangeSession({
    id: "<id>",
    createCustomerExchangeSession: {
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangeSessionsCreateCustomerExchangeSession } from "dwolla-typescript/funcs/exchangeSessionsCreateCustomerExchangeSession.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangeSessionsCreateCustomerExchangeSession(dwolla, {
    id: "<id>",
    createCustomerExchangeSession: {
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.CreateCustomerExchangeSessionBadRequestDwollaV1HalJSON        | 400                                                                  | application/vnd.dwolla.v1.hal+json                                   |
| errors.CreateCustomerExchangeSessionUnauthorizedDwollaV1HalJSONError | 401                                                                  | application/vnd.dwolla.v1.hal+json                                   |
| errors.CreateCustomerExchangeSessionForbiddenDwollaV1HalJSON         | 403                                                                  | application/vnd.dwolla.v1.hal+json                                   |
| errors.CreateCustomerExchangeSessionNotFoundDwollaV1HalJSONError     | 404                                                                  | application/vnd.dwolla.v1.hal+json                                   |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |

## retrieveCustomerExchangeSession

Retrieve details of an exchange session

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchangeSessions.retrieveCustomerExchangeSession({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangeSessionsRetrieveCustomerExchangeSession } from "dwolla-typescript/funcs/exchangeSessionsRetrieveCustomerExchangeSession.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangeSessionsRetrieveCustomerExchangeSession(dwolla, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

## createReAuthExchangeSession

Create a new re-authentication exchange session.
The request body is not required for Plaid Web sessions.


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchangeSessions.createReAuthExchangeSession({
    id: "<id>",
    createReAuthExchangeSession: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangeSessionsCreateReAuthExchangeSession } from "dwolla-typescript/funcs/exchangeSessionsCreateReAuthExchangeSession.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangeSessionsCreateReAuthExchangeSession(dwolla, {
    id: "<id>",
    createReAuthExchangeSession: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

## listAvailableExchangeConnections

Retrieve a list of a customer's external bank accounts that have been authorized through MX Connect.
Each account is represented as an "available exchange connection" with details like the account name and associated availableConnectionToken.
This information is essential for creating an exchange and corresponding funding source within Dwolla.


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchangeSessions.listAvailableExchangeConnections({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangeSessionsListAvailableExchangeConnections } from "dwolla-typescript/funcs/exchangeSessionsListAvailableExchangeConnections.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangeSessionsListAvailableExchangeConnections(dwolla, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAvailableExchangeConnectionsRequest](../../models/operations/listavailableexchangeconnectionsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AvailableExchangeConnections](../../models/availableexchangeconnections.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ListAvailableExchangeConnectionsDwollaV1HalJSONError | 404                                                         | application/vnd.dwolla.v1.hal+json                          |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |