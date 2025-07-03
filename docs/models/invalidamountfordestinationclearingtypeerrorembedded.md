# InvalidAmountForDestinationClearingTypeErrorEmbedded

## Example Usage

```typescript
import { InvalidAmountForDestinationClearingTypeErrorEmbedded } from "dwolla-typescript/models";

let value: InvalidAmountForDestinationClearingTypeErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message:
        "Amount is above the allowed threshold for the specified destination clearing type.",
      path: "/amount/value",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                                     | [models.InvalidAmountForDestinationClearingTypeErrorError](../models/invalidamountfordestinationclearingtypeerrorerror.md)[] | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |