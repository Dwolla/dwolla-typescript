# SourceNotFoundErrorError

## Example Usage

```typescript
import { SourceNotFoundErrorError } from "dwolla-typescript";

let value: SourceNotFoundErrorError = {
  code: "Invalid",
  message: "Funding source not found.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `code`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Invalid                                                                  |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Funding source not found.                                                |
| `path`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | /_links/source/href                                                      |
| `links`                                                                  | [models.SourceNotFoundErrorLinks](../models/sourcenotfounderrorlinks.md) | :heavy_minus_sign:                                                       | N/A                                                                      | {}                                                                       |