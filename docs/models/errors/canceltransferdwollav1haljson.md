# CancelTransferDwollaV1HalJSON

400 Bad Request


## Supported Types

### `errors.BadRequestError`

```typescript
const value: errors.BadRequestError = {
  code: "BadRequest",
  message: "The request body contains bad syntax or is incomplete.",
};
```

### `errors.StatusInvalidError`

```typescript
const value: errors.StatusInvalidError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Status invalid.",
        path: "/status",
        links: {},
      },
    ],
  },
};
```

### `errors.StatusNotAllowedError`

```typescript
const value: errors.StatusNotAllowedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Status not allowed.",
        path: "/status",
        links: {},
      },
    ],
  },
};
```

