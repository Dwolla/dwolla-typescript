# UpdateFundingSourceValidationError

Validation error returned when an update request cannot be applied. The specific problem is
described by the embedded error's `code`, `message`, and `path`. Common cases:
- no updateable field was provided (`Invalid` at `/`)
- bank fields were sent to a card funding source (`NotAllowed` at `/routingNumber`)
- card fields were sent to a bank funding source (`NotAllowed` at `/cardDetails`)
- a `cardDetails` value failed validation, such as `countryOfBirth` not being exactly 2 characters


## Example Usage

```typescript
import { UpdateFundingSourceValidationError } from "dwolla/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | ValidationError                                                                                                 |
| `message`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Validation error(s) present. See embedded errors list for more details.                                         |
| `embedded`                                                                                                      | [models.UpdateFundingSourceValidationErrorEmbedded](../../models/updatefundingsourcevalidationerrorembedded.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |