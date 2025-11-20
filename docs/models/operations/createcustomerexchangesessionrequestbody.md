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

