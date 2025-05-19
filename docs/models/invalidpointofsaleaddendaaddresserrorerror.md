# InvalidPointOfSaleAddendaAddressErrorError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaAddressErrorError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaAddressErrorError = {
  code: "InvalidFormat",
  message:
    "Address on a Point of Sale addenda entry is required and can be up to 27 characters.",
  path: "/achDetails/source/addenda/pointOfSale/address",
  links: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | InvalidFormat                                                                                                |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | Address on a Point of Sale addenda entry is required and can be up to 27 characters.                         |
| `path`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | /achDetails/source/addenda/pointOfSale/address                                                               |
| `links`                                                                                                      | [models.InvalidPointOfSaleAddendaAddressErrorLinks](../models/invalidpointofsaleaddendaaddresserrorlinks.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | {}                                                                                                           |