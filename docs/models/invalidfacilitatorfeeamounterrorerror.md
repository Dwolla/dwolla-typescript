# InvalidFacilitatorFeeAmountErrorError

## Example Usage

```typescript
import { InvalidFacilitatorFeeAmountErrorError } from "dwolla-typescript";

let value: InvalidFacilitatorFeeAmountErrorError = {
  code: "Invalid",
  message: "Invalid facilitator fee amount.",
  path: "/fees/_links/charge-to/href",
  links: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `code`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | Invalid                                                                                            |
| `message`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | Invalid facilitator fee amount.                                                                    |
| `path`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | /fees/_links/charge-to/href                                                                        |
| `links`                                                                                            | [models.InvalidFacilitatorFeeAmountErrorLinks](../models/invalidfacilitatorfeeamounterrorlinks.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                | {}                                                                                                 |