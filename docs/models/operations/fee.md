# Fee

## Example Usage

```typescript
import { Fee } from "dwolla/models/operations";

let value: Fee = {
  amount: {
    value: "5.00",
    currency: "USD",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `links`                                                    | [operations.FeeLinks](../../models/operations/feelinks.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `amount`                                                   | [models.TransferAmount](../../models/transferamount.md)    | :heavy_minus_sign:                                         | N/A                                                        |