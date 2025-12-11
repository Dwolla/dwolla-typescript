# BeneficialOwners

## Overview

### Available Operations

* [get](#get) - Retrieve beneficial owner
* [update](#update) - Update beneficial owner
* [delete](#delete) - Remove beneficial owner

## get

Returns detailed information for a specific beneficial owner, including personal information, address, and verification status. The verification status indicates the owner's identity verification progress and affects the business customer's transaction capabilities.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="retrieveBeneficialOwner" method="get" path="/beneficial-owners/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.beneficialOwners.get({
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
import { beneficialOwnersGet } from "dwolla/funcs/beneficialOwnersGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await beneficialOwnersGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("beneficialOwnersGet failed:", res.error);
  }
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

## update

Updates a beneficial owner's information to retry verification when their status is "incomplete". Only beneficial owners with incomplete verification status can be updated. Used to correct information that caused initial verification to fail.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateBeneficialOwner" method="post" path="/beneficial-owners/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.beneficialOwners.update({
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

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { beneficialOwnersUpdate } from "dwolla/funcs/beneficialOwnersUpdate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await beneficialOwnersUpdate(dwolla, {
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("beneficialOwnersUpdate failed:", res.error);
  }
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

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ValidationErrorSchema                              | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.UpdateBeneficialOwnerForbiddenDwollaV1HalJSONError | 403                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.UpdateBeneficialOwnerNotFoundDwollaV1HalJSONError  | 404                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |

## delete

Permanently removes a beneficial owner from a business customer. This action is irreversible and the beneficial owner cannot be retrieved after removal. Removing a beneficial owner will change the customer's certification status to "recertify".

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteBeneficialOwner" method="delete" path="/beneficial-owners/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.beneficialOwners.delete({
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
import { beneficialOwnersDelete } from "dwolla/funcs/beneficialOwnersDelete.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await beneficialOwnersDelete(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("beneficialOwnersDelete failed:", res.error);
  }
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