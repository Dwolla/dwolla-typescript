# IncompatibleAddendaEntriesErrorError

## Example Usage

```typescript
import { IncompatibleAddendaEntriesErrorError } from "dwolla-typescript/models";

let value: IncompatibleAddendaEntriesErrorError = {
  code: "NotAllowed",
  message: "Addenda must not include both 'values' and 'pointOfSale addenda",
  path: "/achDetails/source/addenda/pointOfSale",
  links: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `code`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | NotAllowed                                                                                       |
| `message`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | Addenda must not include both 'values' and 'pointOfSale addenda                                  |
| `path`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | /achDetails/source/addenda/pointOfSale                                                           |
| `links`                                                                                          | [models.IncompatibleAddendaEntriesErrorLinks](../models/incompatibleaddendaentrieserrorlinks.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              | {}                                                                                               |