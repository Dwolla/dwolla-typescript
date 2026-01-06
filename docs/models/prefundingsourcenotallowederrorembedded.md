# PrefundingSourceNotAllowedErrorEmbedded

## Example Usage

```typescript
import { PrefundingSourceNotAllowedErrorEmbedded } from "dwolla/models";

let value: PrefundingSourceNotAllowedErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message:
        "Only the prefunding account owner is able to prefund the account.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `errors`                                                                                           | [models.PrefundingSourceNotAllowedErrorError](../models/prefundingsourcenotallowederrorerror.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |