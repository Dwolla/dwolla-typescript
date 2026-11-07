# AlertsEmbedded

## Example Usage

```typescript
import { AlertsEmbedded } from "dwolla/models";

let value: AlertsEmbedded = {
  alerts: [],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `alerts`                                                                                  | [models.Alert](../models/alert.md)[]                                                      | :heavy_check_mark:                                                                        | Up to `limit` alerts (25 by default), newest first. Empty when the account has no alerts. |