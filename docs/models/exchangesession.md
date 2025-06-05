# ExchangeSession

## Example Usage

```typescript
import { ExchangeSession } from "dwolla-typescript";

let value: ExchangeSession = {
  created: new Date("2024-03-25T17:13:38.430Z"),
  links: {
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
  },
  externalProviderSessionToken:
    "link-production-b41e8ed3-0874-4c64-b07d-a77088979d5f",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-03-25T17:13:38.430Z                                                                      |
| `links`                                                                                       | [models.ExchangeSessionLinks](../models/exchangesessionlinks.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `externalProviderSessionToken`                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Present for Plaid exchange sessions.<br/>Contains the token to initialize the Plaid Link flow.<br/> | link-production-b41e8ed3-0874-4c64-b07d-a77088979d5f                                          |