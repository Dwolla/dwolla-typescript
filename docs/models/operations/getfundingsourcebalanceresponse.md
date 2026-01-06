# GetFundingSourceBalanceResponse

successful operation


## Supported Types

### `operations.DwollaBalanceResponse`

```typescript
const value: operations.DwollaBalanceResponse = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  balance: {
    value: "4616.87",
    currency: "USD",
  },
  total: {
    value: "4616.87",
    currency: "USD",
  },
  lastUpdated: "2017-04-18T15:20:25.880Z",
};
```

### `operations.BankBalanceResponse`

```typescript
const value: operations.BankBalanceResponse = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/funding-sources/42f48a64-2a9b-40df-9777-603ed2fe2764/balance",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "balance",
    },
    fundingSource: {
      href:
        "https://api.dwolla.com/funding-sources/42f48a64-2a9b-40df-9777-603ed2fe2764",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "funding-source",
    },
  },
  available: {
    value: "542.00",
    currency: "USD",
  },
  closing: {
    value: "542.00",
    currency: "USD",
  },
  lastUpdated: "2024-09-09T16:39:14.219Z",
};
```

### `operations.SettlementAccountBalanceResponse`

```typescript
const value: operations.SettlementAccountBalanceResponse = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/funding-sources/12345678-1234-1234-1234-123456789012/balance",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "balance",
    },
    fundingSource: {
      href:
        "https://api.dwolla.com/funding-sources/12345678-1234-1234-1234-123456789012",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "funding-source",
    },
  },
  available: {
    value: "3209.55",
    currency: "USD",
  },
};
```

