# ClientTokens
(*clientTokens*)

## Overview

### Available Operations

* [create](#create) - Create a client token

## create

Creates a client token with certain actions for Dwolla Drop-in components. The client token API request requires an `action` as well as a `link` which points to the Customer that identifies the end user performing the action within the drop-in component. The `action` is a string that contains a granular permission for the Customer performing the action within a drop-in component.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createClientToken" method="post" path="/client-tokens" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.clientTokens.create({
    action: "customer.update",
    links: {
      customer: {
        href: "https://api-sandbox.dwolla.com/customers/707177c3-bf15-4e7e-b37c-55c3898d9bf4",
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
import { clientTokensCreate } from "dwolla/funcs/clientTokensCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await clientTokensCreate(dwolla, {
    action: "customer.update",
    links: {
      customer: {
        href: "https://api-sandbox.dwolla.com/customers/707177c3-bf15-4e7e-b37c-55c3898d9bf4",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientTokensCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateClientTokenRequest](../../models/operations/createclienttokenrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateClientTokenResponse](../../models/operations/createclienttokenresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestError             | 400                                | application/vnd.dwolla.v1.hal+json |
| errors.ForbiddenError              | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |