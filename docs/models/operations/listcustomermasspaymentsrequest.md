# ListCustomerMassPaymentsRequest

## Example Usage

```typescript
import { ListCustomerMassPaymentsRequest } from "dwolla-typescript/models/operations";

let value: ListCustomerMassPaymentsRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Customer ID to get mass payments for                                           |
| `correlationId`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | A string value to search on if `correlationId` was specified for a transaction |
| `limit`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Number of search results to return. Defaults to 25                             |
| `offset`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | Number of search results to skip. Use for pagination                           |