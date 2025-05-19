# PlaidSecureExchangeCreateExchangeRequestBody

## Example Usage

```typescript
import { PlaidSecureExchangeCreateExchangeRequestBody } from "dwolla-typescript";

let value: PlaidSecureExchangeCreateExchangeRequestBody = {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                    | [models.PlaidSecureExchangeCreateExchangeRequestBodyLinks](../models/plaidsecureexchangecreateexchangerequestbodylinks.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `token`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | somePlaidProcessorToken                                                                                                    |