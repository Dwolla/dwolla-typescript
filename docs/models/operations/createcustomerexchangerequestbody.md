# CreateCustomerExchangeRequestBody


## Supported Types

### `models.CreateFinicitySecureExchange`

```typescript
const value: models.CreateFinicitySecureExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
  finicity: {
    profile: 3,
    version: "1",
    receiptId: "cr_4N47ou7SlppuIxq0ZUtACh10vYcloY",
    receiptVersion: "1",
    customerId: "5454874858510164117",
    partnerId: 2445583946651,
    products: [
      {
        product: "moneyTransferDetails",
        accountId: "1015199035827334916",
        accessPeriod: {
          type: "timeframe",
          startTime: new RFCDate("2022-07-06"),
          endTime: new Date("2022-08-16T06:06:20Z"),
        },
      },
    ],
    timestamp: new Date("2022-07-11T06:06:23Z"),
  },
};
```

### `models.CreateTokenBasedExchange`

```typescript
const value: models.CreateTokenBasedExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
  token: "sandbox-token-abc123",
};
```

### `models.CreateMXOpenBankingExchange`

```typescript
const value: models.CreateMXOpenBankingExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/bca8d065-49a5-475b-a6b4-509bc8504d22",
    },
  },
  mx: {
    availableConnectionToken:
      "eyJhY2NvdW50SWQiOiJBQ1QtMjAxY2FkM2MtYzc2Yi00N2M1LWI3Y2QtMTkxY2FhNzdlZWM5IiwibWVtYmVySWQiOiJNQlItZGNjZWY0ZWMtOGM4MC00NTlmLTlhMGItMTc1ZTA0OTJmZWIzIn0=",
  },
};
```

### `models.CreatePlaidOpenBankingExchange`

```typescript
const value: models.CreatePlaidOpenBankingExchange = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/f53ffb32-c84f-496a-9d9d-acd100d396ef",
    },
  },
  plaid: {
    publicToken: "public-production-d5456acb-01d5-4932-9783-e4c883cf1c0c",
  },
};
```

