# CreatePlaidOpenBankingExchange

## Example Usage

```typescript
import { CreatePlaidOpenBankingExchange } from "dwolla-typescript/models";

let value: CreatePlaidOpenBankingExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/f53ffb32-c84f-496a-9d9d-acd100d396ef",
    },
  },
  plaid: {
    publicToken: "public-production-d5456acb-01d5-4932-9783-e4c883cf1c0c",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `links`                                                                                        | [models.CreatePlaidOpenBankingExchangeLinks](../models/createplaidopenbankingexchangelinks.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `plaid`                                                                                        | [models.Plaid](../models/plaid.md)                                                             | :heavy_check_mark:                                                                             | N/A                                                                                            |