# InitiateTransferRequest

## Example Usage

```typescript
import { InitiateTransferRequest } from "dwolla/models/operations";

let value: InitiateTransferRequest = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `requestBody`                                                                                    | [operations.InitiateTransferRequestBody](../../models/operations/initiatetransferrequestbody.md) | :heavy_check_mark:                                                                               | Parameters to initiate a transfer                                                                |