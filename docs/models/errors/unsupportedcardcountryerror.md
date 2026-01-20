# UnsupportedCardCountryError

Error returned when attempting to create a debit card funding source from an unsupported country

## Example Usage

```typescript
import { UnsupportedCardCountryError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `code`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | ValidationError                                                                                   |
| `message`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | Validation error(s) present. See embedded errors list for more details.                           |
| `embedded`                                                                                        | [models.UnsupportedCardCountryErrorEmbedded](../../models/unsupportedcardcountryerrorembedded.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |