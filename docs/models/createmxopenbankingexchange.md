# CreateMXOpenBankingExchange

## Example Usage

```typescript
import { CreateMXOpenBankingExchange } from "dwolla-typescript";

let value: CreateMXOpenBankingExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/bca8d065-49a5-475b-a6b4-509bc8504d22",
    },
  },
  mx: {
    availableConnectionToken:
      "eyJhY2NvdW50SWQiOiJBQ1QtMjAxY2FkM2MtYzc2Yi00N2M1LWI3Y2QtMTkxY2FhNzdlZWM5IiwibWVtYmVySWQiOiJNQlItZGNjZWY0ZWMtOGM4MC00NTlmLTlhMGItMTc1ZTA0OTJmZWIzIn0=",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `links`                                                                                  | [models.CreateMXOpenBankingExchangeLinks](../models/createmxopenbankingexchangelinks.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mx`                                                                                     | [models.Mx](../models/mx.md)                                                             | :heavy_check_mark:                                                                       | N/A                                                                                      |