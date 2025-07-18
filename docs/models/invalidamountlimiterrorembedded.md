# InvalidAmountLimitErrorEmbedded

## Example Usage

```typescript
import { InvalidAmountLimitErrorEmbedded } from "dwolla/models";

let value: InvalidAmountLimitErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message:
        "Invalid amount. The supplied amount is greater than your transaction limit.",
      path: "/amount/value",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `errors`                                                                           | [models.InvalidAmountLimitErrorError](../models/invalidamountlimiterrorerror.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |