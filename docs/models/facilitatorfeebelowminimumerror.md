# FacilitatorFeeBelowMinimumError

## Example Usage

```typescript
import { FacilitatorFeeBelowMinimumError } from "dwolla-typescript";

let value: FacilitatorFeeBelowMinimumError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Facilitator fee below minimum.",
        path: "",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | ValidationError                                                                                        |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | Validation error(s) present. See embedded errors list for more details.                                |
| `embedded`                                                                                             | [models.FacilitatorFeeBelowMinimumErrorEmbedded](../models/facilitatorfeebelowminimumerrorembedded.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |