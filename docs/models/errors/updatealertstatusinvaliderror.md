# UpdateAlertStatusInvalidError

The request body's `status` is missing or isn't `resolved`.

## Example Usage

```typescript
import { UpdateAlertStatusInvalidError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `code`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | ValidationError                                                                                       |
| `message`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | Validation error(s) present. See embedded errors list for more details.                               |
| `embedded`                                                                                            | [models.UpdateAlertStatusInvalidErrorEmbedded](../../models/updatealertstatusinvaliderrorembedded.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |