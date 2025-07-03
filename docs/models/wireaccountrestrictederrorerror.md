# WireAccountRestrictedErrorError

## Example Usage

```typescript
import { WireAccountRestrictedErrorError } from "dwolla-typescript/models";

let value: WireAccountRestrictedErrorError = {
  code: "Restricted",
  message: "Account or customer restricted.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `code`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | Restricted                                                                             |
| `message`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | Account or customer restricted.                                                        |
| `path`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | /_links/destination/href                                                               |
| `links`                                                                                | [models.WireAccountRestrictedErrorLinks](../models/wireaccountrestrictederrorlinks.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    | {}                                                                                     |