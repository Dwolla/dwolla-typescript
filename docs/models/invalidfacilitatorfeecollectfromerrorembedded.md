# InvalidFacilitatorFeeCollectFromErrorEmbedded

## Example Usage

```typescript
import { InvalidFacilitatorFeeCollectFromErrorEmbedded } from "dwolla/models";

let value: InvalidFacilitatorFeeCollectFromErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Unable to charge fee to specified destination.",
      path: "/fees/_links/charge-to/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                       | [models.InvalidFacilitatorFeeCollectFromErrorError](../models/invalidfacilitatorfeecollectfromerrorerror.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |