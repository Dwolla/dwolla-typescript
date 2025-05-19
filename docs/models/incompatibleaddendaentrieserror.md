# IncompatibleAddendaEntriesError

## Example Usage

```typescript
import { IncompatibleAddendaEntriesError } from "dwolla-typescript";

let value: IncompatibleAddendaEntriesError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Addenda must not include both 'values' and 'pointOfSale addenda",
        path: "/achDetails/source/addenda/pointOfSale",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | ValidationError                                                                                        |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | Validation error(s) present. See embedded errors list for more details.                                |
| `embedded`                                                                                             | [models.IncompatibleAddendaEntriesErrorEmbedded](../models/incompatibleaddendaentrieserrorembedded.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |