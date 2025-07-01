# CreateCustomerExchangeSessionRequest

## Example Usage

```typescript
import { CreateCustomerExchangeSessionRequest } from "dwolla-typescript/models/operations";

let value: CreateCustomerExchangeSessionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | Customer's unique identifier                          |
| `requestBody`                                         | *operations.CreateCustomerExchangeSessionRequestBody* | :heavy_check_mark:                                    | Parameters for creating an exchange session           |