# MXSecureExchangeCreateExchangeRequestBody

## Example Usage

```typescript
import { MXSecureExchangeCreateExchangeRequestBody } from "dwolla-typescript";

let value: MXSecureExchangeCreateExchangeRequestBody = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
  token: "someMXProcessorToken",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                              | [models.MXSecureExchangeCreateExchangeRequestBodyLinks](../models/mxsecureexchangecreateexchangerequestbodylinks.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `token`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | someMXProcessorToken                                                                                                 |