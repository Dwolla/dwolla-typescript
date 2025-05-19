# CreateCustomerRequest

Parameters for customer to be created


## Supported Types

### `models.CreateReceiveOnlyRequestBody`

```typescript
const value: models.CreateReceiveOnlyRequestBody = {
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

### `models.CreateUnverifiedCustomerRequestBody`

```typescript
const value: models.CreateUnverifiedCustomerRequestBody = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp llc",
};
```

### `models.CreateVerifiedPersonalRequestBody`

```typescript
const value: models.CreateVerifiedPersonalRequestBody = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp llc",
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

### `models.CreateVerifiedSolePropRequestBody`

```typescript
const value: models.CreateVerifiedSolePropRequestBody = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp",
  type: "business",
  address1: "99-99 33rd St",
  address2: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  ssn: "1234",
  dateOfBirth: "1980-09-12",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  doingBusinessAs: "Jane's Electronics",
  ein: "00-0000000",
  website: "https://www.domain.com",
  businessType: "soleProprietorship",
};
```

### `models.CreateVerifiedBusinessRequestBody`

```typescript
const value: models.CreateVerifiedBusinessRequestBody = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp",
  type: "business",
  address1: "99-99 33rd St",
  address2: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  ssn: "1234",
  dateOfBirth: "1980-09-12",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  doingBusinessAs: "Jane's Electronics",
  ein: "00-0000000",
  website: "https://www.domain.com",
  controller: {
    firstName: "John",
    lastName: "Controller",
    title: "CEO",
    dateOfBirth: new RFCDate("1980-01-31"),
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

