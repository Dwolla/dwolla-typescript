# DestinationRemittanceDataMaxLengthErrorEmbedded

## Example Usage

```typescript
import { DestinationRemittanceDataMaxLengthErrorEmbedded } from "dwolla-typescript";

let value: DestinationRemittanceDataMaxLengthErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Remittance data entries can be up to 140 characters when supplied.",
      path: "/rtpDetails/destination/remittanceData",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                           | [models.DestinationRemittanceDataMaxLengthErrorError](../models/destinationremittancedatamaxlengtherrorerror.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |