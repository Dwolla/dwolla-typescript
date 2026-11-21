# UpdateAlertDwollaV1HalJSON

Bad Request


## Supported Types

### `errors.UpdateAlertStatusInvalidError`

```typescript
const value: errors.UpdateAlertStatusInvalidError = {
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

### `errors.UpdateAlertStatusNotAllowedError`

```typescript
const value: errors.UpdateAlertStatusNotAllowedError = {
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

