# CreateCustomerExchangeFundingSource

Schema for creating a funding source using an exchange resource. This method is used when the bank account information is obtained via Instant Account Verification (IAV) through an exchange partner (like Plaid, Visa, MX, or Finicity).

## Example Usage

```typescript
import { CreateCustomerExchangeFundingSource } from "dwolla-typescript";

let value: CreateCustomerExchangeFundingSource = {
  links: {
    exchange: {
      href:
        "https://api-sandbox.dwolla.com/exchanges/6bc9109a-04fd-49b6-ace6-ca06fd282d65",
    },
    onDemandAuthorization: {
      href:
        "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
    },
  },
  bankAccountType: "checking",
  name: "Jane Doe's Checking",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                      | [models.CreateCustomerExchangeFundingSourceLinks](../models/createcustomerexchangefundingsourcelinks.md)                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `bankAccountType`                                                                                                            | [models.CreateCustomerExchangeFundingSourceBankAccountType](../models/createcustomerexchangefundingsourcebankaccounttype.md) | :heavy_check_mark:                                                                                                           | Type of bank account                                                                                                         | checking                                                                                                                     |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Arbitrary nickname for the funding source. Must be 50 characters or less.                                                    | Jane Doe's Checking                                                                                                          |