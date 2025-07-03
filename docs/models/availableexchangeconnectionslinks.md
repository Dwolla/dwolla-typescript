# AvailableExchangeConnectionsLinks

## Example Usage

```typescript
import { AvailableExchangeConnectionsLinks } from "dwolla-typescript/models";

let value: AvailableExchangeConnectionsLinks = {
  self: {
    href:
      "https://api.dwolla.com/customers/1b54c81a-261f-4779-bb57-9405e6e00694/available-exchange-connections",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "customer",
  },
  customers: {
    href:
      "https://api.dwolla.com/customers/1b54c81a-261f-4779-bb57-9405e6e00694",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "customer",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [models.AvailableExchangeConnectionsSelf](../models/availableexchangeconnectionsself.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customers`                                                                                        | [models.AvailableExchangeConnectionsCustomers](../models/availableexchangeconnectionscustomers.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |