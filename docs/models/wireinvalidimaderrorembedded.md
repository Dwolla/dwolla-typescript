# WireInvalidImadErrorEmbedded

## Example Usage

```typescript
import { WireInvalidImadErrorEmbedded } from "dwolla-typescript";

let value: WireInvalidImadErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Missing or invalid IMAD.",
      path: "/imad",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `errors`                                                                     | [models.WireInvalidImadErrorError](../models/wireinvalidimaderrorerror.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |