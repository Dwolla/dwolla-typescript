# WeeklyReceiveLimitReachedError

## Example Usage

```typescript
import { WeeklyReceiveLimitReachedError } from "dwolla-typescript";

let value: WeeklyReceiveLimitReachedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Destination customer has reached its weekly receive limit.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | ValidationError                                                                                      |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | Validation error(s) present. See embedded errors list for more details.                              |
| `embedded`                                                                                           | [models.WeeklyReceiveLimitReachedErrorEmbedded](../models/weeklyreceivelimitreachederrorembedded.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |