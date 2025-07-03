# InvalidMetadataErrorEmbedded

## Example Usage

```typescript
import { InvalidMetadataErrorEmbedded } from "dwolla-typescript/models";

let value: InvalidMetadataErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Invalid metadata.",
      path: "/metadata",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `errors`                                                                     | [models.InvalidMetadataErrorError](../models/invalidmetadataerrorerror.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |