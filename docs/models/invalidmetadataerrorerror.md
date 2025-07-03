# InvalidMetadataErrorError

## Example Usage

```typescript
import { InvalidMetadataErrorError } from "dwolla-typescript/models";

let value: InvalidMetadataErrorError = {
  code: "Invalid",
  message: "Invalid metadata.",
  path: "/metadata",
  links: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `code`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | Invalid                                                                    |
| `message`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | Invalid metadata.                                                          |
| `path`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | /metadata                                                                  |
| `links`                                                                    | [models.InvalidMetadataErrorLinks](../models/invalidmetadataerrorlinks.md) | :heavy_minus_sign:                                                         | N/A                                                                        | {}                                                                         |