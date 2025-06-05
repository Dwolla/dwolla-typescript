# CreateWebhookSubscriptionDwollaV1HalJSON

Bad request


## Supported Types

### `errors.InvalidUrlFormatError`

```typescript
const value: errors.InvalidUrlFormatError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message: "Url must be a valid url.",
        path: "/url",
        links: {},
      },
    ],
  },
};
```

### `errors.SecretTooLongError`

```typescript
const value: errors.SecretTooLongError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message: "Secret must be 128 or fewer characters.",
        path: "/secret",
        links: {},
      },
    ],
  },
};
```

### `errors.MaxSubscriptionsReachedError`

```typescript
const value: errors.MaxSubscriptionsReachedError = {
  code: "MaxNumberOfResources",
  message: "The maximum number of subscriptions has been reached.",
};
```

