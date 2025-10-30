# CreateCustomerBankFundingSourceWithPlaid

Schema for creating a bank funding source using a Plaid processor token.

## Example Usage

```typescript
import { CreateCustomerBankFundingSourceWithPlaid } from "dwolla/models";

let value: CreateCustomerBankFundingSourceWithPlaid = {
  plaidToken: "processor-sandbox-plaidauth-123456",
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `plaidToken`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A processor token obtained from Plaid for adding and verifying a bank                                                                  | processor-sandbox-plaidauth-123456                                                                                                     |
| `bankAccountType`                                                                                                                      | [models.CreateCustomerBankFundingSourceWithPlaidBankAccountType](../models/createcustomerbankfundingsourcewithplaidbankaccounttype.md) | :heavy_check_mark:                                                                                                                     | Type of bank account                                                                                                                   | checking                                                                                                                               |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Arbitrary nickname for the funding source. Must be 50 characters or less.                                                              | Jane Doe's Checking                                                                                                                    |
| `channels`                                                                                                                             | [models.CreateCustomerBankFundingSourceWithPlaidChannel](../models/createcustomerbankfundingsourcewithplaidchannel.md)[]               | :heavy_minus_sign:                                                                                                                     | An array containing a list of processing channels. ACH is the default processing channel for bank transfers.                           |                                                                                                                                        |
| `links`                                                                                                                                | [models.CreateCustomerBankFundingSourceWithPlaidLinks](../models/createcustomerbankfundingsourcewithplaidlinks.md)                     | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |