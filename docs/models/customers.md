# Customers

## Example Usage

```typescript
import { Customers } from "dwolla/models";

let value: Customers = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
    customers: [
      {
        links: {
          "key": {
            href: "https://api.dwolla.com",
            type: "application/vnd.dwolla.v1.hal+json",
            resourceType: "resource-type",
          },
        },
        id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@mail.com",
        type: "personal",
        status: "verified",
        correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
        created: new Date("2022-10-07T16:46:13.023Z"),
        address1: "123 Main Street",
        address2: "Ste 123",
        city: "Des Moines",
        state: "IA",
        postalCode: "50309",
      },
    ],
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `links`                                                    | Record<string, [models.HalLink](../models/hallink.md)>     | :heavy_minus_sign:                                         | N/A                                                        |
| `embedded`                                                 | [models.CustomersEmbedded](../models/customersembedded.md) | :heavy_minus_sign:                                         | N/A                                                        |