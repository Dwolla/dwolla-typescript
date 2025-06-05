# ControllerUnion


## Supported Types

### `models.ControllerWithSsn`

```typescript
const value: models.ControllerWithSsn = {
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
};
```

### `models.ControllerWithPassport`

```typescript
const value: models.ControllerWithPassport = {
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
  passport: {
    number: "<value>",
    country: "Portugal",
  },
};
```

