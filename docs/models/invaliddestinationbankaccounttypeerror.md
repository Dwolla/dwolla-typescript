# InvalidDestinationBankAccountTypeError

## Example Usage

```typescript
import { InvalidDestinationBankAccountTypeError } from "dwolla-typescript";

let value: InvalidDestinationBankAccountTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid bank account type",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | ValidationError                                                                                                      |
| `message`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | Validation error(s) present. See embedded errors list for more details.                                              |
| `embedded`                                                                                                           | [models.InvalidDestinationBankAccountTypeErrorEmbedded](../models/invaliddestinationbankaccounttypeerrorembedded.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |