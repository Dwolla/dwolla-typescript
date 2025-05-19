# IncompatibleSourceAndDestinationTypesError

## Example Usage

```typescript
import { IncompatibleSourceAndDestinationTypesError } from "dwolla-typescript";

let value: IncompatibleSourceAndDestinationTypesError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message:
          "Card type funding sources can only accept payments directly from a balance",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | ValidationError                                                                                                              |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | Validation error(s) present. See embedded errors list for more details.                                                      |
| `embedded`                                                                                                                   | [models.IncompatibleSourceAndDestinationTypesErrorEmbedded](../models/incompatiblesourceanddestinationtypeserrorembedded.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |