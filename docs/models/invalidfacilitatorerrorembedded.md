# InvalidFacilitatorErrorEmbedded

## Example Usage

```typescript
import { InvalidFacilitatorErrorEmbedded } from "dwolla/models";

let value: InvalidFacilitatorErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Account cannot facilitate this transaction.",
      path: "",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `errors`                                                                           | [models.InvalidFacilitatorErrorError](../models/invalidfacilitatorerrorerror.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |