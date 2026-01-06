# InvalidCardTokenErrorError

## Example Usage

```typescript
import { InvalidCardTokenErrorError } from "dwolla/models";

let value: InvalidCardTokenErrorError = {
  code: "Invalid",
  message: "The card data is invalid.",
  path: "/cardToken",
  links: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | Invalid                                                                      |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | The card data is invalid.                                                    |
| `path`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | /cardToken                                                                   |
| `links`                                                                      | [models.InvalidCardTokenErrorLinks](../models/invalidcardtokenerrorlinks.md) | :heavy_minus_sign:                                                           | N/A                                                                          | {}                                                                           |