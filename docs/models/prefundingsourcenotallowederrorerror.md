# PrefundingSourceNotAllowedErrorError

## Example Usage

```typescript
import { PrefundingSourceNotAllowedErrorError } from "dwolla/models";

let value: PrefundingSourceNotAllowedErrorError = {
  code: "NotAllowed",
  message: "Only the prefunding account owner is able to prefund the account.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `code`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | NotAllowed                                                                                       |
| `message`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | Only the prefunding account owner is able to prefund the account.                                |
| `path`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | /_links/source/href                                                                              |
| `links`                                                                                          | [models.PrefundingSourceNotAllowedErrorLinks](../models/prefundingsourcenotallowederrorlinks.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              | {}                                                                                               |