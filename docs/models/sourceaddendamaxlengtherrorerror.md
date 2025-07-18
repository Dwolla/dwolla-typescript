# SourceAddendaMaxLengthErrorError

## Example Usage

```typescript
import { SourceAddendaMaxLengthErrorError } from "dwolla/models";

let value: SourceAddendaMaxLengthErrorError = {
  code: "InvalidFormat",
  message: "Ach addenda entries can be up to 80 characters when supplied.",
  path: "/achDetails/source/addenda/values",
  links: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `code`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | InvalidFormat                                                                            |
| `message`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | Ach addenda entries can be up to 80 characters when supplied.                            |
| `path`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | /achDetails/source/addenda/values                                                        |
| `links`                                                                                  | [models.SourceAddendaMaxLengthErrorLinks](../models/sourceaddendamaxlengtherrorlinks.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      | {}                                                                                       |