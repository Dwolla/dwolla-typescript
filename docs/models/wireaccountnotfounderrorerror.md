# WireAccountNotFoundErrorError

## Example Usage

```typescript
import { WireAccountNotFoundErrorError } from "dwolla-typescript";

let value: WireAccountNotFoundErrorError = {
  code: "NotFound",
  message: "Account or customer invalid.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `code`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | NotFound                                                                           |
| `message`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | Account or customer invalid.                                                       |
| `path`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | /_links/destination/href                                                           |
| `links`                                                                            | [models.WireAccountNotFoundErrorLinks](../models/wireaccountnotfounderrorlinks.md) | :heavy_minus_sign:                                                                 | N/A                                                                                | {}                                                                                 |