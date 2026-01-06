# UnsupportedCardCountryErrorError

## Example Usage

```typescript
import { UnsupportedCardCountryErrorError } from "dwolla/models";

let value: UnsupportedCardCountryErrorError = {
  code: "Invalid",
  message: "The card's country is not supported.",
  path: "/cardToken",
  links: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `code`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | Invalid                                                                                  |
| `message`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | The card's country is not supported.                                                     |
| `path`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | /cardToken                                                                               |
| `links`                                                                                  | [models.UnsupportedCardCountryErrorLinks](../models/unsupportedcardcountryerrorlinks.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      | {}                                                                                       |