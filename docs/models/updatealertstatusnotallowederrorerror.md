# UpdateAlertStatusNotAllowedErrorError

## Example Usage

```typescript
import { UpdateAlertStatusNotAllowedErrorError } from "dwolla/models";

let value: UpdateAlertStatusNotAllowedErrorError = {
  code: "NotAllowed",
  message: "Status not allowed.",
  path: "/status",
  links: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `code`                                                                                             | [models.UpdateAlertStatusNotAllowedErrorCode](../models/updatealertstatusnotallowederrorcode.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                | NotAllowed                                                                                         |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | Status not allowed.                                                                                |
| `path`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | /status                                                                                            |
| `links`                                                                                            | [models.UpdateAlertStatusNotAllowedErrorLinks](../models/updatealertstatusnotallowederrorlinks.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                | {}                                                                                                 |