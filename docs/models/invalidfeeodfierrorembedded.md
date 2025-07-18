# InvalidFeeOdfiErrorEmbedded

## Example Usage

```typescript
import { InvalidFeeOdfiErrorEmbedded } from "dwolla/models";

let value: InvalidFeeOdfiErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message: "Transfer ineligible.",
      path: "/_links/failed-transfer/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `errors`                                                                   | [models.InvalidFeeOdfiErrorError](../models/invalidfeeodfierrorerror.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |