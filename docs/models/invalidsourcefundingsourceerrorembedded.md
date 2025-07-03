# InvalidSourceFundingSourceErrorEmbedded

## Example Usage

```typescript
import { InvalidSourceFundingSourceErrorEmbedded } from "dwolla-typescript/models";

let value: InvalidSourceFundingSourceErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Invalid funding source.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `errors`                                                                                           | [models.InvalidSourceFundingSourceErrorError](../models/invalidsourcefundingsourceerrorerror.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |