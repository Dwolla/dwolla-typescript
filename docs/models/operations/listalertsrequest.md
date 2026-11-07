# ListAlertsRequest

## Example Usage

```typescript
import { ListAlertsRequest } from "dwolla/models/operations";

let value: ListAlertsRequest = {
  status: "open",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                  | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Maximum number of results to return                                                                                                      | 25                                                                                                                                       |
| `status`                                                                                                                                 | [operations.Status](../../models/operations/status.md)                                                                                   | :heavy_minus_sign:                                                                                                                       | Filter by alert status. Case-insensitive. Specify at most once. Omit to list every alert. The `next` and `prev` links keep this filter.<br/> | open                                                                                                                                     |