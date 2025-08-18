# VerifyKbaQuestionsDwollaV1HalJSON

403 Error


## Supported Types

### `errors.ForbiddenError`

```typescript
const value: errors.ForbiddenError = {
  code: "Forbidden",
  message: "The supplied credentials are not authorized for this resource.",
};
```

### `errors.InvalidKbaSessionError`

```typescript
const value: errors.InvalidKbaSessionError = {
  code: "InvalidResourceState",
  message: "The kba session is no longer valid.",
};
```

### `errors.ExpiredKbaSessionError`

```typescript
const value: errors.ExpiredKbaSessionError = {
  code: "InvalidResourceState",
  message: "The kba session has expired.",
};
```

