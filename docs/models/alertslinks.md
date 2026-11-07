# AlertsLinks

## Example Usage

```typescript
import { AlertsLinks } from "dwolla/models";

let value: AlertsLinks = {
  self: {
    href: "https://api.dwolla.com/alerts",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "alert",
  },
  next: {
    href:
      "https://api.dwolla.com/alerts?limit=25&cursor=aZ3kQ9vX7pLmN2rTb8WcYe4H",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "alert",
  },
  prev: {
    href:
      "https://api.dwolla.com/alerts?limit=25&cursor=Jq5nR1sU8wF0tGh6KdM3xVyP",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "alert",
  },
};
```

## Fields

| Field                                                                                                                                                                                                             | Type                                                                                                                                                                                                              | Required                                                                                                                                                                                                          | Description                                                                                                                                                                                                       | Example                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                                                                                                            | [models.AlertsSelfHalLink](../models/alertsselfhallink.md)                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                | The URI of this page, as requested.                                                                                                                                                                               | {<br/>"href": "https://api.dwolla.com/alerts",<br/>"type": "application/vnd.dwolla.v1.hal+json",<br/>"resource-type": "alert"<br/>}                                                                               |
| `next`                                                                                                                                                                                                            | [models.NextHalLink](../models/nexthallink.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                | Link to the next page of older alerts. Keeps the `status` filter, if any, and always includes `limit`. Omitted on the last page. Use the URL as-is, changing only `limit` if you want a different page size.      | {<br/>"href": "https://api.dwolla.com/alerts?limit=25\u0026cursor=aZ3kQ9vX7pLmN2rTb8WcYe4H",<br/>"type": "application/vnd.dwolla.v1.hal+json",<br/>"resource-type": "alert"<br/>}                                 |
| `prev`                                                                                                                                                                                                            | [models.PrevHalLink](../models/prevhallink.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                | Link to the previous page of newer alerts. Keeps the `status` filter, if any, and always includes `limit`. Omitted on the first page. Use the URL as-is, changing only `limit` if you want a different page size. | {<br/>"href": "https://api.dwolla.com/alerts?limit=25\u0026cursor=Jq5nR1sU8wF0tGh6KdM3xVyP",<br/>"type": "application/vnd.dwolla.v1.hal+json",<br/>"resource-type": "alert"<br/>}                                 |