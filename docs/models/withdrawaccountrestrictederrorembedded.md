# WithdrawAccountRestrictedErrorEmbedded

## Example Usage

```typescript
import { WithdrawAccountRestrictedErrorEmbedded } from "dwolla-typescript";

let value: WithdrawAccountRestrictedErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message: "Account or customer restricted.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `errors`                                                                                         | [models.WithdrawAccountRestrictedErrorError](../models/withdrawaccountrestrictederrorerror.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |