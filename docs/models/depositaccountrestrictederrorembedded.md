# DepositAccountRestrictedErrorEmbedded

## Example Usage

```typescript
import { DepositAccountRestrictedErrorEmbedded } from "dwolla/models";

let value: DepositAccountRestrictedErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message: "Account is restricted.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `errors`                                                                                       | [models.DepositAccountRestrictedErrorError](../models/depositaccountrestrictederrorerror.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |