# IncompatibleHoldingsErrorEmbedded

## Example Usage

```typescript
import { IncompatibleHoldingsErrorEmbedded } from "dwolla-typescript/models";

let value: IncompatibleHoldingsErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message: "Receiver cannot receive from sender.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `errors`                                                                               | [models.IncompatibleHoldingsErrorError](../models/incompatibleholdingserrorerror.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |