# MaximumCardsExceededError

Error returned when a customer has exceeded the maximum number of debit card funding sources

## Example Usage

```typescript
import { MaximumCardsExceededError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | ValidationError                                                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Validation error(s) present. See embedded errors list for more details.                       |
| `embedded`                                                                                    | [models.MaximumCardsExceededErrorEmbedded](../../models/maximumcardsexceedederrorembedded.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |