# Alerts

A page of alerts, newest first.

## Example Usage

```typescript
import { Alerts } from "dwolla/models";

let value: Alerts = {
  links: {
    self: {
      href: "https://api.dwolla.com/alerts",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "alert",
    },
    next: {
      href:
        "https://api.dwolla.com/alerts?limit=25&cursor=aZ3kQ9vX7pLmN2rTb8WcYe4H",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "alert",
    },
    prev: {
      href:
        "https://api.dwolla.com/alerts?limit=25&cursor=Jq5nR1sU8wF0tGh6KdM3xVyP",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "alert",
    },
  },
  embedded: {
    alerts: [
      {
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
      },
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `links`                                              | [models.AlertsLinks](../models/alertslinks.md)       | :heavy_check_mark:                                   | N/A                                                  |
| `embedded`                                           | [models.AlertsEmbedded](../models/alertsembedded.md) | :heavy_check_mark:                                   | N/A                                                  |