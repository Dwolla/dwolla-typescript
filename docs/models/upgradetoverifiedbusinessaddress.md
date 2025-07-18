# UpgradeToVerifiedBusinessAddress

## Example Usage

```typescript
import { UpgradeToVerifiedBusinessAddress } from "dwolla/models";

let value: UpgradeToVerifiedBusinessAddress = {
  address1: "1749 18th st",
  address2: "apt 12",
  city: "Des Moines",
  stateProvinceRegion: "IA",
  postalCode: "50266",
  country: "US",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `address1`            | *string*              | :heavy_check_mark:    | N/A                   | 1749 18th st          |
| `address2`            | *string*              | :heavy_minus_sign:    | N/A                   | apt 12                |
| `city`                | *string*              | :heavy_check_mark:    | N/A                   | Des Moines            |
| `stateProvinceRegion` | *string*              | :heavy_check_mark:    | N/A                   | IA                    |
| `postalCode`          | *string*              | :heavy_check_mark:    | N/A                   | 50266                 |
| `country`             | *string*              | :heavy_check_mark:    | N/A                   | US                    |