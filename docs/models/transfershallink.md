# TransfersHalLink

The Customer's transfers. Present only when the alert is related to a Customer's transfers.

## Example Usage

```typescript
import { TransfersHalLink } from "dwolla/models";

let value: TransfersHalLink = {
  href:
    "https://api.dwolla.com/customers/b0e1c5a6-2f3d-4e7a-8c9b-1d2e3f4a5b6c/transfers",
  type: "application/vnd.dwolla.v1.hal+json",
  resourceType: "transfer",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `href`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | https://api.dwolla.com             |
| `type`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | application/vnd.dwolla.v1.hal+json |
| `resourceType`                     | *string*                           | :heavy_minus_sign:                 | N/A                                | resource-type                      |