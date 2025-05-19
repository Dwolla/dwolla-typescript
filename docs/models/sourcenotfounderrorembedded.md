# SourceNotFoundErrorEmbedded

## Example Usage

```typescript
import { SourceNotFoundErrorEmbedded } from "dwolla-typescript";

let value: SourceNotFoundErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Funding source not found.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `errors`                                                                   | [models.SourceNotFoundErrorError](../models/sourcenotfounderrorerror.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |