# UpdateAlertStatusInvalidErrorEmbedded

## Example Usage

```typescript
import { UpdateAlertStatusInvalidErrorEmbedded } from "dwolla/models";

let value: UpdateAlertStatusInvalidErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Status invalid.",
      path: "/status",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `errors`                                                                                       | [models.UpdateAlertStatusInvalidErrorError](../models/updatealertstatusinvaliderrorerror.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |