# SimulateBankTransferProcessingResponse

Success. **Bank transfer processing** returns HAL with `total`. **Customer verification directives**
return HAL `_links.self` and `errorCode` (retrieve the Customer for `_embedded.errors`).



## Supported Types

### `models.SandboxSimulationBankProcessingResponse`

```typescript
const value: models.SandboxSimulationBankProcessingResponse = {
  total: 8,
  links: {
    self: {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
};
```

### `models.SandboxSimulationCustomerVerificationResponse`

```typescript
const value: models.SandboxSimulationCustomerVerificationResponse = {
  links: {
    self: {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  errorCode: "AddressNotAssociatedWithBusiness",
};
```

