# CreateCustomerFundingSource

Parameters for creating customer funding sources using different methods:
- Bank Account: Traditional method using routing/account numbers
- Exchange: Using IAV through exchange partners (Plaid, MX, etc.)
- Virtual Account: Creating Virtual Account Numbers (VANs)
- Card: Creating debit card funding sources using tokenized card data



## Supported Types

### `models.CreateCustomerBankFundingSourceWithAccountNumbers`

```typescript
const value: models.CreateCustomerBankFundingSourceWithAccountNumbers = {
  routingNumber: "222222226",
  accountNumber: "123456789",
  bankAccountType: "checking",
  name: "Jane Doe's Checking",
  verified: false,
  links: {
    onDemandAuthorization: {
      href:
        "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
    },
  },
};
```

### `models.CreateCustomerBankFundingSourceWithPlaid`

```typescript
const value: models.CreateCustomerBankFundingSourceWithPlaid = {
  plaidToken: "processor-sandbox-plaidauth-123456",
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

### `models.CreateCustomerVirtualAccountFundingSource`

```typescript
const value: models.CreateCustomerVirtualAccountFundingSource = {
  name: "My First VAN",
  type: "virtual",
  bankAccountType: "checking",
};
```

### `models.CreateCustomerCardFundingSource`

```typescript
const value: models.CreateCustomerCardFundingSource = {
  cardToken: "src_abc123_test_token_xyz789",
  name: "My Visa Debit Card",
  cardDetails: {
    billingAddress: {
      address1: "123 Main St",
      address2: "Apt 4B",
      address3: "Unit 101",
      city: "Dallas",
      stateProvinceRegion: "TX",
      country: "US",
      postalCode: "76034",
    },
  },
};
```

