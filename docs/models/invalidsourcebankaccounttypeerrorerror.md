# InvalidSourceBankAccountTypeErrorError

## Example Usage

```typescript
import { InvalidSourceBankAccountTypeErrorError } from "dwolla-typescript";

let value: InvalidSourceBankAccountTypeErrorError = {
  code: "Invalid",
  message: "Invalid bank account type",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | Invalid                                                                                              |
| `message`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | Invalid bank account type                                                                            |
| `path`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | /_links/source/href                                                                                  |
| `links`                                                                                              | [models.InvalidSourceBankAccountTypeErrorLinks](../models/invalidsourcebankaccounttypeerrorlinks.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | {}                                                                                                   |