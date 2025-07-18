# CreateReAuthExchangeSessionRequest

## Example Usage

```typescript
import { CreateReAuthExchangeSessionRequest } from "dwolla/models/operations";

let value: CreateReAuthExchangeSessionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Exchange's unique identifier                                                                                                                     |
| `requestBody`                                                                                                                                    | *operations.CreateReAuthExchangeSessionRequestBody*                                                                                              | :heavy_minus_sign:                                                                                                                               | Request body containing the redirect URL.<br/>Required for:<br/>- Visa exchange sessions<br/>- Plaid mobile sessions<br/>Not required for:<br/>- Plaid web sessions<br/> |