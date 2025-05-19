# InsufficientFundsErrorEmbedded

## Example Usage

```typescript
import { InsufficientFundsErrorEmbedded } from "dwolla-typescript";

let value: InsufficientFundsErrorEmbedded = {
  errors: [
    {
      code: "InsufficientFunds",
      message: "Insufficient funds.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `errors`                                                                         | [models.InsufficientFundsErrorError](../models/insufficientfundserrorerror.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |