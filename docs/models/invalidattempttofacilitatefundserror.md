# InvalidAttemptToFacilitateFundsError

## Example Usage

```typescript
import { InvalidAttemptToFacilitateFundsError } from "dwolla-typescript";

let value: InvalidAttemptToFacilitateFundsError = {
  code: "Forbidden",
  message:
    "Invalid Funds Flow: this operation requires the funds flow 'Facilitate' to be enabled",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `code`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | Forbidden                                                                             |
| `message`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | Invalid Funds Flow: this operation requires the funds flow 'Facilitate' to be enabled |