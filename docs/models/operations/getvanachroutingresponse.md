# GetVanAchRoutingResponse

successful operation

## Example Usage

```typescript
import { GetVanAchRoutingResponse } from "dwolla-typescript/models/operations";

let value: GetVanAchRoutingResponse = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  accountNumber: "9619991490430833",
  routingNumber: "084106768",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `links`                                                   | Record<string, [models.HalLink](../../models/hallink.md)> | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `accountNumber`                                           | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | 9619991490430833                                          |
| `routingNumber`                                           | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | 084106768                                                 |