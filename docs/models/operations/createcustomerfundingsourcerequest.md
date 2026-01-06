# CreateCustomerFundingSourceRequest

## Example Usage

```typescript
import { CreateCustomerFundingSourceRequest } from "dwolla/models/operations";

let value: CreateCustomerFundingSourceRequest = {
  id: "<id>",
  createCustomerFundingSource: {
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
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | Customer's unique identifier             |
| `createCustomerFundingSource`            | *models.CreateCustomerFundingSource*     | :heavy_check_mark:                       | Parameters for creating a funding source |