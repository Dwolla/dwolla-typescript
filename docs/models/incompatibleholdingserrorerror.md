# IncompatibleHoldingsErrorError

## Example Usage

```typescript
import { IncompatibleHoldingsErrorError } from "dwolla/models";

let value: IncompatibleHoldingsErrorError = {
  code: "NotAllowed",
  message: "Receiver cannot receive from sender.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `code`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | NotAllowed                                                                           |
| `message`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | Receiver cannot receive from sender.                                                 |
| `path`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | /_links/destination/href                                                             |
| `links`                                                                              | [models.IncompatibleHoldingsErrorLinks](../models/incompatibleholdingserrorlinks.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  | {}                                                                                   |