# DestinationRemittanceDataMaxLengthErrorError

## Example Usage

```typescript
import { DestinationRemittanceDataMaxLengthErrorError } from "dwolla-typescript/models";

let value: DestinationRemittanceDataMaxLengthErrorError = {
  code: "InvalidFormat",
  message: "Remittance data entries can be up to 140 characters when supplied.",
  path: "/rtpDetails/destination/remittanceData",
  links: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | InvalidFormat                                                                                                    |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | Remittance data entries can be up to 140 characters when supplied.                                               |
| `path`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | /rtpDetails/destination/remittanceData                                                                           |
| `links`                                                                                                          | [models.DestinationRemittanceDataMaxLengthErrorLinks](../models/destinationremittancedatamaxlengtherrorlinks.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | {}                                                                                                               |