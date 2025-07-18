# WithdrawInvalidFundingSourceErrorEmbedded

## Example Usage

```typescript
import { WithdrawInvalidFundingSourceErrorEmbedded } from "dwolla/models";

let value: WithdrawInvalidFundingSourceErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message:
        "Destination funding source is either removed or does not exist.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                               | [models.WithdrawInvalidFundingSourceErrorError](../models/withdrawinvalidfundingsourceerrorerror.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |