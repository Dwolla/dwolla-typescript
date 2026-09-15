# CreateCustomerExchangeSessionRequestBody

Parameters for creating an exchange session


## Supported Types

### `models.CreateCustomerExchangeSessionWithRedirect`

```typescript
const value: models.CreateCustomerExchangeSessionWithRedirect = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
    redirectUrl: {
      href: "https://example.com/app123",
    },
  },
};
```

### `models.CreateCustomerExchangeSessionForWeb`

```typescript
const value: models.CreateCustomerExchangeSessionForWeb = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
};
```

### `models.CreateCustomerExchangeSessionForCard`

```typescript
const value: models.CreateCustomerExchangeSessionForCard = {
  links: {
    exchangePartner: {
      href:
        "https://api-sandbox.dwolla.com/exchange-partners/d652517d-9c02-4ea4-87af-2977e6cf3850",
    },
  },
  cardDetails: {
    firstName: "John",
    lastName: "Doe",
    accountNameInquiry: true,
  },
};
```

