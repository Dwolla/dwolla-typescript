# StatusNotAllowedError

## Example Usage

```typescript
import { StatusNotAllowedError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `code`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | ValidationError                                                                       |
| `message`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | Validation error(s) present. See embedded errors list for more details.               |
| `embedded`                                                                            | [models.StatusNotAllowedErrorEmbedded](../../models/statusnotallowederrorembedded.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |