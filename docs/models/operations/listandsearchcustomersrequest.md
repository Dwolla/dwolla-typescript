# ListAndSearchCustomersRequest

## Example Usage

```typescript
import { ListAndSearchCustomersRequest } from "dwolla-typescript/models/operations";

let value: ListAndSearchCustomersRequest = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `limit`                    | *string*                   | :heavy_minus_sign:         | How many results to return |
| `offset`                   | *string*                   | :heavy_minus_sign:         | How many results to skip   |
| `search`                   | *string*                   | :heavy_minus_sign:         | Searches on certain fields |
| `status`                   | *string*                   | :heavy_minus_sign:         | Filter by customer status  |