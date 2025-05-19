# ForbiddenError

Error response schema for 403 Forbidden

## Example Usage

```typescript
import { ForbiddenError } from "dwolla-typescript";

let value: ForbiddenError = {
  code: "Forbidden",
  message: "The supplied credentials are not authorized for this resource.",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `code`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | Forbidden                                                      |
| `message`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | The supplied credentials are not authorized for this resource. |