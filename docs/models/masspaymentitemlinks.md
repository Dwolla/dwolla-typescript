# MassPaymentItemLinks

## Example Usage

```typescript
import { MassPaymentItemLinks } from "dwolla-typescript/models";

let value: MassPaymentItemLinks = {
  self: {
    href:
      "https://api.dwolla.com/mass-payment-items/c1c7d293-63ec-e511-80df-0aa34a9b2388",
  },
  massPayment: {
    href:
      "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563",
  },
  destination: {
    href:
      "https://api.dwolla.com/funding-sources/b442c936-1f87-465d-a4e2-a982164b26bd",
  },
  transfer: {
    href:
      "https://api.dwolla.com/transfers/fa3999db-41ed-e511-80df-0aa34a9b2388",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `self`                                                                       | [models.MassPaymentItemSelf](../models/masspaymentitemself.md)               | :heavy_minus_sign:                                                           | N/A                                                                          |
| `massPayment`                                                                | [models.MassPaymentItemMassPayment](../models/masspaymentitemmasspayment.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `destination`                                                                | [models.MassPaymentItemDestination](../models/masspaymentitemdestination.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `transfer`                                                                   | [models.MassPaymentItemTransfer](../models/masspaymentitemtransfer.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |