# StatusInvalidErrorError

## Example Usage

```typescript
import { StatusInvalidErrorError } from "dwolla/models";

let value: StatusInvalidErrorError = {
  code: "Invalid",
  message: "Status invalid.",
  path: "/status",
  links: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `code`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | Invalid                                                                |
| `message`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | Status invalid.                                                        |
| `path`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | /status                                                                |
| `links`                                                                | [models.StatusInvalidErrorLinks](../models/statusinvaliderrorlinks.md) | :heavy_minus_sign:                                                     | N/A                                                                    | {}                                                                     |