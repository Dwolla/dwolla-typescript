# IncompatibleAddendaEntriesErrorEmbedded

## Example Usage

```typescript
import { IncompatibleAddendaEntriesErrorEmbedded } from "dwolla-typescript";

let value: IncompatibleAddendaEntriesErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message:
        "Addenda must not include both 'values' and 'pointOfSale addenda",
      path: "/achDetails/source/addenda/pointOfSale",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `errors`                                                                                           | [models.IncompatibleAddendaEntriesErrorError](../models/incompatibleaddendaentrieserrorerror.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |