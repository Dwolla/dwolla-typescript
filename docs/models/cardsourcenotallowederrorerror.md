# CardSourceNotAllowedErrorError

## Example Usage

```typescript
import { CardSourceNotAllowedErrorError } from "dwolla/models";

let value: CardSourceNotAllowedErrorError = {
  code: "NotAllowed",
  message: "Cards cannot be used as a source for transfers.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `code`                                                                               | [models.Code](../models/code.md)                                                     | :heavy_check_mark:                                                                   | N/A                                                                                  | NotAllowed                                                                           |
| `message`                                                                            | [models.Message](../models/message.md)                                               | :heavy_check_mark:                                                                   | N/A                                                                                  | Cards cannot be used as a source for transfers.                                      |
| `path`                                                                               | [models.Path](../models/path.md)                                                     | :heavy_check_mark:                                                                   | N/A                                                                                  | /_links/source/href                                                                  |
| `links`                                                                              | [models.CardSourceNotAllowedErrorLinks](../models/cardsourcenotallowederrorlinks.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  | {}                                                                                   |