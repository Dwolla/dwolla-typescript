# SourceNotCardNetworkSettlementErrorEmbedded

## Example Usage

```typescript
import { SourceNotCardNetworkSettlementErrorEmbedded } from "dwolla/models";

let value: SourceNotCardNetworkSettlementErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message: "Source funding source does not support card payouts.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                   | [models.SourceNotCardNetworkSettlementErrorError](../models/sourcenotcardnetworksettlementerrorerror.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |