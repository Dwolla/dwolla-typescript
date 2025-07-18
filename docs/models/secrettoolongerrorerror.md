# SecretTooLongErrorError

## Example Usage

```typescript
import { SecretTooLongErrorError } from "dwolla/models";

let value: SecretTooLongErrorError = {
  code: "InvalidFormat",
  message: "Secret must be 128 or fewer characters.",
  path: "/secret",
  links: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `code`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | InvalidFormat                                                          |
| `message`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | Secret must be 128 or fewer characters.                                |
| `path`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | /secret                                                                |
| `links`                                                                | [models.SecretTooLongErrorLinks](../models/secrettoolongerrorlinks.md) | :heavy_minus_sign:                                                     | N/A                                                                    | {}                                                                     |