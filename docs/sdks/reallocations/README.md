# Labels.Reallocations

## Overview

### Available Operations

* [create](#create) - Create a label reallocation
* [get](#get) - Retrieve a label reallocation

## create

Reallocates funds between two labels belonging to the same Verified Customer. Moves the specified amount from the source label to the destination label, creating ledger entries for both. The reallocation only succeeds if the source label has sufficient funds.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLabelReallocation" method="post" path="/label-reallocations" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.labels.reallocations.create({
    links: {
      from: {
        href: "https://api.dwolla.com/labels/c91c501c-f49b-48be-a93b-12b45e152d45",
      },
      to: {
        href: "https://api.dwolla.com/labels/7e042ffe-e25e-40d2-b86e-748b98845ecc",
      },
    },
    amount: {
      currency: "USD",
      value: "15.00",
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
import { labelsReallocationsCreate } from "dwolla/funcs/labelsReallocationsCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await labelsReallocationsCreate(dwolla, {
    links: {
      from: {
        href: "https://api.dwolla.com/labels/c91c501c-f49b-48be-a93b-12b45e152d45",
      },
      to: {
        href: "https://api.dwolla.com/labels/7e042ffe-e25e-40d2-b86e-748b98845ecc",
      },
    },
    amount: {
      currency: "USD",
      value: "15.00",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("labelsReallocationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLabelReallocationRequest](../../models/operations/createlabelreallocationrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateLabelReallocationResponse](../../models/operations/createlabelreallocationresponse.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.BadRequestError                                      | 400                                                         | application/vnd.dwolla.v1.hal+json                          |
| errors.CreateLabelReallocationForbiddenDwollaV1HalJSONError | 403                                                         | application/vnd.dwolla.v1.hal+json                          |
| errors.CreateLabelReallocationNotFoundDwollaV1HalJSONError  | 404                                                         | application/vnd.dwolla.v1.hal+json                          |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## get

Retrieve details for a specific label reallocation that transfers funds between Labels. Returns reallocation information including source and destination Labels, amount transferred, status, and creation timestamp. Use this to track and audit fund movements between different Labels.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="retrieveLabelReallocation" method="get" path="/label-reallocations/{reallocationId}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.labels.reallocations.get({
    reallocationId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { labelsReallocationsGet } from "dwolla/funcs/labelsReallocationsGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await labelsReallocationsGet(dwolla, {
    reallocationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("labelsReallocationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RetrieveLabelReallocationRequest](../../models/operations/retrievelabelreallocationrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RetrieveLabelReallocationResponse](../../models/operations/retrievelabelreallocationresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ForbiddenError              | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.NotFoundError               | 404                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |