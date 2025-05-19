# InvalidFacilitatorFeeCollectFromCombinationError

## Example Usage

```typescript
import { InvalidFacilitatorFeeCollectFromCombinationError } from "dwolla-typescript";

let value: InvalidFacilitatorFeeCollectFromCombinationError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Currently, all fees must be paid by same destination.\"",
        path: "/fees/_links/charge-to/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      | ValidationError                                                                                                                          |
| `message`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      | Validation error(s) present. See embedded errors list for more details.                                                                  |
| `embedded`                                                                                                                               | [models.InvalidFacilitatorFeeCollectFromCombinationErrorEmbedded](../models/invalidfacilitatorfeecollectfromcombinationerrorembedded.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |