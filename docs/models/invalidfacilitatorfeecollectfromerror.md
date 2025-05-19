# InvalidFacilitatorFeeCollectFromError

## Example Usage

```typescript
import { InvalidFacilitatorFeeCollectFromError } from "dwolla-typescript";

let value: InvalidFacilitatorFeeCollectFromError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Unable to charge fee to specified destination.",
        path: "/fees/_links/charge-to/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | ValidationError                                                                                                    |
| `message`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | Validation error(s) present. See embedded errors list for more details.                                            |
| `embedded`                                                                                                         | [models.InvalidFacilitatorFeeCollectFromErrorEmbedded](../models/invalidfacilitatorfeecollectfromerrorembedded.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |