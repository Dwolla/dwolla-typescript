# WeeklyReceiveLimitReachedErrorEmbedded

## Example Usage

```typescript
import { WeeklyReceiveLimitReachedErrorEmbedded } from "dwolla/models";

let value: WeeklyReceiveLimitReachedErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message: "Destination customer has reached its weekly receive limit.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `errors`                                                                                         | [models.WeeklyReceiveLimitReachedErrorError](../models/weeklyreceivelimitreachederrorerror.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |