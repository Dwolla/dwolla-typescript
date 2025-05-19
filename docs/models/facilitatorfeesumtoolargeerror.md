# FacilitatorFeeSumTooLargeError

## Example Usage

```typescript
import { FacilitatorFeeSumTooLargeError } from "dwolla-typescript";

let value: FacilitatorFeeSumTooLargeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Facilitator fee sum too large.",
        path: "",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | ValidationError                                                                                      |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | Validation error(s) present. See embedded errors list for more details.                              |
| `embedded`                                                                                           | [models.FacilitatorFeeSumTooLargeErrorEmbedded](../models/facilitatorfeesumtoolargeerrorembedded.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |