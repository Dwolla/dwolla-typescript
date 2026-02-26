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

### `errors.UnsupportedCardCountryError`

```typescript
const value: errors.UnsupportedCardCountryError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [],
  },
};
```

### `errors.InvalidTokenError`

```typescript
const value: errors.InvalidTokenError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "The card data is invalid.",
        path: "/token",
        links: {},
      },
    ],
  },
};
```

### `errors.MaximumCardsExceededError`

```typescript
const value: errors.MaximumCardsExceededError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [],
  },
};
```

### `errors.CardMissingRequiredFieldsError`

```typescript
const value: errors.CardMissingRequiredFieldsError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [],
  },
};
```

