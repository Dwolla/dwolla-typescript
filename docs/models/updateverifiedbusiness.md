# UpdateVerifiedBusiness

Update Verified Business Customer Information (both Sole Proprietorship and Non-Sole Proprietorship)

## Example Usage

```typescript
import { UpdateVerifiedBusiness } from "dwolla/models";

let value: UpdateVerifiedBusiness = {
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  address1: "123 Main Street",
  address2: "XYZ Suite",
  city: "Des Moines",
  state: "IA",
  postalCode: "50309",
  phone: "5555555555",
  doingBusinessAs: "Jane's Electronics",
  website: "https://www.domain.com",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `email`                | *string*               | :heavy_minus_sign:     | N/A                    | accountAdmin@email.com |
| `ipAddress`            | *string*               | :heavy_minus_sign:     | N/A                    | 143.156.7.8            |
| `address1`             | *string*               | :heavy_minus_sign:     | N/A                    | 123 Main Street        |
| `address2`             | *string*               | :heavy_minus_sign:     | N/A                    | XYZ Suite              |
| `city`                 | *string*               | :heavy_minus_sign:     | N/A                    | Des Moines             |
| `state`                | *string*               | :heavy_minus_sign:     | N/A                    | IA                     |
| `postalCode`           | *string*               | :heavy_minus_sign:     | N/A                    | 50309                  |
| `phone`                | *string*               | :heavy_minus_sign:     | N/A                    | 5555555555             |
| `doingBusinessAs`      | *string*               | :heavy_minus_sign:     | N/A                    | Jane's Electronics     |
| `website`              | *string*               | :heavy_minus_sign:     | N/A                    | https://www.domain.com |