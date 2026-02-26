# InvalidTokenErrorError

## Example Usage

```typescript
import { InvalidTokenErrorError } from "dwolla/models";

let value: InvalidTokenErrorError = {
  code: "Invalid",
  message: "The card data is invalid.",
  path: "/token",
  links: {},
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `code`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | Invalid                                                              |
| `message`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | The card data is invalid.                                            |
| `path`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | /token                                                               |
| `links`                                                              | [models.InvalidTokenErrorLinks](../models/invalidtokenerrorlinks.md) | :heavy_minus_sign:                                                   | N/A                                                                  | {}                                                                   |