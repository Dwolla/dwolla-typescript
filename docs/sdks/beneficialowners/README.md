# BeneficialOwners
(*beneficialOwners*)

## Overview

Operations related to Beneficial Owners

### Available Operations

* [listBeneficialOwnersForCustomer](#listbeneficialownersforcustomer) - List beneficial owners
* [createBeneficialOwnerForCustomer](#createbeneficialownerforcustomer) - Create beneficial owner
* [retrieveBeneficialOwner](#retrievebeneficialowner) - Retrieve beneficial owner
* [updateBeneficialOwner](#updatebeneficialowner) - Update beneficial owner
* [deleteBeneficialOwner](#deletebeneficialowner) - Delete beneficial owner
* [getBeneficialOwnershipStatusForCustomer](#getbeneficialownershipstatusforcustomer) - Retrieve beneficial ownership status
* [certifyBeneficialOwnershipForCustomer](#certifybeneficialownershipforcustomer) - Certify beneficial ownership status

## listBeneficialOwnersForCustomer

Retrieve a list of beneficial owners that belong to a Customer

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.beneficialOwners.listBeneficialOwnersForCustomer({
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
import { beneficialOwnersListBeneficialOwnersForCustomer } from "dwolla-typescript/funcs/beneficialOwnersListBeneficialOwnersForCustomer.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await beneficialOwnersListBeneficialOwnersForCustomer(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.ListBeneficialOwnersForCustomerRequest](../../models/operations/listbeneficialownersforcustomerrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BeneficialOwners](../../models/beneficialowners.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ListBeneficialOwnersForCustomerDwollaV1HalJSONError | 404                                                        | application/vnd.dwolla.v1.hal+json                         |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## createBeneficialOwnerForCustomer

Create beneficial owner which is a natural person who, directly or indirectly, owns 25% or more of the equity interests of the company.

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.beneficialOwners.createBeneficialOwnerForCustomer({
    id: "<id>",
    requestBody: {
      firstName: "Nyasia",
      lastName: "Schamberger",
      dateOfBirth: "1988-06-01",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      ssn: "<value>",
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
import { beneficialOwnersCreateBeneficialOwnerForCustomer } from "dwolla-typescript/funcs/beneficialOwnersCreateBeneficialOwnerForCustomer.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await beneficialOwnersCreateBeneficialOwnerForCustomer(dwolla, {
    id: "<id>",
    requestBody: {
      firstName: "Nyasia",
      lastName: "Schamberger",
      dateOfBirth: "1988-06-01",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      ssn: "<value>",
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
| `request`                                                                                                                                                                      | [operations.CreateBeneficialOwnerForCustomerRequest](../../models/operations/createbeneficialownerforcustomerrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBeneficialOwnerForCustomerResponse](../../models/operations/createbeneficialownerforcustomerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## retrieveBeneficialOwner

Retrieve details for a single beneficial owner

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.beneficialOwners.retrieveBeneficialOwner({
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
import { beneficialOwnersRetrieveBeneficialOwner } from "dwolla-typescript/funcs/beneficialOwnersRetrieveBeneficialOwner.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await beneficialOwnersRetrieveBeneficialOwner(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.RetrieveBeneficialOwnerRequest](../../models/operations/retrievebeneficialownerrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BeneficialOwner](../../models/beneficialowner.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.RetrieveBeneficialOwnerDwollaV1HalJSONError | 404                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## updateBeneficialOwner

Update beneficial owner

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.beneficialOwners.updateBeneficialOwner({
    id: "<id>",
    requestBody: {
      firstName: "Lauryn",
      lastName: "D'Amore",
      dateOfBirth: "2005-10-23",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      passport: {
        number: "<value>",
        country: "Suriname",
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
import { beneficialOwnersUpdateBeneficialOwner } from "dwolla-typescript/funcs/beneficialOwnersUpdateBeneficialOwner.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await beneficialOwnersUpdateBeneficialOwner(dwolla, {
    id: "<id>",
    requestBody: {
      firstName: "Lauryn",
      lastName: "D'Amore",
      dateOfBirth: "2005-10-23",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      passport: {
        number: "<value>",
        country: "Suriname",
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
| `request`                                                                                                                                                                      | [operations.UpdateBeneficialOwnerRequest](../../models/operations/updatebeneficialownerrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BeneficialOwner](../../models/beneficialowner.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.UpdateBeneficialOwnerBadRequestDwollaV1HalJSONError | 400                                                        | application/vnd.dwolla.v1.hal+json                         |
| errors.UpdateBeneficialOwnerForbiddenDwollaV1HalJSONError  | 403                                                        | application/vnd.dwolla.v1.hal+json                         |
| errors.UpdateBeneficialOwnerNotFoundDwollaV1HalJSONError   | 404                                                        | application/vnd.dwolla.v1.hal+json                         |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## deleteBeneficialOwner

Delete beneficial owner

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.beneficialOwners.deleteBeneficialOwner({
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
import { beneficialOwnersDeleteBeneficialOwner } from "dwolla-typescript/funcs/beneficialOwnersDeleteBeneficialOwner.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await beneficialOwnersDeleteBeneficialOwner(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.DeleteBeneficialOwnerRequest](../../models/operations/deletebeneficialownerrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteBeneficialOwnerResponse](../../models/operations/deletebeneficialownerresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.DeleteBeneficialOwnerDwollaV1HalJSONError | 404                                              | application/vnd.dwolla.v1.hal+json               |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## getBeneficialOwnershipStatusForCustomer

Retrieve beneficial ownership status

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.beneficialOwners.getBeneficialOwnershipStatusForCustomer({
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
import { beneficialOwnersGetBeneficialOwnershipStatusForCustomer } from "dwolla-typescript/funcs/beneficialOwnersGetBeneficialOwnershipStatusForCustomer.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await beneficialOwnersGetBeneficialOwnershipStatusForCustomer(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.GetBeneficialOwnershipStatusForCustomerRequest](../../models/operations/getbeneficialownershipstatusforcustomerrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BeneficialOwnership](../../models/beneficialownership.md)\>**

### Errors

| Error Type                                                                  | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.GetBeneficialOwnershipStatusForCustomerForbiddenDwollaV1HalJSONError | 403                                                                         | application/vnd.dwolla.v1.hal+json                                          |
| errors.GetBeneficialOwnershipStatusForCustomerNotFoundDwollaV1HalJSONError  | 404                                                                         | application/vnd.dwolla.v1.hal+json                                          |
| errors.APIError                                                             | 4XX, 5XX                                                                    | \*/\*                                                                       |

## certifyBeneficialOwnershipForCustomer

certify beneficial ownership status

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.beneficialOwners.certifyBeneficialOwnershipForCustomer({
    id: "<id>",
    requestBody: {
      status: "<value>",
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
import { beneficialOwnersCertifyBeneficialOwnershipForCustomer } from "dwolla-typescript/funcs/beneficialOwnersCertifyBeneficialOwnershipForCustomer.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await beneficialOwnersCertifyBeneficialOwnershipForCustomer(dwolla, {
    id: "<id>",
    requestBody: {
      status: "<value>",
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
| `request`                                                                                                                                                                      | [operations.CertifyBeneficialOwnershipForCustomerRequest](../../models/operations/certifybeneficialownershipforcustomerrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BeneficialOwnership](../../models/beneficialownership.md)\>**

### Errors

| Error Type                                                                 | Status Code                                                                | Content Type                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| errors.CertifyBeneficialOwnershipForCustomerBadRequestDwollaV1HalJSONError | 400                                                                        | application/vnd.dwolla.v1.hal+json                                         |
| errors.CertifyBeneficialOwnershipForCustomerForbiddenDwollaV1HalJSONError  | 403                                                                        | application/vnd.dwolla.v1.hal+json                                         |
| errors.APIError                                                            | 4XX, 5XX                                                                   | \*/\*                                                                      |