# VerifyMicroDepositsRequest

## Example Usage

```typescript
import { VerifyMicroDepositsRequest } from "dwolla/models/operations";

let value: VerifyMicroDepositsRequest = {
  id: "<id>",
  requestBody: {
    amount1: {
      value: "0.02",
      currency: "USD",
    },
    amount2: {
      value: "0.03",
      currency: "USD",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the funding source to verify micro-deposits for                                              |
| `requestBody`                                                                                          | [operations.VerifyMicroDepositsRequestBody](../../models/operations/verifymicrodepositsrequestbody.md) | :heavy_check_mark:                                                                                     | The micro-deposit amounts received in the bank account                                                 |