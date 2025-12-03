# CreateCustomerRequest

Parameters for customer to be created


## Supported Types

### `models.CreateReceiveOnlyUser`

```typescript
const value: models.CreateReceiveOnlyUser = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  type: "receive-only",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp llc",
};
```

### `models.CreateUnverifiedCustomer`

```typescript
const value: models.CreateUnverifiedCustomer = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  type: "unverified",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp llc",
};
```

### `models.CreateVerifiedPersonalCustomer`

```typescript
const value: models.CreateVerifiedPersonalCustomer = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  type: "personal",
  address1: "99-99 33rd St",
  address2: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  ssn: "1234",
  dateOfBirth: "1980-09-12",
};
```

### `models.CreateVerifiedSolePropCustomer`

```typescript
const value: models.CreateVerifiedSolePropCustomer = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  type: "business",
  address1: "99-99 33rd St",
  address2: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  ssn: "1234",
  dateOfBirth: "1980-09-12",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessName: "Jane Corp",
  doingBusinessAs: "Jane's Electronics",
  ein: "00-0000000",
  website: "https://www.domain.com",
  businessType: "soleProprietorship",
};
```

### `models.CreateVerifiedBusinessCustomerWithController`

```typescript
const value: models.CreateVerifiedBusinessCustomerWithController = {
  firstName: "Jane",
  lastName: "Business",
  email: "jane.business@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  type: "business",
  address1: "99-99 33rd St",
  address2: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessName: "Jane Corp",
  doingBusinessAs: "Jane's Electronics",
  ein: "00-0000000",
  website: "https://www.domain.com",
  controller: {
    firstName: "John",
    lastName: "Controller",
    title: "CEO",
    dateOfBirth: "1980-01-31",
    address: {
      address1: "462 Main Street",
      address2: "Suite 123",
      address3: "Unit 123",
      city: "Des Moines",
      postalCode: "50309",
      country: "USA",
      stateProvinceRegion: "IA",
    },
    ssn: "1234",
  },
  businessType: "llc",
};
```

### `models.CreateVerifiedBusinessCustomerWithInternationalController`

```typescript
const value: models.CreateVerifiedBusinessCustomerWithInternationalController =
  {
    firstName: "Jane",
    lastName: "Business",
    email: "jane.business@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    type: "business",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessName: "Jane Corp",
    doingBusinessAs: "Jane's Electronics",
    ein: "00-0000000",
    website: "https://www.domain.com",
    controller: {
      firstName: "John",
      lastName: "Controller",
      title: "CEO",
      dateOfBirth: "1980-01-31",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      passport: {
        number: "<value>",
        country: "South Sudan",
      },
    },
    businessType: "llc",
  };
```

