# DepositAccountRestrictedErrorError

## Example Usage

```typescript
import { DepositAccountRestrictedErrorError } from "dwolla-typescript";

let value: DepositAccountRestrictedErrorError = {
  code: "Restricted",
  message: "Account is restricted.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `code`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | Restricted                                                                                   |
| `message`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | Account is restricted.                                                                       |
| `path`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | /_links/destination/href                                                                     |
| `links`                                                                                      | [models.DepositAccountRestrictedErrorLinks](../models/depositaccountrestrictederrorlinks.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          | {}                                                                                           |