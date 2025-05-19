# DestinationAddendaMaxLengthError

## Example Usage

```typescript
import { DestinationAddendaMaxLengthError } from "dwolla-typescript";

let value: DestinationAddendaMaxLengthError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Ach addenda entries can be up to 80 characters when supplied.",
        path: "/achDetails/destination/addenda/values",
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
| `embedded`                                                                                               | [models.DestinationAddendaMaxLengthErrorEmbedded](../models/destinationaddendamaxlengtherrorembedded.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |