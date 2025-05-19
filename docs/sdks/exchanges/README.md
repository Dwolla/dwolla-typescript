# Exchanges
(*exchanges*)

## Overview

Operations related to Exchanges

### Available Operations

* [listExchangePartners](#listexchangepartners) - List exchange partners
* [getExchangePartner](#getexchangepartner) - Retrieve exchange partner
* [listAccountExchanges](#listaccountexchanges) - List exchanges for an account
* [createAccountExchange](#createaccountexchange) - Create an exchange for an account
* [getExchange](#getexchange) - Retrieve exchange resource
* [listCustomerExchanges](#listcustomerexchanges) - List exchanges for a customer
* [createCustomerExchange](#createcustomerexchange) - Create an exchange for a customer

## listExchangePartners

List exchange partners

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchanges.listExchangePartners();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangesListExchangePartners } from "dwolla-typescript/funcs/exchangesListExchangePartners.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangesListExchangePartners(dwolla);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExchangePartners](../../models/exchangepartners.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getExchangePartner

Retrieve exchange partner

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchanges.getExchangePartner({
    id: "292317ec-e252-47d8-93c3-2d128e037aa4",
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
import { exchangesGetExchangePartner } from "dwolla-typescript/funcs/exchangesGetExchangePartner.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangesGetExchangePartner(dwolla, {
    id: "292317ec-e252-47d8-93c3-2d128e037aa4",
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
| `request`                                                                                                                                                                      | [operations.GetExchangePartnerRequest](../../models/operations/getexchangepartnerrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExchangePartner](../../models/exchangepartner.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetExchangePartnerDwollaV1HalJSONError | 404                                           | application/vnd.dwolla.v1.hal+json            |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## listAccountExchanges

List exchanges for an account

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchanges.listAccountExchanges();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangesListAccountExchanges } from "dwolla-typescript/funcs/exchangesListAccountExchanges.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangesListAccountExchanges(dwolla);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Exchanges](../../models/exchanges.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createAccountExchange

Create an exchange for an account. The request body will vary based on the exchange partner.
For Finicity, the request body will include finicity-specific fields.
For MX Secure Exchange, the request body will include a token.
For Flinks Secure Exchange, the request body will include a token.
For Plaid Secure Exchange, the request body will include a token.


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchanges.createAccountExchange({
    links: {
      exchangePartner: {
        href: "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
      },
    },
    token: "someMXProcessorToken",
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
import { exchangesCreateAccountExchange } from "dwolla-typescript/funcs/exchangesCreateAccountExchange.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangesCreateAccountExchange(dwolla, {
    links: {
      exchangePartner: {
        href: "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
      },
    },
    token: "someMXProcessorToken",
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
| `request`                                                                                                                                                                      | [operations.CreateAccountExchangeRequest](../../models/operations/createaccountexchangerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAccountExchangeResponse](../../models/operations/createaccountexchangeresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.CreateAccountExchangeDwollaV1HalJSON      | 400                                              | application/vnd.dwolla.v1.hal+json               |
| errors.CreateAccountExchangeDwollaV1HalJSONError | 401                                              | application/vnd.dwolla.v1.hal+json               |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## getExchange

Retrieve exchange resource

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchanges.getExchange({
    id: "292317ec-e252-47d8-93c3-2d128e037aa4",
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
import { exchangesGetExchange } from "dwolla-typescript/funcs/exchangesGetExchange.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangesGetExchange(dwolla, {
    id: "292317ec-e252-47d8-93c3-2d128e037aa4",
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

## listCustomerExchanges

List exchanges for a customer

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchanges.listCustomerExchanges({
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
import { exchangesListCustomerExchanges } from "dwolla-typescript/funcs/exchangesListCustomerExchanges.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangesListCustomerExchanges(dwolla, {
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

## createCustomerExchange

Create an exchange for a customer. The request body will vary based on the exchange partner.
For Finicity, the request body will include finicity-specific fields.
For MX Secure Exchange, the request body will include an MX token.
For MX Open Banking, the request body will include an available connection token.
For Flinks Secure Exchange, the request body will include a token.
For Plaid Secure Exchange, the request body will include a processor token.
For Plaid Open Banking, the request body will include a public token.


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.exchanges.createCustomerExchange({
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { exchangesCreateCustomerExchange } from "dwolla-typescript/funcs/exchangesCreateCustomerExchange.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exchangesCreateCustomerExchange(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.CreateCustomerExchangeRequest](../../models/operations/createcustomerexchangerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerExchangeResponse](../../models/operations/createcustomerexchangeresponse.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.CreateCustomerExchangeBadRequestDwollaV1HalJSONError   | 400                                                           | application/vnd.dwolla.v1.hal+json                            |
| errors.CreateCustomerExchangeUnauthorizedDwollaV1HalJSONError | 401                                                           | application/vnd.dwolla.v1.hal+json                            |
| errors.CreateCustomerExchangeNotFoundDwollaV1HalJSONError     | 404                                                           | application/vnd.dwolla.v1.hal+json                            |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |