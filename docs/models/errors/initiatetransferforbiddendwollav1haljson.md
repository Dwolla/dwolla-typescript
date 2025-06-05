# InitiateTransferForbiddenDwollaV1HalJSON

Forbidden


## Supported Types

### `errors.InvalidAttemptToFacilitateFundsError`

```typescript
const value: errors.InvalidAttemptToFacilitateFundsError = {
  code: "Forbidden",
  message:
    "Invalid Funds Flow: this operation requires the funds flow 'Facilitate' to be enabled",
};
```

### `errors.InvalidAttemptToPayInFundsError`

```typescript
const value: errors.InvalidAttemptToPayInFundsError = {
  code: "Forbidden",
  message:
    "Invalid Funds Flow: this operation requires the funds flow 'Receive' to be enabled",
};
```

### `errors.InvalidAttemptToPayOutFundsError`

```typescript
const value: errors.InvalidAttemptToPayOutFundsError = {
  code: "Forbidden",
  message:
    "Invalid Funds Flow: this operation requires the funds flow 'Send' to be enabled",
};
```

### `errors.RtpAccountSettingNotEnabledError`

```typescript
const value: errors.RtpAccountSettingNotEnabledError = {
  code: "Forbidden",
  message: "Real Time Payments not enabled for this account",
};
```

