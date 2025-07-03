# InvalidUrlFormatErrorError

## Example Usage

```typescript
import { InvalidUrlFormatErrorError } from "dwolla-typescript/models";

let value: InvalidUrlFormatErrorError = {
  code: "InvalidFormat",
  message: "Url must be a valid url.",
  path: "/url",
  links: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | InvalidFormat                                                                |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | Url must be a valid url.                                                     |
| `path`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | /url                                                                         |
| `links`                                                                      | [models.InvalidUrlFormatErrorLinks](../models/invalidurlformaterrorlinks.md) | :heavy_minus_sign:                                                           | N/A                                                                          | {}                                                                           |