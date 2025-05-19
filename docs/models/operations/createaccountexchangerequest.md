# CreateAccountExchangeRequest

Parameters for creating an exchange


## Supported Types

### `models.FinicitySecureExchangeCreateExchangeRequestBody`

```typescript
const value: models.FinicitySecureExchangeCreateExchangeRequestBody = {
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
    customerId: "5454874858510164000",
    partnerId: 2445583946651,
    products: [
      {
        product: "moneyTransferDetails",
        accountId: "1015199035827334900",
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

### `models.MXSecureExchangeCreateExchangeRequestBody`

```typescript
const value: models.MXSecureExchangeCreateExchangeRequestBody = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
  token: "someMXProcessorToken",
};
```

### `models.FlinksSecureExchangeCreateExchangeRequestBody`

```typescript
const value: models.FlinksSecureExchangeCreateExchangeRequestBody = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/a0b22a57-68df-4450-b507-47c937e64e89",
    },
  },
  token:
    "MTExYTFhMWEtMTExMS0xYWExLTExMTEtMTFhMTExYTExMTFhOjIyMmIyYjFiLTIyMjItMmJiMi0yMjIyLTIyYjIyMmIyMjIyYg==",
};
```

### `models.PlaidSecureExchangeCreateExchangeRequestBody`

```typescript
const value: models.PlaidSecureExchangeCreateExchangeRequestBody = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/f53ffb32-c84f-496a-9d9d-acd100d396ef",
    },
  },
  token: "somePlaidProcessorToken",
};
```

