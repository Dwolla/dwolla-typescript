# ValidationErrorSchemaEmbedded

## Example Usage

```typescript
import { ValidationErrorSchemaEmbedded } from "dwolla-typescript/models";

let value: ValidationErrorSchemaEmbedded = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `code`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | ValidationError                                                         |
| `message`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | Validation error(s) present. See embedded errors list for more details. |