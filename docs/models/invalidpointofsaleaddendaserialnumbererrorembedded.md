# InvalidPointOfSaleAddendaSerialNumberErrorEmbedded

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaSerialNumberErrorEmbedded } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaSerialNumberErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Serial number on a Point of Sale addenda entry is required and can be up to 6 characters.",
      path: "/achDetails/source/addenda/pointOfSale/serialNumber",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                                 | [models.InvalidPointOfSaleAddendaSerialNumberErrorError](../models/invalidpointofsaleaddendaserialnumbererrorerror.md)[] | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |