# UpdateRequestBody

Parameters for updating a Customer


## Supported Types

### `models.DeactivateCustomer`

```typescript
const value: models.DeactivateCustomer = {
  status: "deactivated",
};
```

### `models.ReactivateCustomer`

```typescript
const value: models.ReactivateCustomer = {
  status: "reactivated",
};
```

### `models.SuspendCustomer`

```typescript
const value: models.SuspendCustomer = {
  status: "suspended",
};
```

### `models.UpdateUnverifiedAndReceiveOnly`

```typescript
const value: models.UpdateUnverifiedAndReceiveOnly = {
  firstName: "John",
  lastName: "Doe",
  email: "accountAdmin@email.com",
  businessName: "Jane Corp",
};
```

### `models.UpdateVerifiedPersonal`

```typescript
const value: models.UpdateVerifiedPersonal = {
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  address1: "123 Main Street",
  address2: "XYZ Suite",
  city: "Des Moines",
  state: "IA",
  postalCode: "50309",
  phone: "5555555555",
};
```

### `models.UpdateVerifiedBusiness`

```typescript
const value: models.UpdateVerifiedBusiness = {
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  address1: "123 Main Street",
  address2: "XYZ Suite",
  city: "Des Moines",
  state: "IA",
  postalCode: "50309",
  phone: "5555555555",
  doingBusinessAs: "Jane's Electronics",
  website: "https://www.domain.com",
};
```

### `models.UpgradeToVerifiedPersonal`

```typescript
const value: models.UpgradeToVerifiedPersonal = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@email.net",
  ipAddress: "10.10.10.10",
  type: "personal",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  dateOfBirth: "1970-01-01",
  ssn: "1234",
};
```

### `models.UpgradeToVerifiedBusiness`

```typescript
const value: models.UpgradeToVerifiedBusiness = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  type: "business",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  controller: {
    firstName: "John",
    lastName: "Controller",
    title: "CEO",
    ssn: "6789",
    dateOfBirth: new RFCDate("1980-01-31"),
    address: {
      address1: "1749 18th st",
      address2: "apt 12",
      city: "Des Moines",
      stateProvinceRegion: "IA",
      postalCode: "50266",
      country: "US",
    },
  },
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessType: "llc",
  businessName: "Jane Corp",
  ein: "00-0000000",
};
```

### `models.UpgradeToVerifiedSoleProp`

```typescript
const value: models.UpgradeToVerifiedSoleProp = {
  firstName: "Business",
  lastName: "Owner",
  email: "solePropBusiness@email.com",
  ipAddress: "143.156.7.8",
  type: "business",
  dateOfBirth: new RFCDate("1980-01-31"),
  ssn: "6789",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessType: "soleProprietorship",
  businessName: "Jane Corp",
  ein: "00-0000000",
};
```

### `models.RetryVerifiedPersonal`

```typescript
const value: models.RetryVerifiedPersonal = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@email.net",
  ipAddress: "10.10.10.10",
  type: "personal",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  dateOfBirth: "1970-01-01",
  ssn: "1234",
};
```

### `models.RetryVerifiedBusiness`

```typescript
const value: models.RetryVerifiedBusiness = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  type: "business",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  controller: {
    firstName: "John",
    lastName: "Controller",
    title: "CEO",
    ssn: "6789",
    dateOfBirth: new RFCDate("1980-01-31"),
    address: {
      address1: "1749 18th st",
      address2: "apt 12",
      city: "Des Moines",
      stateProvinceRegion: "IA",
      postalCode: "50266",
      country: "US",
    },
  },
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessType: "llc",
  businessName: "Jane Corp",
  ein: "00-0000000",
};
```

### `models.RetryVerifiedSoleProp`

```typescript
const value: models.RetryVerifiedSoleProp = {
  firstName: "Business",
  lastName: "Owner",
  email: "solePropBusiness@email.com",
  ipAddress: "143.156.7.8",
  type: "business",
  dateOfBirth: new RFCDate("1980-01-31"),
  ssn: "6789",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessType: "soleProprietorship",
  businessName: "Jane Corp",
  ein: "00-0000000",
};
```

