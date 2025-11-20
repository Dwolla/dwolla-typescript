# CreateAccountExchangeRequest

Parameters for creating an exchange


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

