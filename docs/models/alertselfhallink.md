# AlertSelfHalLink

The alert's resource URI.

## Example Usage

```typescript
import { AlertSelfHalLink } from "dwolla/models";

let value: AlertSelfHalLink = {
  href: "https://api.dwolla.com/alerts/d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",
  type: "application/vnd.dwolla.v1.hal+json",
  resourceType: "alert",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `href`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | https://api.dwolla.com             |
| `type`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | application/vnd.dwolla.v1.hal+json |
| `resourceType`                     | *string*                           | :heavy_minus_sign:                 | N/A                                | resource-type                      |