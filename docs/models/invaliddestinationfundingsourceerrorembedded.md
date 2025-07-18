# InvalidDestinationFundingSourceErrorEmbedded

## Example Usage

```typescript
import { InvalidDestinationFundingSourceErrorEmbedded } from "dwolla/models";

let value: InvalidDestinationFundingSourceErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Invalid destination funding source.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                     | [models.InvalidDestinationFundingSourceErrorError](../models/invaliddestinationfundingsourceerrorerror.md)[] | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |