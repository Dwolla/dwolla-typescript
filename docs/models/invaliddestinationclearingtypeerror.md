# InvalidDestinationClearingTypeError

## Example Usage

```typescript
import { InvalidDestinationClearingTypeError } from "dwolla-typescript";

let value: InvalidDestinationClearingTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Destination clearing type is currently not enabled.",
        path: "/clearing/destination",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | ValidationError                                                                                                |
| `message`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | Validation error(s) present. See embedded errors list for more details.                                        |
| `embedded`                                                                                                     | [models.InvalidDestinationClearingTypeErrorEmbedded](../models/invaliddestinationclearingtypeerrorembedded.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |