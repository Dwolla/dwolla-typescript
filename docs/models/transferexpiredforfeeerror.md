# TransferExpiredForFeeError

## Example Usage

```typescript
import { TransferExpiredForFeeError } from "dwolla-typescript";

let value: TransferExpiredForFeeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Return fees can only be charged within 45 days of the original transfer's settlement date.",
        path: "/_links/failed-transfer/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `code`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | ValidationError                                                                              |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | Validation error(s) present. See embedded errors list for more details.                      |
| `embedded`                                                                                   | [models.TransferExpiredForFeeErrorEmbedded](../models/transferexpiredforfeeerrorembedded.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |