# InvalidPointOfSaleAddendaSerialNumberErrorError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaSerialNumberErrorError } from "dwolla/models";

let value: InvalidPointOfSaleAddendaSerialNumberErrorError = {
  code: "InvalidFormat",
  message:
    "Serial number on a Point of Sale addenda entry is required and can be up to 6 characters.",
  path: "/achDetails/source/addenda/pointOfSale/serialNumber",
  links: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | InvalidFormat                                                                                                          |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | Serial number on a Point of Sale addenda entry is required and can be up to 6 characters.                              |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | /achDetails/source/addenda/pointOfSale/serialNumber                                                                    |
| `links`                                                                                                                | [models.InvalidPointOfSaleAddendaSerialNumberErrorLinks](../models/invalidpointofsaleaddendaserialnumbererrorlinks.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | {}                                                                                                                     |