# FundingSourceCardDetails

Card-specific details. Only present when type is 'card'.

## Example Usage

```typescript
import { FundingSourceCardDetails } from "dwolla/models";

let value: FundingSourceCardDetails = {
  brand: "Visa",
  lastFour: "1234",
  expirationMonth: 12,
  expirationYear: 2026,
  nameOnCard: "John Doe",
  bin: "40247644",
  billingAddress: {
    address1: "552 test",
    address2: "Apt 4B",
    address3: "Unit 101",
    city: "Des Moines",
    stateProvinceRegion: "IA",
    country: "US",
    postalCode: "50310",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `brand`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The card brand/network (e.g., Visa, Mastercard, American Express)              | Visa                                                                           |
| `lastFour`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The last four digits of the card number                                        | 1234                                                                           |
| `expirationMonth`                                                              | *number*                                                                       | :heavy_minus_sign:                                                             | The card expiration month (1-12)                                               | 12                                                                             |
| `expirationYear`                                                               | *number*                                                                       | :heavy_minus_sign:                                                             | The card expiration year (4-digit year)                                        | 2026                                                                           |
| `nameOnCard`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | The cardholder name as it appears on the card                                  | John Doe                                                                       |
| `bin`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | Bank Identification Number (BIN) - the first 6-8 digits of the card number     | 40247644                                                                       |
| `billingAddress`                                                               | [models.FundingSourceBillingAddress](../models/fundingsourcebillingaddress.md) | :heavy_minus_sign:                                                             | The billing address associated with the card                                   |                                                                                |