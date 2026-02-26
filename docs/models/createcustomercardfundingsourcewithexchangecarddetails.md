# CreateCustomerCardFundingSourceWithExchangeCardDetails

## Example Usage

```typescript
import { CreateCustomerCardFundingSourceWithExchangeCardDetails } from "dwolla/models";

let value: CreateCustomerCardFundingSourceWithExchangeCardDetails = {
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
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `firstName`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Cardholder first name                                                                                                                      | Jane                                                                                                                                       |
| `lastName`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Cardholder last name                                                                                                                       | Doe                                                                                                                                        |
| `billingAddress`                                                                                                                           | [models.CreateCustomerCardFundingSourceWithExchangeBillingAddress](../models/createcustomercardfundingsourcewithexchangebillingaddress.md) | :heavy_check_mark:                                                                                                                         | The billing address associated with the card                                                                                               |                                                                                                                                            |