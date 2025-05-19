# CreateCustomerExchangeRequestBody


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

### `models.MXOpenBankingCreateExchangeRequestBody`

```typescript
const value: models.MXOpenBankingCreateExchangeRequestBody = {
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

### `models.PlaidOpenBankingCreateExchangeRequestBody`

```typescript
const value: models.PlaidOpenBankingCreateExchangeRequestBody = {
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

