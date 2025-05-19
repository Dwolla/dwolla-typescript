# HalLink

## Example Usage

```typescript
import { HalLink } from "dwolla-typescript";

let value: HalLink = {
  href: "https://api.dwolla.com",
  type: "application/vnd.dwolla.v1.hal+json",
  resourceType: "resource-type",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `href`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | https://api.dwolla.com             |
| `type`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | application/vnd.dwolla.v1.hal+json |
| `resourceType`                     | *string*                           | :heavy_minus_sign:                 | N/A                                | resource-type                      |