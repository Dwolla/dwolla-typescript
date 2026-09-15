# CreateCustomerExchangeSessionForCardCardDetails

Optional. Opt into Account Name Inquiry (ANI) for this session by providing the expected
cardholder name. Retrieve the resulting match on the Exchange with `GET /exchanges/{id}`.


## Example Usage

```typescript
import { CreateCustomerExchangeSessionForCardCardDetails } from "dwolla/models";

let value: CreateCustomerExchangeSessionForCardCardDetails = {
  firstName: "John",
  lastName: "Doe",
  accountNameInquiry: true,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `firstName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The cardholder first name you expect on the card.                                    | John                                                                                 |
| `lastName`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The cardholder last name you expect on the card.                                     | Doe                                                                                  |
| `accountNameInquiry`                                                                 | *boolean*                                                                            | :heavy_check_mark:                                                                   | Set to `true` to request an Account Name Inquiry (ANI) name-match check on the card. | true                                                                                 |