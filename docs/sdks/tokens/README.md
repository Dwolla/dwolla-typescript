# Tokens
(*tokens*)

## Overview

Operations related to Application Access Tokens

### Available Operations

* [createApplicationAccessToken](#createapplicationaccesstoken) - Create an application access token

## createApplicationAccessToken

Generates an access token that contains permissions scoped to the application owner's Dwolla Client Account.

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla();

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
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
import { tokensCreateApplicationAccessToken } from "dwolla-typescript/funcs/tokensCreateApplicationAccessToken.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore();

async function run() {
  const res = await tokensCreateApplicationAccessToken(dwolla, {
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
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
| `request`                                                                                                                                                                      | [operations.CreateApplicationAccessTokenRequest](../../models/operations/createapplicationaccesstokenrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateApplicationAccessTokenSecurity](../../models/operations/createapplicationaccesstokensecurity.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApplicationAccessTokenResponse](../../models/operations/createapplicationaccesstokenresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.UnauthorizedError | 401                      | application/json         |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |