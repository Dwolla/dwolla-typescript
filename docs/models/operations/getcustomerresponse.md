# GetCustomerResponse

successful operation


## Supported Types

### `models.UnverifiedCustomer`

```typescript
const value: models.UnverifiedCustomer = {
  links: {},
  id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@mail.com",
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
  type: "unverified",
  status: "unverified",
  businessName: "Jane Corp llc",
};
```

### `models.ReceiveOnlyCustomer`

```typescript
const value: models.ReceiveOnlyCustomer = {
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
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
  type: "receive-only",
  status: "unverified",
  businessName: "Jane Corp llc",
};
```

### `models.VerifiedPersonalCustomer`

```typescript
const value: models.VerifiedPersonalCustomer = {
  links: {},
  id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@mail.com",
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
  type: "personal",
  status: "verified",
  address1: "123 Main Street",
  address2: "Ste 123",
  city: "Des Moines",
  state: "IA",
  postalCode: "50309",
};
```

### `models.VerifiedBusinessCustomer`

```typescript
const value: models.VerifiedBusinessCustomer = {
  links: {},
  id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@mail.com",
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
  type: "business",
  status: "verified",
  address1: "123 Main Street",
  address2: "Ste 123",
  city: "Des Moines",
  state: "IA",
  postalCode: "50309",
  phone: "555555555",
  website: "https://www.dwolla.com",
  businessName: "Jane Corp",
  doingBusinessAs: "Jane's Coffee and Sweets",
  businessType: "llc",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  controller: {
    firstName: "John",
    lastName: "Controller",
    title: "CEO",
    address: {
      address1: "462 Main Street",
      address2: "Suite 123",
      address3: "Unit 123",
      city: "Des Moines",
      postalCode: "50309",
      country: "USA",
      stateProvinceRegion: "IA",
    },
  },
};
```

