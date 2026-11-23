# UpdateAlert

Parameters to update an alert. Currently, the only supported update is resolving the alert.

## Example Usage

```typescript
import { UpdateAlert } from "dwolla/models";

let value: UpdateAlert = {
  status: "resolved",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `status`                                    | *"resolved"*                                | :heavy_check_mark:                          | The alert's new status. Must be `resolved`. | resolved                                    |