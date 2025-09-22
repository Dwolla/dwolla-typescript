# ErrorT

## Example Usage

```typescript
import { ErrorT } from "dwolla/models/operations";

let value: ErrorT = {
  code: "Invalid",
  message: "Wrong amount(s).",
  path: "",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `code`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Invalid                                                                  |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Wrong amount(s).                                                         |
| `path`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `links`                                                                  | [operations.BadRequestLinks](../../models/operations/badrequestlinks.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |