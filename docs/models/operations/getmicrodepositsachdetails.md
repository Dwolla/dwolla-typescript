# GetMicroDepositsAchDetails

ACH details for each micro-deposit. Optional; only returned when ACH details are available for the micro-deposits. `deposit1` or `deposit2` may be omitted if details for that deposit are unavailable.

## Example Usage

```typescript
import { GetMicroDepositsAchDetails } from "dwolla/models/operations";

let value: GetMicroDepositsAchDetails = {
  deposit1: {
    traceId: "273976360000105",
  },
  deposit2: {
    traceId: "273976360000106",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `deposit1`                                                 | [operations.Deposit1](../../models/operations/deposit1.md) | :heavy_minus_sign:                                         | ACH details for the first micro-deposit                    |
| `deposit2`                                                 | [operations.Deposit2](../../models/operations/deposit2.md) | :heavy_minus_sign:                                         | ACH details for the second micro-deposit                   |