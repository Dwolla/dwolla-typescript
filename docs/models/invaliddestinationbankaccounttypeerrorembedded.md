# InvalidDestinationBankAccountTypeErrorEmbedded

## Example Usage

```typescript
import { InvalidDestinationBankAccountTypeErrorEmbedded } from "dwolla/models";

let value: InvalidDestinationBankAccountTypeErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Invalid bank account type",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                         | [models.InvalidDestinationBankAccountTypeErrorError](../models/invaliddestinationbankaccounttypeerrorerror.md)[] | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |