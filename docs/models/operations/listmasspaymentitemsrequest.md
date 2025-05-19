# ListMassPaymentItemsRequest

## Example Usage

```typescript
import { ListMassPaymentItemsRequest } from "dwolla-typescript/models/operations";

let value: ListMassPaymentItemsRequest = {
  id: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | Mass payment unique identifier |
| `limit`                        | *string*                       | :heavy_minus_sign:             | How many results to return     |
| `offset`                       | *string*                       | :heavy_minus_sign:             | How many results to skip       |
| `status`                       | *string*                       | :heavy_minus_sign:             | Filter by item status          |