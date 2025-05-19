# BadRequestSchema

## Example Usage

```typescript
import { BadRequestSchema } from "dwolla-typescript";

let value: BadRequestSchema = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    code: "ValidationError",
    message:
      "Validation error(s) present. See embedded errors list for more details.",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `code`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      | ValidationError                                                          |
| `message`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      | Validation error(s) present. See embedded errors list for more details.  |
| `embedded`                                                               | [models.BadRequestSchemaEmbedded](../models/badrequestschemaembedded.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |