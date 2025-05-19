# WireNotEnabledErrorEmbedded

## Example Usage

```typescript
import { WireNotEnabledErrorEmbedded } from "dwolla-typescript";

let value: WireNotEnabledErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message: "Wire transfers are currently not enabled.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `errors`                                                                   | [models.WireNotEnabledErrorError](../models/wirenotenablederrorerror.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |