# Product

## Example Usage

```typescript
import { Product } from "dwolla-typescript/models";
import { RFCDate } from "dwolla-typescript/types";

let value: Product = {
  product: "moneyTransferDetails",
  accountId: "1015199035827334900",
  accessPeriod: {
    type: "timeframe",
    startTime: new RFCDate("2022-07-06"),
    endTime: new Date("2022-08-16T06:06:20Z"),
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `product`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              | moneyTransferDetails                             |
| `accountId`                                      | *string*                                         | :heavy_minus_sign:                               | N/A                                              | 1015199035827334900                              |
| `accessPeriod`                                   | [models.AccessPeriod](../models/accessperiod.md) | :heavy_minus_sign:                               | N/A                                              |                                                  |