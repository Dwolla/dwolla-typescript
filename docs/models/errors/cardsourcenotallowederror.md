# CardSourceNotAllowedError

Error returned when attempting to use a debit card funding source as the transfer source

## Example Usage

```typescript
import { CardSourceNotAllowedError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | ValidationError                                                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Validation error(s) present. See embedded errors list for more details.                       |
| `embedded`                                                                                    | [models.CardSourceNotAllowedErrorEmbedded](../../models/cardsourcenotallowederrorembedded.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |