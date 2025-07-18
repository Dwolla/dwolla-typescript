# SourceAddendaMaxLengthErrorEmbedded

## Example Usage

```typescript
import { SourceAddendaMaxLengthErrorEmbedded } from "dwolla/models";

let value: SourceAddendaMaxLengthErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message: "Ach addenda entries can be up to 80 characters when supplied.",
      path: "/achDetails/source/addenda/values",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `errors`                                                                                   | [models.SourceAddendaMaxLengthErrorError](../models/sourceaddendamaxlengtherrorerror.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |