# Address

## Example Usage

```typescript
import { Address } from "dwolla/models";

let value: Address = {
  address1: "462 Main Street",
  address2: "Suite 124",
  city: "Des Moines",
  postalCode: "50309",
  state: "IA",
  country: "US",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `address1`         | *string*           | :heavy_check_mark: | N/A                | 462 Main Street    |
| `address2`         | *string*           | :heavy_minus_sign: | N/A                | Suite 124          |
| `city`             | *string*           | :heavy_check_mark: | N/A                | Des Moines         |
| `postalCode`       | *string*           | :heavy_check_mark: | N/A                | 50309              |
| `state`            | *string*           | :heavy_check_mark: | N/A                | IA                 |
| `country`          | *string*           | :heavy_check_mark: | N/A                | US                 |