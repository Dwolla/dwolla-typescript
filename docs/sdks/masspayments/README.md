# MassPayments
(*massPayments*)

## Overview

### Available Operations

* [create](#create) - Initiate a mass payment
* [get](#get) - Retrieve a mass payment
* [update](#update) - Update a mass payment
* [listItems](#listitems) - List items for a mass payment
* [getItem](#getitem) - Retrieve mass payment item

## create

Initiate a mass payment

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

Retrieve a mass payment

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

This section covers how to update a mass payment's status to `pending` which triggers processing on a created and deferred mass payment, or `cancelled` which cancels a created and deferred mass payment.

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

## listItems

List items for a mass payment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMassPaymentItems" method="get" path="/mass-payments/{id}/items" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.massPayments.listItems({
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
import { massPaymentsListItems } from "dwolla/funcs/massPaymentsListItems.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await massPaymentsListItems(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("massPaymentsListItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMassPaymentItemsRequest](../../models/operations/listmasspaymentitemsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMassPaymentItemsResponse](../../models/operations/listmasspaymentitemsresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ListMassPaymentItemsForbiddenDwollaV1HalJSONError | 403                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.ListMassPaymentItemsNotFoundDwollaV1HalJSONError  | 404                                                      | application/vnd.dwolla.v1.hal+json                       |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## getItem

Retrieve mass payment item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMassPaymentItem" method="get" path="/mass-payment-items/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.massPayments.getItem({
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
import { massPaymentsGetItem } from "dwolla/funcs/massPaymentsGetItem.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await massPaymentsGetItem(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("massPaymentsGetItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMassPaymentItemRequest](../../models/operations/getmasspaymentitemrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MassPaymentItem](../../models/masspaymentitem.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.GetMassPaymentItemForbiddenDwollaV1HalJSONError | 403                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.GetMassPaymentItemNotFoundDwollaV1HalJSONError  | 404                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |