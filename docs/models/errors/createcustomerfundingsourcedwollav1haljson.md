# CreateCustomerFundingSourceDwollaV1HalJSON

validation error


## Supported Types

### `errors.InactiveExchangeError`

```typescript
const value: errors.InactiveExchangeError = {
  code: "InactiveExchange",
  message: "The Exchange was removed or disabled.",
};
```

### `errors.InvalidExchangeTokenErrorError`

```typescript
const value: errors.InvalidExchangeTokenErrorError = {
  code: "InvalidExchangeToken",
  message: "The exchange token is not valid to perform this operation.",
};
```

### `errors.DuplicateFundingSourceError`

```typescript
const value: errors.DuplicateFundingSourceError = {
  code: "ValidationError",
  message:
    "Duplicate funding source or validation error. Authorization already associated to a funding source.",
};
```

