# Root

## Example Usage

```typescript
import { Root } from "dwolla/models";

let value: Root = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `links`                                                | Record<string, [models.HalLink](../models/hallink.md)> | :heavy_minus_sign:                                     | N/A                                                    |