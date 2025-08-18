# MassPayments
(*massPayments*)

## Overview

### Available Operations

* [create](#create) - Initiate a mass payment
* [get](#get) - Retrieve a mass payment
* [update](#update) - Update a mass payment

## create

Create a mass payment containing up to 5,000 individual payment items from a Dwolla Main Account or Verified Customer funding source. Supports optional metadata, correlation IDs for traceability, deferred processing, and expedited transfer options including same-day ACH clearing. Returns the location of the created mass payment resource with a unique identifier for tracking and management.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="initiateMassPayment" method="post" path="/mass-payments" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.massPayments.create({
    links: {
      source: {
        href: "https://api.dwolla.com/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4",
      },
    },
    items: [
      {
        links: {
          destination: {
            href: "https://api.dwolla.com/funding-sources/9c7f8d57-cd45-4e7a-bf7a-914dbd6131db",
          },
        },
        amount: {
          value: "5.00",
          currency: "USD",
        },
        processingChannel: {
          destination: "real-time-payments",
        },
        clearing: {
          destination: "next-available",
        },
        achDetails: {
          destination: {
            addenda: {
              values: [
                "XYZ987_AddendaValue",
              ],
            },
          },
        },
        correlationId: "ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841",
      },
      {
        links: {
          destination: {
            href: "https://api.dwolla.com/funding-sources/9c7f8d57-cd45-4e7a-bf7a-914dbd6131db",
          },
        },
        amount: {
          value: "5.00",
          currency: "USD",
        },
        processingChannel: {
          destination: "real-time-payments",
        },
        clearing: {
          destination: "next-available",
        },
        achDetails: {
          destination: {
            addenda: {
              values: [
                "XYZ987_AddendaValue",
              ],
            },
          },
        },
        correlationId: "ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841",
      },
    ],
    status: "deferred",
    achDetails: {
      source: {
        addenda: {
          values: [
            "ZYX987_AddendaValue",
          ],
        },
      },
    },
    clearing: {
      source: "next-available",
    },
    correlationId: "ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { massPaymentsCreate } from "dwolla/funcs/massPaymentsCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await massPaymentsCreate(dwolla, {
    links: {
      source: {
        href: "https://api.dwolla.com/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4",
      },
    },
    items: [
      {
        links: {
          destination: {
            href: "https://api.dwolla.com/funding-sources/9c7f8d57-cd45-4e7a-bf7a-914dbd6131db",
          },
        },
        amount: {
          value: "5.00",
          currency: "USD",
        },
        processingChannel: {
          destination: "real-time-payments",
        },
        clearing: {
          destination: "next-available",
        },
        achDetails: {
          destination: {
            addenda: {
              values: [
                "XYZ987_AddendaValue",
              ],
            },
          },
        },
        correlationId: "ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841",
      },
      {
        links: {
          destination: {
            href: "https://api.dwolla.com/funding-sources/9c7f8d57-cd45-4e7a-bf7a-914dbd6131db",
          },
        },
        amount: {
          value: "5.00",
          currency: "USD",
        },
        processingChannel: {
          destination: "real-time-payments",
        },
        clearing: {
          destination: "next-available",
        },
        achDetails: {
          destination: {
            addenda: {
              values: [
                "XYZ987_AddendaValue",
              ],
            },
          },
        },
        correlationId: "ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841",
      },
    ],
    status: "deferred",
    achDetails: {
      source: {
        addenda: {
          values: [
            "ZYX987_AddendaValue",
          ],
        },
      },
    },
    clearing: {
      source: "next-available",
    },
    correlationId: "ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("massPaymentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InitiateMassPaymentRequest](../../models/operations/initiatemasspaymentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitiateMassPaymentResponse](../../models/operations/initiatemasspaymentresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.BadRequestError                         | 400                                            | application/vnd.dwolla.v1.hal+json             |
| errors.InitiateMassPaymentDwollaV1HalJSONError | 403                                            | application/vnd.dwolla.v1.hal+json             |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## get

Retrieve detailed information for a mass payment by its unique identifier. Returns the current processing status (pending, processing, or complete), creation date, metadata, and links to the source funding source and payment items. Use this endpoint to monitor mass payment processing progress and determine when to check individual item results.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMassPayment" method="get" path="/mass-payments/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.massPayments.get({
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
import { massPaymentsGet } from "dwolla/funcs/massPaymentsGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await massPaymentsGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("massPaymentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMassPaymentRequest](../../models/operations/getmasspaymentrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MassPayment](../../models/masspayment.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetMassPaymentForbiddenDwollaV1HalJSONError | 403                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.GetMassPaymentNotFoundDwollaV1HalJSONError  | 404                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## update

Update the status of a deferred mass payment to control its processing lifecycle. Set status to `pending` to trigger processing and begin fund transfers, or `cancelled` to permanently cancel the mass payment before processing begins. Only applies to mass payments created with deferred status. Returns the updated mass payment resource with the new status.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateMassPayment" method="post" path="/mass-payments/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.massPayments.update({
    id: "<id>",
    requestBody: {
      status: "pending",
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
import { massPaymentsUpdate } from "dwolla/funcs/massPaymentsUpdate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await massPaymentsUpdate(dwolla, {
    id: "<id>",
    requestBody: {
      status: "pending",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("massPaymentsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMassPaymentRequest](../../models/operations/updatemasspaymentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MassPayment](../../models/masspayment.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.BadRequestError                                | 400                                                   | application/vnd.dwolla.v1.hal+json                    |
| errors.UpdateMassPaymentForbiddenDwollaV1HalJSONError | 403                                                   | application/vnd.dwolla.v1.hal+json                    |
| errors.UpdateMassPaymentNotFoundDwollaV1HalJSONError  | 404                                                   | application/vnd.dwolla.v1.hal+json                    |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |