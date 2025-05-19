# InvalidSourceBankAccountTypeErrorEmbedded

## Example Usage

```typescript
import { InvalidSourceBankAccountTypeErrorEmbedded } from "dwolla-typescript";

let value: InvalidSourceBankAccountTypeErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Invalid bank account type",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                               | [models.InvalidSourceBankAccountTypeErrorError](../models/invalidsourcebankaccounttypeerrorerror.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |