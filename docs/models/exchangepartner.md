# ExchangePartner

## Example Usage

```typescript
import { ExchangePartner } from "dwolla/models";

let value: ExchangePartner = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e",
  name: "Plaid",
  status: "active",
  created: new Date("2022-07-23T00:18:21.419Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e                                                          |
| `name`                                                                                        | [models.Name](../models/name.md)                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           | Plaid                                                                                         |
| `status`                                                                                      | [models.ExchangePartnerStatus](../models/exchangepartnerstatus.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           | active                                                                                        |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2022-07-23T00:18:21.419Z                                                                      |