# FacilitatorFeeAccountNotFoundError

## Example Usage

```typescript
import { FacilitatorFeeAccountNotFoundError } from "dwolla-typescript";

let value: FacilitatorFeeAccountNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Facilitator fee account not found.",
        path: "",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | ValidationError                                                                                              |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | Validation error(s) present. See embedded errors list for more details.                                      |
| `embedded`                                                                                                   | [models.FacilitatorFeeAccountNotFoundErrorEmbedded](../models/facilitatorfeeaccountnotfounderrorembedded.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |