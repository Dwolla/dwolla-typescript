# Alert

A notification about activity on your account that may need your attention.

## Example Usage

```typescript
import { Alert } from "dwolla/models";

let value: Alert = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/alerts/d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "alert",
    },
    customer: {
      href:
        "https://api.dwolla.com/customers/b0e1c5a6-2f3d-4e7a-8c9b-1d2e3f4a5b6c",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "customer",
    },
    transfers: {
      href:
        "https://api.dwolla.com/customers/b0e1c5a6-2f3d-4e7a-8c9b-1d2e3f4a5b6c/transfers",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "transfer",
    },
  },
  id: "d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",
  type: "unusual-transfer-activity",
  status: "open",
  description:
    "Unusual transfer activity was detected for one of your customers.",
  actionRequired: {
    description:
      "Your feedback is required to complete this customer's review. Please review the activity and email risk@dwolla.com to confirm the appropriate action.\n\nApprove Transfers: Activity is expected.\nSuspend Customer: Activity is not expected.\n\nPlease include the customer ID and provide an explanation for the proposed action. We will reach out if we require more information.",
  },
  created: new Date("2026-10-14T16:32:08.000Z"),
  lastUpdated: new Date("2026-10-14T16:32:08.000Z"),
  resolved: new Date("2026-10-16T09:12:44.000Z"),
  unusualTransferActivity: {
    transferCount: 12,
    totalAmount: {
      value: "48250.00",
      currency: "USD",
    },
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                   | [models.AlertLinks](../models/alertlinks.md)                                                                                                              | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |                                                                                                                                                           |
| `id`                                                                                                                                                      | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The alert's unique identifier.                                                                                                                            | d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42                                                                                                                      |
| `type`                                                                                                                                                    | [models.AlertType](../models/alerttype.md)                                                                                                                | :heavy_check_mark:                                                                                                                                        | The kind of alert. Currently the only value is `unusual-transfer-activity`. More types may be added in the future, so handle values you don't recognize.<br/> | unusual-transfer-activity                                                                                                                                 |
| `status`                                                                                                                                                  | [models.AlertStatus](../models/alertstatus.md)                                                                                                            | :heavy_check_mark:                                                                                                                                        | Whether the alert is still `open` or has been `resolved`.                                                                                                 | open                                                                                                                                                      |
| `description`                                                                                                                                             | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | A human-readable description of the alert.                                                                                                                | Unusual transfer activity was detected for one of your customers.                                                                                         |
| `actionRequired`                                                                                                                                          | [models.ActionRequired](../models/actionrequired.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                        | What you need to do to address the alert. Present only while action is required from you. More members may be added to this object in the future.         |                                                                                                                                                           |
| `created`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                             | :heavy_check_mark:                                                                                                                                        | When the alert was created.                                                                                                                               | 2026-10-14T16:32:08.000Z                                                                                                                                  |
| `lastUpdated`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                             | :heavy_check_mark:                                                                                                                                        | When the alert last changed.                                                                                                                              | 2026-10-14T16:32:08.000Z                                                                                                                                  |
| `resolved`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                             | :heavy_minus_sign:                                                                                                                                        | When the alert was resolved. Omitted while the alert is unresolved.                                                                                       | 2026-10-16T09:12:44.000Z                                                                                                                                  |
| `unusualTransferActivity`                                                                                                                                 | [models.UnusualTransferActivity](../models/unusualtransferactivity.md)                                                                                    | :heavy_minus_sign:                                                                                                                                        | Details of the transfer activity that triggered an `unusual-transfer-activity` alert. Omitted for alerts without these details.                           |                                                                                                                                                           |