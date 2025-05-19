# CannotParseAmountErrorEmbedded

## Example Usage

```typescript
import { CannotParseAmountErrorEmbedded } from "dwolla-typescript";

let value: CannotParseAmountErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message: "Invalid amount. The supplied amount must be a positive number.",
      path: "/amount/value",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `errors`                                                                         | [models.CannotParseAmountErrorError](../models/cannotparseamounterrorerror.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |