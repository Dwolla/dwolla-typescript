# InvalidPointOfSaleAddendaSerialNumberError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaSerialNumberError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaSerialNumberError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Serial number on a Point of Sale addenda entry is required and can be up to 6 characters.",
        path: "/achDetails/source/addenda/pointOfSale/serialNumber",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | ValidationError                                                                                                              |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | Validation error(s) present. See embedded errors list for more details.                                                      |
| `embedded`                                                                                                                   | [models.InvalidPointOfSaleAddendaSerialNumberErrorEmbedded](../models/invalidpointofsaleaddendaserialnumbererrorembedded.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |