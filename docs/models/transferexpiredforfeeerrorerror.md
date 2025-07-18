# TransferExpiredForFeeErrorError

## Example Usage

```typescript
import { TransferExpiredForFeeErrorError } from "dwolla/models";

let value: TransferExpiredForFeeErrorError = {
  code: "NotAllowed",
  message:
    "Return fees can only be charged within 45 days of the original transfer's settlement date.",
  path: "/_links/failed-transfer/href",
  links: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `code`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | NotAllowed                                                                                 |
| `message`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | Return fees can only be charged within 45 days of the original transfer's settlement date. |
| `path`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | /_links/failed-transfer/href                                                               |
| `links`                                                                                    | [models.TransferExpiredForFeeErrorLinks](../models/transferexpiredforfeeerrorlinks.md)     | :heavy_minus_sign:                                                                         | N/A                                                                                        | {}                                                                                         |