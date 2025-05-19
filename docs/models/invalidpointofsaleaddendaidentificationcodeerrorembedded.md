# InvalidPointOfSaleAddendaIdentificationCodeErrorEmbedded

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaIdentificationCodeErrorEmbedded } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaIdentificationCodeErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Identification code on a Point of Sale addenda entry is required and can be up to 6 characters.",
      path: "/achDetails/source/addenda/pointOfSale/identificationCode",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                                             | [models.InvalidPointOfSaleAddendaIdentificationCodeErrorError](../models/invalidpointofsaleaddendaidentificationcodeerrorerror.md)[] | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |