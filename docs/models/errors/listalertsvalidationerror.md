# ListAlertsValidationError

The `status` query parameter is invalid. Common cases:
- `status` isn't `open` or `resolved`, or is empty
- `status` is specified more than once
- `status` doesn't match the cursor, because it was changed or dropped while paging


## Example Usage

```typescript
import { ListAlertsValidationError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `code`                                                                                        | *"ValidationError"*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           | ValidationError                                                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Validation error(s) present. See embedded errors list for more details.                       |
| `embedded`                                                                                    | [models.ListAlertsValidationErrorEmbedded](../../models/listalertsvalidationerrorembedded.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |