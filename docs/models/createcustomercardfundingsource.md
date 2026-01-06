# CreateCustomerCardFundingSource

Schema for creating a debit card funding source using a tokenized card. The card token is obtained from a card tokenization service.

## Example Usage

```typescript
import { CreateCustomerCardFundingSource } from "dwolla/models";

let value: CreateCustomerCardFundingSource = {
  cardToken: "src_abc123_test_token_xyz789",
  name: "My Visa Debit Card",
  cardDetails: {
    billingAddress: {
      address1: "123 Main St",
      address2: "Apt 4B",
      address3: "Unit 101",
      city: "Dallas",
      stateProvinceRegion: "TX",
      country: "US",
      postalCode: "76034",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `cardToken`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | A tokenized representation of the card obtained from a card tokenization service                             | src_abc123_test_token_xyz789                                                                                 |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Arbitrary nickname for the debit card funding source. Must be 50 characters or less.                         | My Visa Debit Card                                                                                           |
| `cardDetails`                                                                                                | [models.CreateCustomerCardFundingSourceCardDetails](../models/createcustomercardfundingsourcecarddetails.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |