# CardMissingRequiredFieldsError

Error returned when required fields are missing when creating an Exchange or a debit card funding source

## Example Usage

```typescript
import { CardMissingRequiredFieldsError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | ValidationError                                                                                         |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | Validation error(s) present. See embedded errors list for more details.                                 |
| `embedded`                                                                                              | [models.CardMissingRequiredFieldsErrorEmbedded](../../models/cardmissingrequiredfieldserrorembedded.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |