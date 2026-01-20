# InvalidCardTokenError

Error returned when attempting to create a debit card funding source with an invalid card token

## Example Usage

```typescript
import { InvalidCardTokenError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `code`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | ValidationError                                                                       |
| `message`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | Validation error(s) present. See embedded errors list for more details.               |
| `embedded`                                                                            | [models.InvalidCardTokenErrorEmbedded](../../models/invalidcardtokenerrorembedded.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |