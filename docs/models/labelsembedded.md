# LabelsEmbedded

## Example Usage

```typescript
import { LabelsEmbedded } from "dwolla/models";

let value: LabelsEmbedded = {
  labels: [
    {
      links: {
        "key": {
          href: "https://api.dwolla.com",
          type: "application/vnd.dwolla.v1.hal+json",
          resourceType: "resource-type",
        },
      },
      id: "7e042ffe-e25e-40d2-b86e-748b98845ecc",
      created: new Date("2022-05-15T22:19:09.635Z"),
      amount: {
        value: "10",
        currency: "USD",
      },
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `labels`                             | [models.Label](../models/label.md)[] | :heavy_minus_sign:                   | N/A                                  |