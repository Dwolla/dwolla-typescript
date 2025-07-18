# InvalidCorrelationIdErrorEmbedded

## Example Usage

```typescript
import { InvalidCorrelationIdErrorEmbedded } from "dwolla/models";

let value: InvalidCorrelationIdErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Correlation id must be at least one character and up to 255 characters when supplied.",
      path: "/correlationId",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `errors`                                                                               | [models.InvalidCorrelationIdErrorError](../models/invalidcorrelationiderrorerror.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |