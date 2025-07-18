# Finicity

## Example Usage

```typescript
import { Finicity } from "dwolla/models";
import { RFCDate } from "dwolla/types";

let value: Finicity = {
  profile: 3,
  version: "1",
  receiptId: "cr_4N47ou7SlppuIxq0ZUtACh10vYcloY",
  receiptVersion: "1",
  customerId: "5454874858510164000",
  partnerId: 2445583946651,
  products: [
    {
      product: "moneyTransferDetails",
      accountId: "1015199035827334900",
      accessPeriod: {
        type: "timeframe",
        startTime: new RFCDate("2022-07-06"),
        endTime: new Date("2022-08-16T06:06:20Z"),
      },
    },
  ],
  timestamp: new Date("2022-07-11T06:06:23Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `profile`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 3                                                                                             |
| `version`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `receiptId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | cr_4N47ou7SlppuIxq0ZUtACh10vYcloY                                                             |
| `receiptVersion`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 5454874858510164000                                                                           |
| `partnerId`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2445583946651                                                                                 |
| `products`                                                                                    | [models.Product](../models/product.md)[]                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-07-11T06:06:23Z                                                                          |