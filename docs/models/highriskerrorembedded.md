# HighRiskErrorEmbedded

## Example Usage

```typescript
import { HighRiskErrorEmbedded } from "dwolla-typescript";

let value: HighRiskErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message:
        "Due to account restrictions, we are unable to process this transaction.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `errors`                                                       | [models.HighRiskErrorError](../models/highriskerrorerror.md)[] | :heavy_minus_sign:                                             | N/A                                                            |