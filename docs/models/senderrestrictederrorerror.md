# SenderRestrictedErrorError

## Example Usage

```typescript
import { SenderRestrictedErrorError } from "dwolla-typescript";

let value: SenderRestrictedErrorError = {
  code: "Restricted",
  message: "Sender restricted.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | Restricted                                                                   |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | Sender restricted.                                                           |
| `path`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | /_links/source/href                                                          |
| `links`                                                                      | [models.SenderRestrictedErrorLinks](../models/senderrestrictederrorlinks.md) | :heavy_minus_sign:                                                           | N/A                                                                          | {}                                                                           |