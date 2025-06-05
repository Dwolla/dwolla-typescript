# InitiateOrVerifyMicroDepositsRequestBody

Optional request body for verifying micro-deposits.
- If omitted: Endpoint will initiate micro-deposits
- If provided: Must contain micro-deposit amounts for verification



## Supported Types

### `operations.InitiateMicroDeposits`

```typescript
const value: operations.InitiateMicroDeposits = {};
```

### `models.VerifyMicroDeposits`

```typescript
const value: models.VerifyMicroDeposits = {
  amount1: {
    value: "0.02",
    currency: "USD",
  },
  amount2: {
    value: "0.03",
    currency: "USD",
  },
};
```

