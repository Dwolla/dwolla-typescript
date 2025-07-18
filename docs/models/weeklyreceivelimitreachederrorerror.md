# WeeklyReceiveLimitReachedErrorError

## Example Usage

```typescript
import { WeeklyReceiveLimitReachedErrorError } from "dwolla/models";

let value: WeeklyReceiveLimitReachedErrorError = {
  code: "Restricted",
  message: "Destination customer has reached its weekly receive limit.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `code`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Restricted                                                                                     |
| `message`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Destination customer has reached its weekly receive limit.                                     |
| `path`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | /_links/destination/href                                                                       |
| `links`                                                                                        | [models.WeeklyReceiveLimitReachedErrorLinks](../models/weeklyreceivelimitreachederrorlinks.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            | {}                                                                                             |