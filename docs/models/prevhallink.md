# PrevHalLink

Link to the previous page of newer alerts. Keeps the `status` filter, if any, and always includes `limit`. Omitted on the first page. Use the URL as-is, changing only `limit` if you want a different page size.

## Example Usage

```typescript
import { PrevHalLink } from "dwolla/models";

let value: PrevHalLink = {
  href:
    "https://api.dwolla.com/alerts?limit=25&cursor=Jq5nR1sU8wF0tGh6KdM3xVyP",
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