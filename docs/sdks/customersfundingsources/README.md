# CustomersFundingSources
(*customers.fundingSources*)

## Overview

### Available Operations

* [list](#list) - List customer funding sources

## list

List customer funding sources

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
  const result = await dwolla.customers.fundingSources.list({
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
import { customersFundingSourcesList } from "dwolla-typescript/funcs/customersFundingSourcesList.js";

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
  const res = await customersFundingSourcesList(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersFundingSourcesList failed:", res.error);
  }
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