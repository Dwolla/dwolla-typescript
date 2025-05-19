# MassPayments
(*massPayments*)

## Overview

Operations related to Mass Payments

### Available Operations

* [initiateMassPayment](#initiatemasspayment) - Initiate a mass payment
* [getMassPayment](#getmasspayment) - Retrieve a mass payment
* [updateMassPayment](#updatemasspayment) - Update a mass payment to process or cancel it
* [listMassPaymentItems](#listmasspaymentitems) - List items for a mass payment
* [getMassPaymentItem](#getmasspaymentitem) - Retrieve mass payment item
* [listCustomerMassPayments](#listcustomermasspayments) - List mass payments for customer

## initiateMassPayment

Initiate a mass payment

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.massPayments.initiateMassPayment({
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { massPaymentsInitiateMassPayment } from "dwolla-typescript/funcs/massPaymentsInitiateMassPayment.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await massPaymentsInitiateMassPayment(dwolla, {
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
| `request`                                                                                                                                                                      | [operations.InitiateMassPaymentRequest](../../models/operations/initiatemasspaymentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitiateMassPaymentResponse](../../models/operations/initiatemasspaymentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getMassPayment

Retrieve a mass payment

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.massPayments.getMassPayment({
    id: "<id>",
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
import { massPaymentsGetMassPayment } from "dwolla-typescript/funcs/massPaymentsGetMassPayment.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await massPaymentsGetMassPayment(dwolla, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetMassPaymentRequest](../../models/operations/getmasspaymentrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MassPayment](../../models/masspayment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateMassPayment

Update a mass payment to process or cancel it

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.massPayments.updateMassPayment({
    id: "<id>",
    requestBody: {
      status: "pending",
    },
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
import { massPaymentsUpdateMassPayment } from "dwolla-typescript/funcs/massPaymentsUpdateMassPayment.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await massPaymentsUpdateMassPayment(dwolla, {
    id: "<id>",
    requestBody: {
      status: "pending",
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateMassPaymentRequest](../../models/operations/updatemasspaymentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MassPayment](../../models/masspayment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listMassPaymentItems

List items for a mass payment

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.massPayments.listMassPaymentItems({
    id: "<id>",
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
import { massPaymentsListMassPaymentItems } from "dwolla-typescript/funcs/massPaymentsListMassPaymentItems.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await massPaymentsListMassPaymentItems(dwolla, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListMassPaymentItemsRequest](../../models/operations/listmasspaymentitemsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMassPaymentItemsResponse](../../models/operations/listmasspaymentitemsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getMassPaymentItem

Retrieve mass payment item

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.massPayments.getMassPaymentItem({
    id: "<id>",
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
import { massPaymentsGetMassPaymentItem } from "dwolla-typescript/funcs/massPaymentsGetMassPaymentItem.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await massPaymentsGetMassPaymentItem(dwolla, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetMassPaymentItemRequest](../../models/operations/getmasspaymentitemrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MassPaymentItem](../../models/masspaymentitem.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listCustomerMassPayments

List mass payments for customer

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await dwolla.massPayments.listCustomerMassPayments({
    id: "<id>",
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
import { massPaymentsListCustomerMassPayments } from "dwolla-typescript/funcs/massPaymentsListCustomerMassPayments.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  bearerAuth: process.env["DWOLLA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await massPaymentsListCustomerMassPayments(dwolla, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListCustomerMassPaymentsRequest](../../models/operations/listcustomermasspaymentsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MassPayments](../../models/masspayments.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |