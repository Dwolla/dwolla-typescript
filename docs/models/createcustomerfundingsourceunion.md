# CreateCustomerFundingSourceUnion


## Supported Types

### `models.CreateCustomerFundingSource1`

```typescript
const value: models.CreateCustomerFundingSource1 = {
  routingNumber: "222222226",
  accountNumber: "123456789",
  bankAccountType: "checking",
  name: "Jane Doe's Checking",
  links: {
    onDemandAuthorization: {
      href:
        "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
    },
  },
};
```

### `models.CreateCustomerFundingSource2`

```typescript
const value: models.CreateCustomerFundingSource2 = {
  links: {
    exchange: {
      href:
        "https://api-sandbox.dwolla.com/exchanges/6bc9109a-04fd-49b6-ace6-ca06fd282d65",
    },
    onDemandAuthorization: {
      href:
        "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
    },
  },
  bankAccountType: "checking",
  name: "Jane Doe's Checking",
};
```

### `models.CreateCustomerFundingSourceChecking`

```typescript
const value: models.CreateCustomerFundingSourceChecking = {
  name: "My First VAN",
  type: "virtual",
  bankAccountType: "checking",
};
```

