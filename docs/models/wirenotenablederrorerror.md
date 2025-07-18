# WireNotEnabledErrorError

## Example Usage

```typescript
import { WireNotEnabledErrorError } from "dwolla/models";

let value: WireNotEnabledErrorError = {
  code: "NotAllowed",
  message: "Wire transfers are currently not enabled.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `code`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | NotAllowed                                                               |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Wire transfers are currently not enabled.                                |
| `path`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | /_links/source/href                                                      |
| `links`                                                                  | [models.WireNotEnabledErrorLinks](../models/wirenotenablederrorlinks.md) | :heavy_minus_sign:                                                       | N/A                                                                      | {}                                                                       |