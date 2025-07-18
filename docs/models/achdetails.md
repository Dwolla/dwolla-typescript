# AchDetails

## Example Usage

```typescript
import { AchDetails } from "dwolla/models";

let value: AchDetails = {
  source: {
    addenda: {
      values: [
        "ABC123_AddendaValue",
      ],
    },
  },
  destination: {
    addenda: {
      values: [
        "ZYX987_AddendaValue",
      ],
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `source`                                                           | [models.Source](../models/source.md)                               | :heavy_minus_sign:                                                 | N/A                                                                |
| `destination`                                                      | [models.AchDetailsDestination](../models/achdetailsdestination.md) | :heavy_minus_sign:                                                 | N/A                                                                |