# InvalidFacilitatorFeeCollectFromCombinationErrorEmbedded

## Example Usage

```typescript
import { InvalidFacilitatorFeeCollectFromCombinationErrorEmbedded } from "dwolla-typescript";

let value: InvalidFacilitatorFeeCollectFromCombinationErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Currently, all fees must be paid by same destination.\"",
      path: "/fees/_links/charge-to/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                                             | [models.InvalidFacilitatorFeeCollectFromCombinationErrorError](../models/invalidfacilitatorfeecollectfromcombinationerrorerror.md)[] | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |