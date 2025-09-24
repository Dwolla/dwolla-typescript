# VerifyMicroDepositsEmbedded

## Example Usage

```typescript
import { VerifyMicroDepositsEmbedded } from "dwolla/models/operations";

let value: VerifyMicroDepositsEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Wrong amount(s).",
      path: "",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `errors`                                                 | [operations.ErrorT](../../models/operations/errort.md)[] | :heavy_minus_sign:                                       | N/A                                                      |