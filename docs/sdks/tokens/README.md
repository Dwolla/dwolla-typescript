# Tokens

## Overview

Operations related to Application Access Tokens

### Available Operations

* [create](#create) - Create an application access token

## create

Generate an application access token using OAuth 2.0 client credentials flow for server-to-server authentication. Requires client ID and secret sent via Basic authentication header with grant_type=client_credentials in the request body. Returns a bearer access token with expiration time for authenticating API requests scoped to your application. Essential for secure API access.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApplicationAccessToken" method="post" path="/token" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla();

async function run() {
  const result = await dwolla.tokens.create({
    basicAuth: process.env["DWOLLA_BASIC_AUTH"] ?? "",
  }, {
    grantType: "client_credentials",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { tokensCreate } from "dwolla/funcs/tokensCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore();

async function run() {
  const res = await tokensCreate(dwolla, {
    basicAuth: process.env["DWOLLA_BASIC_AUTH"] ?? "",
  }, {
    grantType: "client_credentials",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokensCreate failed:", res.error);
  }
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