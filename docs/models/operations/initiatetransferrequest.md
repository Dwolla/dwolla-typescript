# InitiateTransferRequest

## Example Usage

```typescript
import { InitiateTransferRequest } from "dwolla/models/operations";

let value: InitiateTransferRequest = {
  idempotencyKey: "19051a62-3403-11e6-ac61-9e71128cae77",
  requestBody: {
    links: {},
    amount: {
      value: "5.00",
      currency: "USD",
    },
    rtpDetails: {
      destination: {
        remittanceData: "ABC_123 Remittance Data",
      },
    },
    instantDetails: {
      destination: {
        remittanceData: "ABC_123 Remittance Data",
      },
    },
    processingChannel: {
      destination: "instant",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 19051a62-3403-11e6-ac61-9e71128cae77                                                             |
| `requestBody`                                                                                    | [operations.InitiateTransferRequestBody](../../models/operations/initiatetransferrequestbody.md) | :heavy_check_mark:                                                                               | Parameters to initiate a transfer                                                                |                                                                                                  |