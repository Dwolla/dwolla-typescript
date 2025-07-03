# SourceSameAsDestinationErrorEmbedded

## Example Usage

```typescript
import { SourceSameAsDestinationErrorEmbedded } from "dwolla-typescript/models";

let value: SourceSameAsDestinationErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Receiver cannot be the owner of the source funding source.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `errors`                                                                                     | [models.SourceSameAsDestinationErrorError](../models/sourcesameasdestinationerrorerror.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |