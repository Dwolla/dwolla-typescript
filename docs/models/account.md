# Account

## Example Usage

```typescript
import { Account } from "dwolla/models";

let value: Account = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "2e21f010-3023-4891-aced-ed726d7cd5e1",
  name: "Jane Doe's Business",
  timezoneOffset: -6,
  type: "Commercial",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `links`                                                | Record<string, [models.HalLink](../models/hallink.md)> | :heavy_minus_sign:                                     | N/A                                                    |                                                        |
| `id`                                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | 2e21f010-3023-4891-aced-ed726d7cd5e1                   |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | Jane Doe's Business                                    |
| `timezoneOffset`                                       | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    | -6                                                     |
| `type`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | Commercial                                             |