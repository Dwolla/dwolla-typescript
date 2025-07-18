# WithdrawAccountRestrictedErrorError

## Example Usage

```typescript
import { WithdrawAccountRestrictedErrorError } from "dwolla/models";

let value: WithdrawAccountRestrictedErrorError = {
  code: "Restricted",
  message: "Account or customer restricted.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `code`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Restricted                                                                                     |
| `message`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Account or customer restricted.                                                                |
| `path`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | /_links/source/href                                                                            |
| `links`                                                                                        | [models.WithdrawAccountRestrictedErrorLinks](../models/withdrawaccountrestrictederrorlinks.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            | {}                                                                                             |