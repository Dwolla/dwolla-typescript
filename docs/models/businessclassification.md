# BusinessClassification

## Example Usage

```typescript
import { BusinessClassification } from "dwolla-typescript/models";

let value: BusinessClassification = {
  links: {
    self: {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
    industryClassifications: [
      {
        id: "9ed3f66b-7d6f-11e3-95ac-5404a6144203",
        name: "Wineries",
      },
    ],
  },
  id: "9ed3f669-7d6f-11e3-b545-5404a6144203",
  name: "Food retail and service",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `links`                                                                              | [models.BusinessClassificationLinks](../models/businessclassificationlinks.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `embedded`                                                                           | [models.BusinessClassificationEmbedded](../models/businessclassificationembedded.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 9ed3f669-7d6f-11e3-b545-5404a6144203                                                 |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | Food retail and service                                                              |