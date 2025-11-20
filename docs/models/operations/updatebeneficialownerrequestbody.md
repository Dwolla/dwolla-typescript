# UpdateBeneficialOwnerRequestBody

Parameters for updating a beneficial owner


## Supported Types

### `models.CreateUSBeneficialOwner`

```typescript
const value: models.CreateUSBeneficialOwner = {
  firstName: "John",
  lastName: "Doe",
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
  ssn: "123456789",
};
```

### `models.CreateInternationalBeneficialOwner`

```typescript
const value: models.CreateInternationalBeneficialOwner = {
  firstName: "Jane",
  lastName: "Smith",
  dateOfBirth: "1985-03-15",
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
};
```

