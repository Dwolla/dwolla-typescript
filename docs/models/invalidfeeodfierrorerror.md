# InvalidFeeOdfiErrorError

## Example Usage

```typescript
import { InvalidFeeOdfiErrorError } from "dwolla-typescript/models";

let value: InvalidFeeOdfiErrorError = {
  code: "NotAllowed",
  message: "Transfer ineligible.",
  path: "/_links/failed-transfer/href",
  links: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `code`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | NotAllowed                                                               |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Transfer ineligible.                                                     |
| `path`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | /_links/failed-transfer/href                                             |
| `links`                                                                  | [models.InvalidFeeOdfiErrorLinks](../models/invalidfeeodfierrorlinks.md) | :heavy_minus_sign:                                                       | N/A                                                                      | {}                                                                       |