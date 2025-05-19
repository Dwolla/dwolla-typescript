# CreateCustomerExchangeSessionResponseBodyBadRequest3

## Example Usage

```typescript
import { CreateCustomerExchangeSessionResponseBodyBadRequest3 } from "dwolla-typescript/models/operations";

let value: CreateCustomerExchangeSessionResponseBodyBadRequest3 = {
  code: "ValidationError",
  message:
    "The provided redirect URL must exactly match one of the configured URLs for the account",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `code`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | ValidationError                                                                         |
| `message`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | The provided redirect URL must exactly match one of the configured URLs for the account |