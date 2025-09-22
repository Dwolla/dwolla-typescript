# VerifyMicroDepositsRequestBody

The micro-deposit amounts received in the bank account

## Example Usage

```typescript
import { VerifyMicroDepositsRequestBody } from "dwolla/models/operations";

let value: VerifyMicroDepositsRequestBody = {
  amount1: {
    value: "0.02",
    currency: "USD",
  },
  amount2: {
    value: "0.03",
    currency: "USD",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `amount1`                                                | [operations.Amount1](../../models/operations/amount1.md) | :heavy_check_mark:                                       | N/A                                                      |
| `amount2`                                                | [operations.Amount2](../../models/operations/amount2.md) | :heavy_check_mark:                                       | N/A                                                      |