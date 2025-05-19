# CancelTransferDwollaV1HalJSON

400 Bad Request


## Supported Types

### `models.BadRequestError`

```typescript
const value: models.BadRequestError = {
  code: "BadRequest",
  message: "The request body contains bad syntax or is incomplete.",
};
```

### `models.StatusInvalidError`

```typescript
const value: models.StatusInvalidError = {
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

### `models.StatusNotAllowedError`

```typescript
const value: models.StatusNotAllowedError = {
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

