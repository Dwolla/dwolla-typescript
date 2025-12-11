# Kba

## Overview

Operations related to Knowledge-Based Authentication

### Available Operations

* [getQuestions](#getquestions) - Retrieve KBA Questions
* [verify](#verify) - Verify KBA Questions

## getQuestions

Returns the KBA questions for a specific KBA session. The questions are used to verify the customer's identity during the KBA process.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getKbaQuestions" method="get" path="/kba/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
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
import { DwollaCore } from "dwolla/core.js";
import { kbaGetQuestions } from "dwolla/funcs/kbaGetQuestions.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
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

Submits customer answers to KBA questions for identity verification. Requires four question-answer pairs with questionId and answerId values. Returns verification status indicating whether the customer passed or failed the KBA authentication.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="verifyKbaQuestions" method="post" path="/kba/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.kba.verify({
    id: "<id>",
    requestBody: {
      answers: [
        {
          questionId: "2355953375",
          answerId: "2687969335",
        },
      ],
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
import { kbaVerify } from "dwolla/funcs/kbaVerify.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await kbaVerify(dwolla, {
    id: "<id>",
    requestBody: {
      answers: [
        {
          questionId: "2355953375",
          answerId: "2687969335",
        },
      ],
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
| `request`                                                                                                                                                                      | [operations.VerifyKbaQuestionsRequest](../../models/operations/verifykbaquestionsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VerifyKbaQuestionsResponse](../../models/operations/verifykbaquestionsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.ForbiddenError                         | 403                                           | application/vnd.dwolla.v1.hal+json            |
| errors.InvalidKbaSessionError                 | 403                                           | application/vnd.dwolla.v1.hal+json            |
| errors.ExpiredKbaSessionError                 | 403                                           | application/vnd.dwolla.v1.hal+json            |
| errors.VerifyKbaQuestionsDwollaV1HalJSONError | 404                                           | application/vnd.dwolla.v1.hal+json            |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |