# CreateCustomerExchangeSessionForCard

Create an exchange session for debit card capture (Push to Card).

Optionally opt into Account Name Inquiry (ANI) by passing `cardDetails` with the cardholder
name you expect on the card. The name-match result is returned on the resulting Exchange as
`cardDetails.accountNameInquiry`, giving you an early signal of fraudulent card usage before
you create a funding source.


## Example Usage

```typescript
import { CreateCustomerExchangeSessionForCard } from "dwolla/models";

let value: CreateCustomerExchangeSessionForCard = {
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

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                             | [models.CreateCustomerExchangeSessionForCardLinks](../models/createcustomerexchangesessionforcardlinks.md)                                                                          | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| `cardDetails`                                                                                                                                                                       | [models.CreateCustomerExchangeSessionForCardCardDetails](../models/createcustomerexchangesessionforcardcarddetails.md)                                                              | :heavy_minus_sign:                                                                                                                                                                  | Optional. Opt into Account Name Inquiry (ANI) for this session by providing the expected<br/>cardholder name. Retrieve the resulting match on the Exchange with `GET /exchanges/{id}`.<br/> |