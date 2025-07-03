# WithdrawInvalidAmountForClearingTypeErrorEmbedded

## Example Usage

```typescript
import { WithdrawInvalidAmountForClearingTypeErrorEmbedded } from "dwolla-typescript/models";

let value: WithdrawInvalidAmountForClearingTypeErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message:
        "Amount is above the allowed threshold for the specified clearing type.",
      path: "/amount/value",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                               | [models.WithdrawInvalidAmountForClearingTypeErrorError](../models/withdrawinvalidamountforclearingtypeerrorerror.md)[] | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |