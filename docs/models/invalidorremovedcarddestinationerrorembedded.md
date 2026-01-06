# InvalidOrRemovedCardDestinationErrorEmbedded

## Example Usage

```typescript
import { InvalidOrRemovedCardDestinationErrorEmbedded } from "dwolla/models";

let value: InvalidOrRemovedCardDestinationErrorEmbedded = {
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                     | [models.InvalidOrRemovedCardDestinationErrorError](../models/invalidorremovedcarddestinationerrorerror.md)[] | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |