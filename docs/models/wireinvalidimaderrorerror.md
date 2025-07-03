# WireInvalidImadErrorError

## Example Usage

```typescript
import { WireInvalidImadErrorError } from "dwolla-typescript/models";

let value: WireInvalidImadErrorError = {
  code: "Invalid",
  message: "Missing or invalid IMAD.",
  path: "/imad",
  links: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `code`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | Invalid                                                                    |
| `message`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | Missing or invalid IMAD.                                                   |
| `path`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | /imad                                                                      |
| `links`                                                                    | [models.WireInvalidImadErrorLinks](../models/wireinvalidimaderrorlinks.md) | :heavy_minus_sign:                                                         | N/A                                                                        | {}                                                                         |