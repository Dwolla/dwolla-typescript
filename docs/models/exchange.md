# Exchange

## Example Usage

```typescript
import { Exchange } from "dwolla/models";

let value: Exchange = {
  links: {},
  id: "d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e",
  status: "active",
  created: new Date("2022-07-23T00:18:21.419Z"),
  cardDetails: {
    accountNameInquiry: "full-match",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                            | Record<string, [models.HalLink](../models/hallink.md)>                                                                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e                                                                                               |
| `status`                                                                                                                           | [models.ExchangeStatus](../models/exchangestatus.md)                                                                               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | active                                                                                                                             |
| `created`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | 2022-07-23T00:18:21.419Z                                                                                                           |
| `cardDetails`                                                                                                                      | [models.ExchangeCardDetails](../models/exchangecarddetails.md)                                                                     | :heavy_minus_sign:                                                                                                                 | Card-specific details. Only present for card exchanges where an Account Name Inquiry (ANI)<br/>was requested on the exchange session.<br/> |                                                                                                                                    |