# CreateCustomerCardFundingSourceWithExchange

Schema for creating a debit card funding source using an Exchange. Used for Push to Card.

## Example Usage

```typescript
import { CreateCustomerCardFundingSourceWithExchange } from "dwolla/models";

let value: CreateCustomerCardFundingSourceWithExchange = {
  links: {
    exchange: {
      href:
        "https://api-sandbox.dwolla.com/exchanges/d46b028c-244b-4054-b19b-72f09cd1dc04",
    },
  },
  name: "My Visa Debit Card",
  cardDetails: {
    firstName: "Jane",
    lastName: "Doe",
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `links`                                                                                                                              | [models.CreateCustomerCardFundingSourceWithExchangeLinks](../models/createcustomercardfundingsourcewithexchangelinks.md)             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Arbitrary nickname for the debit card funding source. Must be 50 characters or less.                                                 | My Visa Debit Card                                                                                                                   |
| `cardDetails`                                                                                                                        | [models.CreateCustomerCardFundingSourceWithExchangeCardDetails](../models/createcustomercardfundingsourcewithexchangecarddetails.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |