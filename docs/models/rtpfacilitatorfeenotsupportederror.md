# RtpFacilitatorFeeNotSupportedError

## Example Usage

```typescript
import { RtpFacilitatorFeeNotSupportedError } from "dwolla-typescript";

let value: RtpFacilitatorFeeNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments does not currently support facilitator fees",
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
| `embedded`                                                                                                   | [models.RtpFacilitatorFeeNotSupportedErrorEmbedded](../models/rtpfacilitatorfeenotsupportederrorembedded.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |