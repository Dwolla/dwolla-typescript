# WithdrawInvalidAmountErrorEmbedded

## Example Usage

```typescript
import { WithdrawInvalidAmountErrorEmbedded } from "dwolla-typescript";

let value: WithdrawInvalidAmountErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Invalid amount.",
      path: "/amount/value",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `errors`                                                                                 | [models.WithdrawInvalidAmountErrorError](../models/withdrawinvalidamounterrorerror.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |