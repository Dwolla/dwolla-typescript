# SandboxSimulations

## Overview

Sandbox-only operations for simulating processing of bank transfers

### Available Operations

* [simulate](#simulate) - Simulate bank transfer processing (Sandbox only)

## simulate

Triggers processing for the last 500 bank transfers on the authorized application or Sandbox account. This endpoint is only available in the Sandbox environment. It will process or fail pending bank-to-bank transactions (including both sides of a transfer when applicable) and initiated micro-deposits. If webhooks are configured, corresponding events will be delivered.

If a bank-to-bank transaction is initiated between two users, call this endpoint twice to process both the debit and credit sides.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="simulateBankTransferProcessing" method="post" path="/sandbox-simulations" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.sandboxSimulations.simulate();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { sandboxSimulationsSimulate } from "dwolla/funcs/sandboxSimulationsSimulate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await sandboxSimulationsSimulate(dwolla);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sandboxSimulationsSimulate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SimulateBankTransferProcessingRequest](../../models/operations/simulatebanktransferprocessingrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SimulateBankTransferProcessingResponse](../../models/operations/simulatebanktransferprocessingresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.SimulateBankTransferProcessingUnauthorizedDwollaV1HalJSONError | 401                                                                   | application/vnd.dwolla.v1.hal+json                                    |
| errors.SimulateBankTransferProcessingForbiddenDwollaV1HalJSONError    | 403                                                                   | application/vnd.dwolla.v1.hal+json                                    |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |