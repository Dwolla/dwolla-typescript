# InternationalAddress

## Example Usage

```typescript
import { InternationalAddress } from "dwolla-typescript";

let value: InternationalAddress = {
  address1: "462 Main Street",
  address2: "Suite 123",
  address3: "Unit 123",
  city: "Des Moines",
  postalCode: "50309",
  country: "USA",
  stateProvinceRegion: "IA",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `address1`            | *string*              | :heavy_check_mark:    | N/A                   | 462 Main Street       |
| `address2`            | *string*              | :heavy_minus_sign:    | N/A                   | Suite 123             |
| `address3`            | *string*              | :heavy_minus_sign:    | N/A                   | Unit 123              |
| `city`                | *string*              | :heavy_check_mark:    | N/A                   | Des Moines            |
| `postalCode`          | *string*              | :heavy_minus_sign:    | N/A                   | 50309                 |
| `country`             | *string*              | :heavy_check_mark:    | N/A                   | USA                   |
| `stateProvinceRegion` | *string*              | :heavy_check_mark:    | N/A                   | IA                    |