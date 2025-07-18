# CreateAccountFundingSource

## Example Usage

```typescript
import { CreateAccountFundingSource } from "dwolla/models";

let value: CreateAccountFundingSource = {
  name: "<value>",
  bankAccountType: "savings",
  accountNumber: "<value>",
  routingNumber: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                    | [models.CreateAccountFundingSourceLinks](../models/createaccountfundingsourcelinks.md)                     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `bankAccountType`                                                                                          | [models.CreateAccountFundingSourceBankAccountType](../models/createaccountfundingsourcebankaccounttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `accountNumber`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `routingNumber`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `channels`                                                                                                 | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |