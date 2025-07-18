# WireAccountRestrictedError

## Example Usage

```typescript
import { WireAccountRestrictedError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `code`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | ValidationError                                                                                 |
| `message`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | Validation error(s) present. See embedded errors list for more details.                         |
| `embedded`                                                                                      | [models.WireAccountRestrictedErrorEmbedded](../../models/wireaccountrestrictederrorembedded.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |