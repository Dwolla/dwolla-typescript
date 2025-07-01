# CreateCustomerFundingSourceRequestBody

Parameters for creating a funding source


## Supported Types

### `models.CreateCustomerBankFundingSource`

```typescript
const value: models.CreateCustomerBankFundingSource = {
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

### `models.CreateCustomerExchangeFundingSource`

```typescript
const value: models.CreateCustomerExchangeFundingSource = {
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

### `models.CreateCustomerVirtualFundingSource`

```typescript
const value: models.CreateCustomerVirtualFundingSource = {
  name: "My First VAN",
  type: "virtual",
  bankAccountType: "checking",
};
```

