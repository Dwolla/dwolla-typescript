# InvalidPointOfSaleAddendaAddressErrorEmbedded

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaAddressErrorEmbedded } from "dwolla-typescript/models";

let value: InvalidPointOfSaleAddendaAddressErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Address on a Point of Sale addenda entry is required and can be up to 27 characters.",
      path: "/achDetails/source/addenda/pointOfSale/address",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                       | [models.InvalidPointOfSaleAddendaAddressErrorError](../models/invalidpointofsaleaddendaaddresserrorerror.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |