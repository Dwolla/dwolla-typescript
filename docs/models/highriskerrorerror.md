# HighRiskErrorError

## Example Usage

```typescript
import { HighRiskErrorError } from "dwolla/models";

let value: HighRiskErrorError = {
  code: "NotAllowed",
  message:
    "Due to account restrictions, we are unable to process this transaction.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `code`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | NotAllowed                                                              |
| `message`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | Due to account restrictions, we are unable to process this transaction. |
| `path`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | /_links/destination/href                                                |
| `links`                                                                 | [models.HighRiskErrorLinks](../models/highriskerrorlinks.md)            | :heavy_minus_sign:                                                      | N/A                                                                     | {}                                                                      |