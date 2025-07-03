# CustomersEmbedded

## Example Usage

```typescript
import { CustomersEmbedded } from "dwolla-typescript/models";

let value: CustomersEmbedded = {
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
      type: "unverified",
      status: "unverified",
      correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
      created: new Date("2022-10-07T16:46:13.023Z"),
    },
  ],
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `customers`         | *models.Customer*[] | :heavy_minus_sign:  | N/A                 |