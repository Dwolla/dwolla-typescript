# CreateAccountExchangeResponse

## Example Usage

```typescript
import { CreateAccountExchangeResponse } from "dwolla-typescript/models/operations";

let value: CreateAccountExchangeResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.CreateAccountExchangeResponseBody](../../models/operations/createaccountexchangeresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |