# CreatePlaidSecureExchange

## Example Usage

```typescript
import { CreatePlaidSecureExchange } from "dwolla-typescript";

let value: CreatePlaidSecureExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/f53ffb32-c84f-496a-9d9d-acd100d396ef",
    },
  },
  token: "somePlaidProcessorToken",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `links`                                                                              | [models.CreatePlaidSecureExchangeLinks](../models/createplaidsecureexchangelinks.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `token`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | somePlaidProcessorToken                                                              |