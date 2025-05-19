# InitiateTransferForbiddenDwollaV1HalJSON

Forbidden


## Supported Types

### `models.InvalidAttemptToFacilitateFundsError`

```typescript
const value: models.InvalidAttemptToFacilitateFundsError = {
  code: "Forbidden",
  message:
    "Invalid Funds Flow: this operation requires the funds flow 'Facilitate' to be enabled",
};
```

### `models.InvalidAttemptToPayInFundsError`

```typescript
const value: models.InvalidAttemptToPayInFundsError = {
  code: "Forbidden",
  message:
    "Invalid Funds Flow: this operation requires the funds flow 'Receive' to be enabled",
};
```

### `models.InvalidAttemptToPayOutFundsError`

```typescript
const value: models.InvalidAttemptToPayOutFundsError = {
  code: "Forbidden",
  message:
    "Invalid Funds Flow: this operation requires the funds flow 'Send' to be enabled",
};
```

### `models.RtpAccountSettingNotEnabledError`

```typescript
const value: models.RtpAccountSettingNotEnabledError = {
  code: "Forbidden",
  message: "Real Time Payments not enabled for this account",
};
```

