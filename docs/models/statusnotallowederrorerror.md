# StatusNotAllowedErrorError

## Example Usage

```typescript
import { StatusNotAllowedErrorError } from "dwolla-typescript/models";

let value: StatusNotAllowedErrorError = {
  code: "NotAllowed",
  message: "Status not allowed.",
  path: "/status",
  links: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | NotAllowed                                                                   |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | Status not allowed.                                                          |
| `path`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | /status                                                                      |
| `links`                                                                      | [models.StatusNotAllowedErrorLinks](../models/statusnotallowederrorlinks.md) | :heavy_minus_sign:                                                           | N/A                                                                          | {}                                                                           |