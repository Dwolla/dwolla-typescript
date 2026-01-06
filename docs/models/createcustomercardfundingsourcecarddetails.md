# CreateCustomerCardFundingSourceCardDetails

## Example Usage

```typescript
import { CreateCustomerCardFundingSourceCardDetails } from "dwolla/models";

let value: CreateCustomerCardFundingSourceCardDetails = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `billingAddress`                                                                                                   | [models.CreateCustomerCardFundingSourceBillingAddress](../models/createcustomercardfundingsourcebillingaddress.md) | :heavy_check_mark:                                                                                                 | The billing address associated with the card                                                                       |