# ListAlertsDwollaV1HalJSON

Bad Request


## Supported Types

### `errors.ListAlertsInvalidQueryParameterError`

```typescript
const value: errors.ListAlertsInvalidQueryParameterError = {
  code: "InvalidQueryParameter",
  message: "Invalid cursor.",
};
```

### `errors.ListAlertsValidationError`

```typescript
const value: errors.ListAlertsValidationError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Status must be one of: open, resolved.",
        path: "/status",
        links: {},
      },
    ],
  },
};
```

