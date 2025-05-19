# DestinationAddendaMaxLengthErrorEmbedded

## Example Usage

```typescript
import { DestinationAddendaMaxLengthErrorEmbedded } from "dwolla-typescript";

let value: DestinationAddendaMaxLengthErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message: "Ach addenda entries can be up to 80 characters when supplied.",
      path: "/achDetails/destination/addenda/values",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `errors`                                                                                             | [models.DestinationAddendaMaxLengthErrorError](../models/destinationaddendamaxlengtherrorerror.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |