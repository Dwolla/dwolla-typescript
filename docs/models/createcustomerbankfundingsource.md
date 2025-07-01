# CreateCustomerBankFundingSource

Schema for creating a basic bank funding source using routing and account numbers. This is the traditional method of adding a bank account.

## Example Usage

```typescript
import { CreateCustomerBankFundingSource } from "dwolla-typescript";

let value: CreateCustomerBankFundingSource = {
  routingNumber: "222222226",
  accountNumber: "123456789",
  bankAccountType: "checking",
  name: "Jane Doe's Checking",
  links: {
    onDemandAuthorization: {
      href:
        "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `routingNumber`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | A bank routing number that identifies a bank or credit union in the U.S.                                             | 222222226                                                                                                            |
| `accountNumber`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The bank account number                                                                                              | 123456789                                                                                                            |
| `bankAccountType`                                                                                                    | [models.CreateCustomerBankFundingSourceBankAccountType](../models/createcustomerbankfundingsourcebankaccounttype.md) | :heavy_check_mark:                                                                                                   | Type of bank account                                                                                                 | checking                                                                                                             |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Arbitrary nickname for the funding source. Must be 50 characters or less.                                            | Jane Doe's Checking                                                                                                  |
| `plaidToken`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | A processor token obtained from Plaid for adding and verifying a bank                                                |                                                                                                                      |
| `channels`                                                                                                           | [models.Channel](../models/channel.md)[]                                                                             | :heavy_minus_sign:                                                                                                   | An array containing a list of processing channels. ACH is the default processing channel for bank transfers.         |                                                                                                                      |
| `links`                                                                                                              | [models.CreateCustomerBankFundingSourceLinks](../models/createcustomerbankfundingsourcelinks.md)                     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |