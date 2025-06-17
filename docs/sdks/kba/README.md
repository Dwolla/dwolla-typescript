# Kba
(*kba*)

## Overview

Operations related to Knowledge-Based Authentication

### Available Operations

* [initiate](#initiate) - Initiate a KBA session
* [getQuestions](#getquestions) - Retrieve KBA Questions
* [verify](#verify) - Verify KBA Questions

## initiate

Initiate a KBA session

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
  const result = await dwolla.kba.initiate({
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
import { kbaInitiate } from "dwolla-typescript/funcs/kbaInitiate.js";

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
  const res = await kbaInitiate(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kbaInitiate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InitiateKbaForCustomerRequest](../../models/operations/initiatekbaforcustomerrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitiateKbaForCustomerResponse](../../models/operations/initiatekbaforcustomerresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.InvalidResourceStateSchemaError | 403                                    | application/vnd.dwolla.v1.hal+json     |
| errors.ForbiddenError                  | 403                                    | application/vnd.dwolla.v1.hal+json     |
| errors.NotFoundError                   | 404                                    | application/vnd.dwolla.v1.hal+json     |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## getQuestions

Retrieve KBA Questions

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
  const result = await dwolla.kba.getQuestions({
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
import { kbaGetQuestions } from "dwolla-typescript/funcs/kbaGetQuestions.js";

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
  const res = await kbaGetQuestions(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kbaGetQuestions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKbaQuestionsRequest](../../models/operations/getkbaquestionsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetKbaQuestionsResponse](../../models/operations/getkbaquestionsresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ForbiddenError                      | 403                                        | application/vnd.dwolla.v1.hal+json         |
| errors.GetKbaQuestionsDwollaV1HalJSONError | 404                                        | application/vnd.dwolla.v1.hal+json         |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## verify

Verify KBA Questions

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
  const result = await dwolla.kba.verify({
    id: "<id>",
    requestBody: {
      answers: [],
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
import { kbaVerify } from "dwolla-typescript/funcs/kbaVerify.js";

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
  const res = await kbaVerify(dwolla, {
    id: "<id>",
    requestBody: {
      answers: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kbaVerify failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VerifyRequest](../../models/operations/verifyrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VerifyResponse](../../models/operations/verifyresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ForbiddenError              | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.InvalidKbaSessionError      | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.ExpiredKbaSessionError      | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.VerifyDwollaV1HalJSONError  | 404                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |