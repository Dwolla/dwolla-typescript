# ListCustomerFundingSourcesRequest

## Example Usage

```typescript
import { ListCustomerFundingSourcesRequest } from "dwolla/models/operations";

let value: ListCustomerFundingSourcesRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | Customer's unique identifier                                      |
| `removed`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Filter removed funding sources. Boolean value. Defaults to `true` |