# UpdateBeneficialOwnerRequestBody

Parameters for updating a beneficial owner


## Supported Types

### `models.BeneficialOwnerWithSsn`

```typescript
const value: models.BeneficialOwnerWithSsn = {
  firstName: "Jalon",
  lastName: "Reichel",
  dateOfBirth: "1958-05-16",
  address: {
    address1: "462 Main Street",
    address2: "Suite 123",
    address3: "Unit 123",
    city: "Des Moines",
    postalCode: "50309",
    country: "USA",
    stateProvinceRegion: "IA",
  },
  ssn: "<value>",
};
```

### `models.BeneficialOwnerWithPassport`

```typescript
const value: models.BeneficialOwnerWithPassport = {
  firstName: "Therese",
  lastName: "Nitzsche",
  dateOfBirth: "1983-08-02",
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

