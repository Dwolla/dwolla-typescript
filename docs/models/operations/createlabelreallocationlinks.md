# CreateLabelReallocationLinks

## Example Usage

```typescript
import { CreateLabelReallocationLinks } from "dwolla-typescript/models/operations";

let value: CreateLabelReallocationLinks = {
  from: {
    href: "https://api.dwolla.com/labels/c91c501c-f49b-48be-a93b-12b45e152d45",
  },
  to: {
    href: "https://api.dwolla.com/labels/7e042ffe-e25e-40d2-b86e-748b98845ecc",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `from`                                             | [operations.From](../../models/operations/from.md) | :heavy_minus_sign:                                 | N/A                                                |
| `to`                                               | [operations.To](../../models/operations/to.md)     | :heavy_minus_sign:                                 | N/A                                                |