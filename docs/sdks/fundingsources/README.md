# FundingSources
(*fundingSources*)

## Overview

Operations related to Funding Sources

### Available Operations

* [listCustomerFundingSources](#listcustomerfundingsources) - List customer funding sources
* [createCustomerFundingSource](#createcustomerfundingsource) - Create customer funding source
* [~~createCustomerFundingSourceToken~~](#createcustomerfundingsourcetoken) - Create a funding sources token for dwolla.js :warning: **Deprecated**
* [~~createCustomerIavToken~~](#createcustomeriavtoken) - Create an IAV token for dwolla.js :warning: **Deprecated**
* [getFundingSource](#getfundingsource) - Retrieve a funding source
* [updateOrRemoveFundingSource](#updateorremovefundingsource) - Update or remove a funding source
* [getMicroDeposits](#getmicrodeposits) - Retrieve micro-deposits details
* [initiateOrVerifyMicroDeposits](#initiateorverifymicrodeposits) - Initiate or Verify micro-deposits
* [getFundingSourceBalance](#getfundingsourcebalance) - Retrieve funding source balance
* [getVanAchRouting](#getvanachrouting) - Retrieve account and routing numbers for a VAN (Virtual Account Number)

## listCustomerFundingSources

List customer funding sources

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.listCustomerFundingSources({
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
import { fundingSourcesListCustomerFundingSources } from "dwolla-typescript/funcs/fundingSourcesListCustomerFundingSources.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesListCustomerFundingSources(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.ListCustomerFundingSourcesRequest](../../models/operations/listcustomerfundingsourcesrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FundingSources[]](../../models/.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ListCustomerFundingSourcesForbiddenDwollaV1HalJSONError | 403                                                            | application/vnd.dwolla.v1.hal+json                             |
| errors.ListCustomerFundingSourcesNotFoundDwollaV1HalJSONError  | 404                                                            | application/vnd.dwolla.v1.hal+json                             |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## createCustomerFundingSource

Create a new funding source for a customer.
There are multiple methods available:
- Basic bank funding source (with routing/account numbers)
- Using an exchange


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.createCustomerFundingSource({
    id: "<id>",
    createCustomerFundingSource: {
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { fundingSourcesCreateCustomerFundingSource } from "dwolla-typescript/funcs/fundingSourcesCreateCustomerFundingSource.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesCreateCustomerFundingSource(dwolla, {
    id: "<id>",
    createCustomerFundingSource: {
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
| `request`                                                                                                                                                                      | [operations.CreateCustomerFundingSourceRequest](../../models/operations/createcustomerfundingsourcerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerFundingSourceResponse](../../models/operations/createcustomerfundingsourceresponse.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.CreateCustomerFundingSourceDwollaV1HalJSON               | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.CreateCustomerFundingSourceForbiddenDwollaV1HalJSONError | 403                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.CreateCustomerFundingSourceNotFoundDwollaV1HalJSONError  | 404                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |

## ~~createCustomerFundingSourceToken~~

Create a funding sources token for dwolla.js

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.createCustomerFundingSourceToken({
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
import { fundingSourcesCreateCustomerFundingSourceToken } from "dwolla-typescript/funcs/fundingSourcesCreateCustomerFundingSourceToken.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesCreateCustomerFundingSourceToken(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.CreateCustomerFundingSourceTokenRequest](../../models/operations/createcustomerfundingsourcetokenrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerFundingSourceTokenResponse](../../models/operations/createcustomerfundingsourcetokenresponse.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.CreateCustomerFundingSourceTokenDwollaV1HalJSONError | 404                                                         | application/vnd.dwolla.v1.hal+json                          |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## ~~createCustomerIavToken~~

Create an IAV token for dwolla.js

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.createCustomerIavToken({
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
import { fundingSourcesCreateCustomerIavToken } from "dwolla-typescript/funcs/fundingSourcesCreateCustomerIavToken.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesCreateCustomerIavToken(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.CreateCustomerIavTokenRequest](../../models/operations/createcustomeriavtokenrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerIavTokenResponse](../../models/operations/createcustomeriavtokenresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.CreateCustomerIavTokenDwollaV1HalJSONError | 404                                               | application/vnd.dwolla.v1.hal+json                |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## getFundingSource

Retrieve a funding source

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.getFundingSource({
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
import { fundingSourcesGetFundingSource } from "dwolla-typescript/funcs/fundingSourcesGetFundingSource.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesGetFundingSource(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.GetFundingSourceRequest](../../models/operations/getfundingsourcerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FundingSource](../../models/fundingsource.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetFundingSourceDwollaV1HalJSONError | 404                                         | application/vnd.dwolla.v1.hal+json          |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |

## updateOrRemoveFundingSource

Update or remove a funding source

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.updateOrRemoveFundingSource({
    id: "<id>",
    requestBody: {
      removed: true,
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
import { fundingSourcesUpdateOrRemoveFundingSource } from "dwolla-typescript/funcs/fundingSourcesUpdateOrRemoveFundingSource.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesUpdateOrRemoveFundingSource(dwolla, {
    id: "<id>",
    requestBody: {
      removed: true,
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
| `request`                                                                                                                                                                      | [operations.UpdateOrRemoveFundingSourceRequest](../../models/operations/updateorremovefundingsourcerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateOrRemoveFundingSourceResponse](../../models/operations/updateorremovefundingsourceresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.UpdateOrRemoveFundingSourceBadRequestDwollaV1HalJSONError | 400                                                              | application/vnd.dwolla.v1.hal+json                               |
| errors.UpdateOrRemoveFundingSourceForbiddenDwollaV1HalJSONError  | 403                                                              | application/vnd.dwolla.v1.hal+json                               |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## getMicroDeposits

Retrieve micro-deposits details

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.getMicroDeposits({
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
import { fundingSourcesGetMicroDeposits } from "dwolla-typescript/funcs/fundingSourcesGetMicroDeposits.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesGetMicroDeposits(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.GetMicroDepositsRequest](../../models/operations/getmicrodepositsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMicroDepositsResponse](../../models/operations/getmicrodepositsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.NotFoundError               | 404                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## initiateOrVerifyMicroDeposits

Initiate or Verify micro-deposits.
For initiating micro-deposits, no request body is required.
For verifying micro-deposits, a request body with the micro-deposit amounts is required.


### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.initiateOrVerifyMicroDeposits({
    id: "<id>",
    requestBody: {},
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
import { fundingSourcesInitiateOrVerifyMicroDeposits } from "dwolla-typescript/funcs/fundingSourcesInitiateOrVerifyMicroDeposits.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesInitiateOrVerifyMicroDeposits(dwolla, {
    id: "<id>",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.InitiateOrVerifyMicroDepositsRequest](../../models/operations/initiateorverifymicrodepositsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitiateOrVerifyMicroDepositsResponse](../../models/operations/initiateorverifymicrodepositsresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.InitiateOrVerifyMicroDepositsDwollaV1HalJSONError | 404                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## getFundingSourceBalance

Retrieve funding source balance

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.getFundingSourceBalance({
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
import { fundingSourcesGetFundingSourceBalance } from "dwolla-typescript/funcs/fundingSourcesGetFundingSourceBalance.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesGetFundingSourceBalance(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.GetFundingSourceBalanceRequest](../../models/operations/getfundingsourcebalancerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFundingSourceBalanceResponse](../../models/operations/getfundingsourcebalanceresponse.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetFundingSourceBalanceDwollaV1HalJSONError | 404                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## getVanAchRouting

Retrieve account and routing numbers for a VAN (Virtual Account Number)

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.fundingSources.getVanAchRouting({
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
import { fundingSourcesGetVanAchRouting } from "dwolla-typescript/funcs/fundingSourcesGetVanAchRouting.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await fundingSourcesGetVanAchRouting(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.GetVanAchRoutingRequest](../../models/operations/getvanachroutingrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVanAchRoutingResponse](../../models/operations/getvanachroutingresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetVanAchRoutingDwollaV1HalJSONError | 404                                         | application/vnd.dwolla.v1.hal+json          |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |