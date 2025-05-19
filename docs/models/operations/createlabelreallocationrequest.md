# CreateLabelReallocationRequest

Parameters to create a label reallocation

## Example Usage

```typescript
import { CreateLabelReallocationRequest } from "dwolla-typescript/models/operations";

let value: CreateLabelReallocationRequest = {
  links: {
    from: {
      href:
        "https://api.dwolla.com/labels/c91c501c-f49b-48be-a93b-12b45e152d45",
    },
    to: {
      href:
        "https://api.dwolla.com/labels/7e042ffe-e25e-40d2-b86e-748b98845ecc",
    },
  },
  amount: {
    currency: "15.00",
    value: "USD",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `links`                                                                                              | [operations.CreateLabelReallocationLinks](../../models/operations/createlabelreallocationlinks.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `amount`                                                                                             | [operations.CreateLabelReallocationAmount](../../models/operations/createlabelreallocationamount.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |