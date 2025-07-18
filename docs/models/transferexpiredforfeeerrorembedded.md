# TransferExpiredForFeeErrorEmbedded

## Example Usage

```typescript
import { TransferExpiredForFeeErrorEmbedded } from "dwolla/models";

let value: TransferExpiredForFeeErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message:
        "Return fees can only be charged within 45 days of the original transfer's settlement date.",
      path: "/_links/failed-transfer/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `errors`                                                                                 | [models.TransferExpiredForFeeErrorError](../models/transferexpiredforfeeerrorerror.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |