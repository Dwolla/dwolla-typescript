# CreateFlinksSecureExchange

## Example Usage

```typescript
import { CreateFlinksSecureExchange } from "dwolla-typescript";

let value: CreateFlinksSecureExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/a0b22a57-68df-4450-b507-47c937e64e89",
    },
  },
  token:
    "MTExYTFhMWEtMTExMS0xYWExLTExMTEtMTFhMTExYTExMTFhOjIyMmIyYjFiLTIyMjItMmJiMi0yMjIyLTIyYjIyMmIyMjIyYg==",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `links`                                                                                              | [models.CreateFlinksSecureExchangeLinks](../models/createflinkssecureexchangelinks.md)               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `token`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | The Flinks connection token                                                                          | MTExYTFhMWEtMTExMS0xYWExLTExMTEtMTFhMTExYTExMTFhOjIyMmIyYjFiLTIyMjItMmJiMi0yMjIyLTIyYjIyMmIyMjIyYg== |