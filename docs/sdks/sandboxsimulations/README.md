# SandboxSimulations

## Overview

Sandbox-only operations for simulating processing of bank transfers

### Available Operations

* [simulate](#simulate) - Sandbox simulations (bank transfers, VAN transfers, or customer verification directives)

## simulate

Sandbox-only endpoint with three modes:

**Simulate bank transfer processing** — Omit the body or send an empty JSON object. Processes or fails
the last 500 bank transfers on the authorized application or Sandbox account (and initiated micro-deposits).
If webhooks are configured, events are delivered. If a bank-to-bank transaction involves two users,
call this twice to process debit and credit sides. Returns **200** with a HAL document including `total`.

**Simulate VAN (virtual) transfers** — Send a JSON body with `type` set to `virtual` and a `transfers`
array (up to 10 items). External transfers are created and processed immediately. Returns **202 Accepted**.

**Simulate verification directives** — For a business Verified Customer in **`retry`** or **`document`**
status, send `type`: `customer-verification`, `_links.customer.href` pointing at that customer, and
`errorCode` set to one of: `PersonalIDRequired`, `POBoxNotAllowed`, `AddressNotAssociatedWithBusiness`,
`EINDocumentRequired`. Returns **200** with HAL `_links.self` and `errorCode`. Then **GET** the Customer;
the same code appears in `_embedded.errors` for end-to-end testing.


### Example Usage: bankTransferProcessing

<!-- UsageSnippet language="typescript" operationID="simulateBankTransferProcessing" method="post" path="/sandbox-simulations" example="bankTransferProcessing" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.sandboxSimulations.simulate({});

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
  const res = await sandboxSimulationsSimulate(dwolla, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sandboxSimulationsSimulate failed:", res.error);
  }
}

run();
```
### Example Usage: customerVerificationDirective

<!-- UsageSnippet language="typescript" operationID="simulateBankTransferProcessing" method="post" path="/sandbox-simulations" example="customerVerificationDirective" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.sandboxSimulations.simulate({
    type: "virtual",
    transfers: [],
  });

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
  const res = await sandboxSimulationsSimulate(dwolla, {
    type: "virtual",
    transfers: [],
  });
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
| `request`                                                                                                                                                                      | [models.SandboxSimulationRequest](../../models/sandboxsimulationrequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SimulateBankTransferProcessingResponse](../../models/operations/simulatebanktransferprocessingresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.BadRequestError                                                | 400                                                                   | application/vnd.dwolla.v1.hal+json                                    |
| errors.SimulateBankTransferProcessingUnauthorizedDwollaV1HalJSONError | 401                                                                   | application/vnd.dwolla.v1.hal+json                                    |
| errors.SimulateBankTransferProcessingForbiddenDwollaV1HalJSONError    | 403                                                                   | application/vnd.dwolla.v1.hal+json                                    |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |