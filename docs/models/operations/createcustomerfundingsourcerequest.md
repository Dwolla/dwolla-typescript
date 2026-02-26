# CreateCustomerFundingSourceRequest

## Example Usage

```typescript
import { CreateCustomerFundingSourceRequest } from "dwolla/models/operations";

let value: CreateCustomerFundingSourceRequest = {
  id: "<id>",
  createCustomerFundingSource: {
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
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | Customer's unique identifier             |
| `createCustomerFundingSource`            | *models.CreateCustomerFundingSource*     | :heavy_check_mark:                       | Parameters for creating a funding source |