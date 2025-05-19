# SourceAddendaMaxLengthError

## Example Usage

```typescript
import { SourceAddendaMaxLengthError } from "dwolla-typescript";

let value: SourceAddendaMaxLengthError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Ach addenda entries can be up to 80 characters when supplied.",
        path: "/achDetails/source/addenda/values",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `code`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | ValidationError                                                                                |
| `message`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | Validation error(s) present. See embedded errors list for more details.                        |
| `embedded`                                                                                     | [models.SourceAddendaMaxLengthErrorEmbedded](../models/sourceaddendamaxlengtherrorembedded.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |