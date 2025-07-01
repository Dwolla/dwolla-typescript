# CreateCustomerVirtualFundingSource

Schema for creating a Virtual Account Number (VAN) . VANs are unique account numbers for receiving external transactions into a Dwolla Balance.

## Example Usage

```typescript
import { CreateCustomerVirtualFundingSource } from "dwolla-typescript";

let value: CreateCustomerVirtualFundingSource = {
  name: "My First VAN",
  type: "virtual",
  bankAccountType: "checking",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Arbitrary nickname for the funding source. Must be 50 characters or less.                                                  | My First VAN                                                                                                               |
| `type`                                                                                                                     | [models.Type](../models/type.md)                                                                                           | :heavy_check_mark:                                                                                                         | Type of funding source. Must be set to "virtual" for VAN creation.                                                         | virtual                                                                                                                    |
| `bankAccountType`                                                                                                          | [models.CreateCustomerVirtualFundingSourceBankAccountType](../models/createcustomervirtualfundingsourcebankaccounttype.md) | :heavy_check_mark:                                                                                                         | Type of bank account. Must be "checking" for Virtual Account Numbers.                                                      | checking                                                                                                                   |