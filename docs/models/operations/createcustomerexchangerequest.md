# CreateCustomerExchangeRequest

## Example Usage

```typescript
import { CreateCustomerExchangeRequest } from "dwolla/models/operations";
import { RFCDate } from "dwolla/types";

let value: CreateCustomerExchangeRequest = {
  id: "<id>",
  requestBody: {
    links: {
      exchangePartner: {
        href:
          "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
      },
    },
    finicity: {
      profile: 3,
      version: "1",
      receiptId: "cr_4N47ou7SlppuIxq0ZUtACh10vYcloY",
      receiptVersion: "1",
      customerId: "5454874858510164117",
      partnerId: 2445583946651,
      products: [
        {
          product: "moneyTransferDetails",
          accountId: "1015199035827334916",
          accessPeriod: {
            type: "timeframe",
            startTime: new RFCDate("2022-07-06"),
            endTime: new Date("2022-08-16T06:06:20Z"),
          },
        },
      ],
      timestamp: new Date("2022-07-11T06:06:23Z"),
    },
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | The ID of the customer to create an exchange for |
| `requestBody`                                    | *operations.CreateCustomerExchangeRequestBody*   | :heavy_check_mark:                               | N/A                                              |