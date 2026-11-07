# AlertLinks

## Example Usage

```typescript
import { AlertLinks } from "dwolla/models";

let value: AlertLinks = {
  self: {
    href: "https://api.dwolla.com/alerts/d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",
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
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                                                                                   | [models.AlertSelfHalLink](../models/alertselfhallink.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The alert's resource URI.                                                                                                                                                | {<br/>"href": "https://api.dwolla.com/alerts/d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",<br/>"type": "application/vnd.dwolla.v1.hal+json",<br/>"resource-type": "alert"<br/>} |
| `customer`                                                                                                                                                               | [models.CustomerHalLink](../models/customerhallink.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                       | The Customer the alert is about. Present only when the alert is related to a Customer.                                                                                   | {<br/>"href": "https://api.dwolla.com/customers/b0e1c5a6-2f3d-4e7a-8c9b-1d2e3f4a5b6c",<br/>"type": "application/vnd.dwolla.v1.hal+json",<br/>"resource-type": "customer"<br/>} |
| `transfers`                                                                                                                                                              | [models.TransfersHalLink](../models/transfershallink.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The Customer's transfers. Present only when the alert is related to a Customer's transfers.                                                                              | {<br/>"href": "https://api.dwolla.com/customers/b0e1c5a6-2f3d-4e7a-8c9b-1d2e3f4a5b6c/transfers",<br/>"type": "application/vnd.dwolla.v1.hal+json",<br/>"resource-type": "transfer"<br/>} |