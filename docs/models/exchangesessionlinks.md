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
      "{\"description\":\"MX example\",\"value\":\"https://www.mx.com/connect/lAfkc7m897s3t1ks9mmwyj4ry7Zq0xql4grzAg1kz77x7c9jrwls1t22w6xt8d2lsxx9zpqv30js3wswfdwcrpAsqgbAfkqwpksp7c2chsx167xy90Asfc67dkj9y48y8p142xw3yp4x5l9t9gkk6m3yk5vwsvyq2qq7w9trszxwdl14lmkg7l6949bn5n41chdkbnxycy40n9b6fkbdwl6qt5wl107k1x8srvlkpz325p412x9tkyA5clf39109lsfrgz2lkgsvntqf7l0zzwb5hl658gdjbxwhb52krwybnbdAqfq69cdy54l05jkvfwyf01q89x48jtgtx290lzjdfcty1lwb8d648wns/eyJ1aV9tZXNzYWdlX3ZlcnNpb24iOjQsInVpX21lc3NhZ2Vfd2Vidmlld191cmxfc2NoZW1lIjoibXgiLCJtb2RlIjoidmVyaWZpY2F0aW9uIn0%3D\"}",
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