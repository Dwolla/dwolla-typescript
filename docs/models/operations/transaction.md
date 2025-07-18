# Transaction

## Example Usage

```typescript
import { Transaction } from "dwolla/models/operations";

let value: Transaction = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "416a2857-c887-4cca-bd02-8c3f75c4bb0e",
  status: "pending",
  amount: {
    value: "2.00",
    currency: "USD",
  },
  created: new Date("2016-02-22T20:46:38.777Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../../models/hallink.md)>                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 416a2857-c887-4cca-bd02-8c3f75c4bb0e                                                          |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | pending                                                                                       |
| `amount`                                                                                      | [operations.ListTransferFeesAmount](../../models/operations/listtransferfeesamount.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2016-02-22T20:46:38.777Z                                                                      |