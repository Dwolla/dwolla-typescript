# Label

## Example Usage

```typescript
import { Label } from "dwolla/models";

let value: Label = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "7e042ffe-e25e-40d2-b86e-748b98845ecc",
  created: new Date("2022-05-15T22:19:09.635Z"),
  amount: {
    value: "10",
    currency: "USD",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 7e042ffe-e25e-40d2-b86e-748b98845ecc                                                          |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-05-15T22:19:09.635Z                                                                      |
| `amount`                                                                                      | [models.LabelAmount](../models/labelamount.md)                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |