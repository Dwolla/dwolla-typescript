# WireAccountNotFoundErrorEmbedded

## Example Usage

```typescript
import { WireAccountNotFoundErrorEmbedded } from "dwolla/models";

let value: WireAccountNotFoundErrorEmbedded = {
  errors: [
    {
      code: "NotFound",
      message: "Account or customer invalid.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `errors`                                                                             | [models.WireAccountNotFoundErrorError](../models/wireaccountnotfounderrorerror.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |