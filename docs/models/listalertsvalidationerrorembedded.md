# ListAlertsValidationErrorEmbedded

## Example Usage

```typescript
import { ListAlertsValidationErrorEmbedded } from "dwolla/models";

let value: ListAlertsValidationErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Status must be one of: open, resolved.",
      path: "/status",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `errors`                                                                               | [models.ListAlertsValidationErrorError](../models/listalertsvalidationerrorerror.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |