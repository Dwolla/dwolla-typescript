# DirectAccountWithoutBankErrorEmbedded

## Example Usage

```typescript
import { DirectAccountWithoutBankErrorEmbedded } from "dwolla/models";

let value: DirectAccountWithoutBankErrorEmbedded = {
  errors: [
    {
      code: "RequiresFundingSource",
      message: "Receiver requires funding source.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `errors`                                                                                       | [models.DirectAccountWithoutBankErrorError](../models/directaccountwithoutbankerrorerror.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |