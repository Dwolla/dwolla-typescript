# IncompatibleSourceAndDestinationTypesErrorEmbedded

## Example Usage

```typescript
import { IncompatibleSourceAndDestinationTypesErrorEmbedded } from "dwolla-typescript/models";

let value: IncompatibleSourceAndDestinationTypesErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message:
        "Card type funding sources can only accept payments directly from a balance",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                                 | [models.IncompatibleSourceAndDestinationTypesErrorError](../models/incompatiblesourceanddestinationtypeserrorerror.md)[] | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |