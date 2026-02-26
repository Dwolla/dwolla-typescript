# CreateTokenBasedExchange

Create an exchange using a token. Supports MX, Plaid, and Flinks secure exchange flows, and Checkout.com for Push to Card (debit card).

## Example Usage

```typescript
import { CreateTokenBasedExchange } from "dwolla/models";

let value: CreateTokenBasedExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
  token: "sandbox-token-abc123",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                            | [models.CreateTokenBasedExchangeLinks](../models/createtokenbasedexchangelinks.md)                                                                 | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |
| `token`                                                                                                                                            | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Connection or processor token from the exchange partner (e.g., Plaid, MX, Flinks), or payment ID (pay_xxx) from Checkout.com Flow for Push to Card | sandbox-token-abc123                                                                                                                               |