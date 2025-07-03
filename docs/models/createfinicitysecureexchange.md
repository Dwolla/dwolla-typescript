# CreateFinicitySecureExchange

## Example Usage

```typescript
import { CreateFinicitySecureExchange } from "dwolla-typescript/models";
import { RFCDate } from "dwolla-typescript/types";

let value: CreateFinicitySecureExchange = {
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
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `links`                                                                                    | [models.CreateFinicitySecureExchangeLinks](../models/createfinicitysecureexchangelinks.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `finicity`                                                                                 | [models.Finicity](../models/finicity.md)                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |