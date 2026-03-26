# SandboxSimulationRequest

Bank transfer processing (omit body or `{}`), VAN transfer simulation (`type` virtual + transfers), or
verification directive simulation (`type` customer-verification, customer link, and errorCode). Typed bodies
are mutually exclusive; use only an omitted body or `{}` for bank processing.



## Supported Types

### `models.SandboxSimulationVirtualAccountTransfersRequest`

```typescript
const value: models.SandboxSimulationVirtualAccountTransfersRequest = {
  type: "virtual",
  transfers: [],
};
```

### `models.SandboxSimulationCustomerVerificationRequest`

```typescript
const value: models.SandboxSimulationCustomerVerificationRequest = {
  type: "customer-verification",
  links: {
    customer: {
      href:
        "https://api-sandbox.dwolla.com/customers/00000000-0000-0000-0000-000000000000",
    },
  },
  errorCode: "AddressNotAssociatedWithBusiness",
};
```

### `models.SandboxSimulationBankProcessingRequest`

```typescript
const value: models.SandboxSimulationBankProcessingRequest = {};
```

