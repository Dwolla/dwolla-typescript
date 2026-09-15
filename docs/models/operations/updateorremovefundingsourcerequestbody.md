# UpdateOrRemoveFundingSourceRequestBody

Parameters to update a customer funding source


## Supported Types

### `models.UpdateUnverifiedBank`

```typescript
const value: models.UpdateUnverifiedBank = {
  routingNumber: "222222226",
  accountNumber: "123456789",
  bankAccountType: "checking",
  name: "Jane Doe’s Checking",
};
```

### `models.UpdateVerifiedBank`

```typescript
const value: models.UpdateVerifiedBank = {
  name: "Jane Doe’s Checking",
};
```

### `models.UpdateCardFundingSource`

```typescript
const value: models.UpdateCardFundingSource = {
  name: "My Visa Debit Card",
  cardDetails: {
    firstName: "Jane",
    lastName: "Doe",
    billingAddress: {
      address1: "123 Main St",
      address2: "Apt 4B",
      address3: "Unit 101",
      city: "Dallas",
      stateProvinceRegion: "TX",
      country: "US",
      postalCode: "76034",
    },
    dateOfBirth: new RFCDate("1990-01-15"),
    countryOfBirth: "US",
    identification: {
      type: "passport",
      number: "P123456",
      country: "GB",
    },
  },
};
```

### `models.RemoveBank`

```typescript
const value: models.RemoveBank = {
  removed: true,
};
```

