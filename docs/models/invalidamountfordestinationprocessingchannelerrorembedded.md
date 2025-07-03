# InvalidAmountForDestinationProcessingChannelErrorEmbedded

## Example Usage

```typescript
import { InvalidAmountForDestinationProcessingChannelErrorEmbedded } from "dwolla-typescript/models";

let value: InvalidAmountForDestinationProcessingChannelErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message:
        "Amount is greater than the allowed threshold for the specified destination processing channel.",
      path: "/amount/value",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                                               | [models.InvalidAmountForDestinationProcessingChannelErrorError](../models/invalidamountfordestinationprocessingchannelerrorerror.md)[] | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |