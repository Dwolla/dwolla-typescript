# AvailableExchangeConnections

## Example Usage

```typescript
import { AvailableExchangeConnections } from "dwolla-typescript";

let value: AvailableExchangeConnections = {
  links: {
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
  },
  embedded: {
    availableExchangeConnections: [
      {
        availableConnectionToken:
          "eyJhY2NvdW50SWQiOiJBQ1QtMjAxY2FkM2MtYzc2Yi00N2M1LWI3Y2QtMTkxY2FhNzdlZWM5IiwibWVtYmVySWQiOiJNQlItZGNjZWY0ZWMtOGM4MC00NTlmLTlhMGItMTc1ZTA0OTJmZWIzIn0=",
        name: "XYZ Checking",
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `links`                                                                                          | [models.AvailableExchangeConnectionsLinks](../models/availableexchangeconnectionslinks.md)       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `embedded`                                                                                       | [models.AvailableExchangeConnectionsEmbedded](../models/availableexchangeconnectionsembedded.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |