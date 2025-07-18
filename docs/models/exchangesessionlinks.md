# ExchangeSessionLinks

## Example Usage

```typescript
import { ExchangeSessionLinks } from "dwolla/models";

let value: ExchangeSessionLinks = {
  self: {
    href:
      "https://api.dwolla.com/exchange-sessions/9b7fb629-0fad-44f4-8c5e-44c25a0bfa8e",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "exchange-sessions",
  },
  exchangePartner: {
    href:
      "https://api.dwolla.com/exchange-partners/bca8d065-49a5-475b-a6b4-509bc8504d22",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "exchange-partner",
  },
  externalProviderSession: {
    href:
      "{\"description\":\"Visa example\",\"value\":\"https://link.visa.com/1.0/account-check/connect?client_id=f16f7c7407f4434dbcaf269b230c12ed&redirect_uri=https://api-uat.dwolla.com/redirect/tink&authorization_code=47e23deab3924351a0c6193d90e5add5&market=US&locale=en_US&state=a2V5Ojk6dWRiRkRYWGlIVGdZZUNycUdCa0s3Zz09OmI1ZVE0YWRUYkFrSWNiKzFxTXdmQlVkcVNWWW5nMjtQNjBaWERxUDh5aTBpWEQzTHROdUZRd2xLMTUzYnZ4RU8=&session_id=628d927030ee43a38054da5166dcbee14e06dc02c00e45f2b4a5d986bab5d08f\"}",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "text/html",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `self`                                                                               | [models.ExchangeSessionSelf](../models/exchangesessionself.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `exchangePartner`                                                                    | [models.ExchangeSessionExchangePartner](../models/exchangesessionexchangepartner.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `externalProviderSession`                                                            | [models.ExternalProviderSession](../models/externalprovidersession.md)               | :heavy_minus_sign:                                                                   | N/A                                                                                  |