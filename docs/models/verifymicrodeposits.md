# VerifyMicroDeposits

Request body for verifying micro-deposits

## Example Usage

```typescript
import { VerifyMicroDeposits } from "dwolla-typescript";

let value: VerifyMicroDeposits = {
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

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `amount1`                              | [models.Amount1](../models/amount1.md) | :heavy_check_mark:                     | N/A                                    |
| `amount2`                              | [models.Amount2](../models/amount2.md) | :heavy_check_mark:                     | N/A                                    |