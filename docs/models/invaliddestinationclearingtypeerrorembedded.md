# InvalidDestinationClearingTypeErrorEmbedded

## Example Usage

```typescript
import { InvalidDestinationClearingTypeErrorEmbedded } from "dwolla-typescript";

let value: InvalidDestinationClearingTypeErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message: "Destination clearing type is currently not enabled.",
      path: "/clearing/destination",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                   | [models.InvalidDestinationClearingTypeErrorError](../models/invaliddestinationclearingtypeerrorerror.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |