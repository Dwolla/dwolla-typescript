# ReceiverNotFoundErrorError

## Example Usage

```typescript
import { ReceiverNotFoundErrorError } from "dwolla/models";

let value: ReceiverNotFoundErrorError = {
  code: "Invalid",
  message: "Receiver not found.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | Invalid                                                                      |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | Receiver not found.                                                          |
| `path`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | /_links/destination/href                                                     |
| `links`                                                                      | [models.ReceiverNotFoundErrorLinks](../models/receivernotfounderrorlinks.md) | :heavy_minus_sign:                                                           | N/A                                                                          | {}                                                                           |