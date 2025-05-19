# ListAccountFundingSourcesRequest

## Example Usage

```typescript
import { ListAccountFundingSourcesRequest } from "dwolla-typescript/models/operations";

let value: ListAccountFundingSourcesRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | Account's unique identifier                                       |
| `removed`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Filter removed funding sources. Boolean value. Defaults to `true` |