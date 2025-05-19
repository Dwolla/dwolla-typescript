# InvalidDestinationFundingSourceError

## Example Usage

```typescript
import { InvalidDestinationFundingSourceError } from "dwolla-typescript";

let value: InvalidDestinationFundingSourceError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid destination funding source.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | ValidationError                                                                                                  |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | Validation error(s) present. See embedded errors list for more details.                                          |
| `embedded`                                                                                                       | [models.InvalidDestinationFundingSourceErrorEmbedded](../models/invaliddestinationfundingsourceerrorembedded.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |