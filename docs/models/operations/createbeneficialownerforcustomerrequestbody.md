# CreateBeneficialOwnerForCustomerRequestBody

Parameters for creating a beneficial owner


## Supported Types

### `models.CreateUSBeneficialOwner`

```typescript
const value: models.CreateUSBeneficialOwner = {
  firstName: "Joe",
  lastName: "Deckow",
  dateOfBirth: "1991-04-28",
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

### `models.CreateInternationalBeneficialOwner`

```typescript
const value: models.CreateInternationalBeneficialOwner = {
  firstName: "Josie",
  lastName: "Watsica",
  dateOfBirth: "1988-10-24",
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
    country: "Tonga",
  },
};
```

