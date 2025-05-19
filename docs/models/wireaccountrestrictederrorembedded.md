# WireAccountRestrictedErrorEmbedded

## Example Usage

```typescript
import { WireAccountRestrictedErrorEmbedded } from "dwolla-typescript";

let value: WireAccountRestrictedErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message: "Account or customer restricted.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `errors`                                                                                 | [models.WireAccountRestrictedErrorError](../models/wireaccountrestrictederrorerror.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |