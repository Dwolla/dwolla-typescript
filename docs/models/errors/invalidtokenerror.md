# InvalidTokenError

Error returned when creating an Exchange with an invalid token, or when the card data is invalid

## Example Usage

```typescript
import { InvalidTokenError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `code`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | ValidationError                                                               |
| `message`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | Validation error(s) present. See embedded errors list for more details.       |
| `embedded`                                                                    | [models.InvalidTokenErrorEmbedded](../../models/invalidtokenerrorembedded.md) | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |