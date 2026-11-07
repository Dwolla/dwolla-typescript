# ListAlertsValidationErrorError

## Example Usage

```typescript
import { ListAlertsValidationErrorError } from "dwolla/models";

let value: ListAlertsValidationErrorError = {
  code: "Invalid",
  message: "Status must be one of: open, resolved.",
  path: "/status",
  links: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `code`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | Invalid                                                                              |
| `message`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | Status must be one of: open, resolved.                                               |
| `path`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | /status                                                                              |
| `links`                                                                              | [models.ListAlertsValidationErrorLinks](../models/listalertsvalidationerrorlinks.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  | {}                                                                                   |