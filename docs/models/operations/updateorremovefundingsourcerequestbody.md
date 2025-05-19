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

### `models.RemoveBank`

```typescript
const value: models.RemoveBank = {
  removed: true,
};
```

