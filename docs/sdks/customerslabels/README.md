# Customers.Labels

## Overview

### Available Operations

* [list](#list) - List labels for a customer
* [create](#create) - Create a label for a customer

## list

Returns all labels for a specified Verified Customer, sorted by creation date (most recent first). Supports pagination with limit and offset parameters. Each label includes its current amount and creation timestamp.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCustomerLabels" method="get" path="/customers/{id}/labels" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.labels.list({
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
import { customersLabelsList } from "dwolla/funcs/customersLabelsList.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersLabelsList(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersLabelsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomerLabelsRequest](../../models/operations/listcustomerlabelsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Labels](../../models/labels.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ListCustomerLabelsForbiddenDwollaV1HalJSONError | 403                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.ListCustomerLabelsNotFoundDwollaV1HalJSONError  | 404                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## create

Creates a new label for a Verified Customer with a specified amount. Labels help organize and track funds within a customer's balance. Returns the location of the created label resource in the response header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCustomerLabel" method="post" path="/customers/{id}/labels" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.labels.create({
    id: "<id>",
    requestBody: {
      amount: {
        currency: "USD",
        value: "12.34",
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
import { customersLabelsCreate } from "dwolla/funcs/customersLabelsCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersLabelsCreate(dwolla, {
    id: "<id>",
    requestBody: {
      amount: {
        currency: "USD",
        value: "12.34",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersLabelsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerLabelRequest](../../models/operations/createcustomerlabelrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerLabelResponse](../../models/operations/createcustomerlabelresponse.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.BadRequestError                                  | 400                                                     | application/vnd.dwolla.v1.hal+json                      |
| errors.CreateCustomerLabelForbiddenDwollaV1HalJSONError | 403                                                     | application/vnd.dwolla.v1.hal+json                      |
| errors.CreateCustomerLabelNotFoundDwollaV1HalJSONError  | 404                                                     | application/vnd.dwolla.v1.hal+json                      |
| errors.APIError                                         | 4XX, 5XX                                                | \*/\*                                                   |