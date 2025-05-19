# InitiateOrVerifyMicroDepositsRequestBody

Parameters for initiating or verifying micro-deposits.
- For initiating micro-deposits: No request body is required
- For verifying micro-deposits: Request body with micro-deposit amounts is required



## Supported Types

### `operations.RequestBody`

```typescript
const value: operations.RequestBody = {};
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

