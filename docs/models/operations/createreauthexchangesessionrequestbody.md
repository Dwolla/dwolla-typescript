# CreateReAuthExchangeSessionRequestBody

Request body containing the redirect URL.
Required for:
- Visa exchange sessions
- Plaid mobile sessions
Not required for:
- Plaid web sessions



## Supported Types

### `models.CreateReAuthExchangeSessionForWeb`

```typescript
const value: models.CreateReAuthExchangeSessionForWeb = {};
```

### `models.CreateReAuthExchangeSessionWithRedirect`

```typescript
const value: models.CreateReAuthExchangeSessionWithRedirect = {
  links: {
    redirectUrl: {
      href:
        "{\"description\":\"Visa example\",\"value\":\"https://www.yourdomain.com/iav-callback\"}",
    },
  },
};
```

