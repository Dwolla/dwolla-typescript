# ListMassPaymentItemsLinks

## Example Usage

```typescript
import { ListMassPaymentItemsLinks } from "dwolla-typescript/models/operations";

let value: ListMassPaymentItemsLinks = {
  self: {
    href:
      "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563/items",
  },
  first: {
    href:
      "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563/items?limit=25&offset=0",
  },
  last: {
    href:
      "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563/items?limit=25&offset=0",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `self`                                                                                       | [operations.ListMassPaymentItemsSelf](../../models/operations/listmasspaymentitemsself.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `first`                                                                                      | [operations.ListMassPaymentItemsFirst](../../models/operations/listmasspaymentitemsfirst.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `last`                                                                                       | [operations.ListMassPaymentItemsLast](../../models/operations/listmasspaymentitemslast.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |