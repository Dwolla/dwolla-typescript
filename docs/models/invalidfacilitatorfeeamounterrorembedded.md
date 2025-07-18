# InvalidFacilitatorFeeAmountErrorEmbedded

## Example Usage

```typescript
import { InvalidFacilitatorFeeAmountErrorEmbedded } from "dwolla/models";

let value: InvalidFacilitatorFeeAmountErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Invalid facilitator fee amount.",
      path: "/fees/_links/charge-to/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `errors`                                                                                             | [models.InvalidFacilitatorFeeAmountErrorError](../models/invalidfacilitatorfeeamounterrorerror.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |