# DestinationRemittanceDataMaxLengthError

## Example Usage

```typescript
import { DestinationRemittanceDataMaxLengthError } from "dwolla-typescript";

let value: DestinationRemittanceDataMaxLengthError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Remittance data entries can be up to 140 characters when supplied.",
        path: "/rtpDetails/destination/remittanceData",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | ValidationError                                                                                                        |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | Validation error(s) present. See embedded errors list for more details.                                                |
| `embedded`                                                                                                             | [models.DestinationRemittanceDataMaxLengthErrorEmbedded](../models/destinationremittancedatamaxlengtherrorembedded.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |