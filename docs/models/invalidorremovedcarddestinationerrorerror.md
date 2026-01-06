# InvalidOrRemovedCardDestinationErrorError

## Example Usage

```typescript
import { InvalidOrRemovedCardDestinationErrorError } from "dwolla/models";

let value: InvalidOrRemovedCardDestinationErrorError = {
  code: "Invalid",
  message: "Destination funding source is either removed or does not exist.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | Invalid                                                                                                    |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | Destination funding source is either removed or does not exist.                                            |
| `path`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | /_links/destination/href                                                                                   |
| `links`                                                                                                    | [models.InvalidOrRemovedCardDestinationErrorLinks](../models/invalidorremovedcarddestinationerrorlinks.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | {}                                                                                                         |