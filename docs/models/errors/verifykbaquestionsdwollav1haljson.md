# VerifyKbaQuestionsDwollaV1HalJSON

403 Error


## Supported Types

### `models.ForbiddenError`

```typescript
const value: models.ForbiddenError = {
  code: "Forbidden",
  message: "The supplied credentials are not authorized for this resource.",
};
```

### `models.InvalidKbaSessionError`

```typescript
const value: models.InvalidKbaSessionError = {
  code: "InvalidResourceState",
  message: "The kba session is no longer valid.",
};
```

### `models.ExpiredKbaSessionError`

```typescript
const value: models.ExpiredKbaSessionError = {
  code: "InvalidResourceState",
  message: "The kba session has expired.",
};
```

