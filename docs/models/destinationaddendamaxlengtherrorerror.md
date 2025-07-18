# DestinationAddendaMaxLengthErrorError

## Example Usage

```typescript
import { DestinationAddendaMaxLengthErrorError } from "dwolla/models";

let value: DestinationAddendaMaxLengthErrorError = {
  code: "InvalidFormat",
  message: "Ach addenda entries can be up to 80 characters when supplied.",
  path: "/achDetails/destination/addenda/values",
  links: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `code`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | InvalidFormat                                                                                      |
| `message`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | Ach addenda entries can be up to 80 characters when supplied.                                      |
| `path`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | /achDetails/destination/addenda/values                                                             |
| `links`                                                                                            | [models.DestinationAddendaMaxLengthErrorLinks](../models/destinationaddendamaxlengtherrorlinks.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                | {}                                                                                                 |