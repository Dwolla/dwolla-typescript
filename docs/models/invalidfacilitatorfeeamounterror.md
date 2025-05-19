# InvalidFacilitatorFeeAmountError

## Example Usage

```typescript
import { InvalidFacilitatorFeeAmountError } from "dwolla-typescript";

let value: InvalidFacilitatorFeeAmountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid facilitator fee amount.",
        path: "/fees/_links/charge-to/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | ValidationError                                                                                          |
| `message`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | Validation error(s) present. See embedded errors list for more details.                                  |
| `embedded`                                                                                               | [models.InvalidFacilitatorFeeAmountErrorEmbedded](../models/invalidfacilitatorfeeamounterrorembedded.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |