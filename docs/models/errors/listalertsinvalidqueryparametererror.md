# ListAlertsInvalidQueryParameterError

A query parameter is invalid. Common cases:
- The cursor in a `next` or `prev` link was modified or is malformed (`Invalid cursor.`)
- `limit` is less than 1 or greater than 200 (`Limit must be > 0 and <= 200.`)
- `limit` isn't an integer (`Invalid query parameter: limit`)


## Example Usage

```typescript
import { ListAlertsInvalidQueryParameterError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `code`                    | *"InvalidQueryParameter"* | :heavy_check_mark:        | N/A                       | InvalidQueryParameter     |
| `message`                 | *string*                  | :heavy_check_mark:        | N/A                       | Invalid cursor.           |