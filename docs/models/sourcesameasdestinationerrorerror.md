# SourceSameAsDestinationErrorError

## Example Usage

```typescript
import { SourceSameAsDestinationErrorError } from "dwolla/models";

let value: SourceSameAsDestinationErrorError = {
  code: "Invalid",
  message: "Receiver cannot be the owner of the source funding source.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `code`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | Invalid                                                                                    |
| `message`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | Receiver cannot be the owner of the source funding source.                                 |
| `path`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | /_links/destination/href                                                                   |
| `links`                                                                                    | [models.SourceSameAsDestinationErrorLinks](../models/sourcesameasdestinationerrorlinks.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        | {}                                                                                         |