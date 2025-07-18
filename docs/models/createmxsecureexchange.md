# CreateMXSecureExchange

## Example Usage

```typescript
import { CreateMXSecureExchange } from "dwolla/models";

let value: CreateMXSecureExchange = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `links`                                                                        | [models.CreateMXSecureExchangeLinks](../models/createmxsecureexchangelinks.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `token`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | someMXProcessorToken                                                           |