# InitiateMassPaymentRequest

## Example Usage

```typescript
import { InitiateMassPaymentRequest } from "dwolla/models/operations";

let value: InitiateMassPaymentRequest = {
  requestBody: {
    links: {
      source: {
        href:
          "https://api.dwolla.com/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4",
      },
    },
    items: [
      {
        links: {
          destination: {
            href:
              "https://api.dwolla.com/funding-sources/9c7f8d57-cd45-4e7a-bf7a-914dbd6131db",
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
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `requestBody`                                                                                          | [operations.InitiateMassPaymentRequestBody](../../models/operations/initiatemasspaymentrequestbody.md) | :heavy_check_mark:                                                                                     | Parameters for initiating a mass payment                                                               |