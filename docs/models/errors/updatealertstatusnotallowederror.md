# UpdateAlertStatusNotAllowedError

The alert can't be resolved, such as when it's already resolved or doesn't have a `resolve` link.

## Example Usage

```typescript
import { UpdateAlertStatusNotAllowedError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | ValidationError                                                                                             |
| `message`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | Validation error(s) present. See embedded errors list for more details.                                     |
| `embedded`                                                                                                  | [models.UpdateAlertStatusNotAllowedErrorEmbedded](../../models/updatealertstatusnotallowederrorembedded.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |