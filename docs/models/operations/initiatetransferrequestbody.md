# InitiateTransferRequestBody

Parameters to initiate a transfer

## Example Usage

```typescript
import { InitiateTransferRequestBody } from "dwolla/models/operations";

let value: InitiateTransferRequestBody = {
  links: {},
  amount: {
    value: "5.00",
    currency: "USD",
  },
  fees: [
    {
      amount: {
        value: "5.00",
        currency: "USD",
      },
    },
  ],
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `links`                                                                                                      | [operations.InitiateTransferLinks](../../models/operations/initiatetransferlinks.md)                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `amount`                                                                                                     | [models.TransferAmount](../../models/transferamount.md)                                                      | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | [operations.InitiateTransferMetadata](../../models/operations/initiatetransfermetadata.md)                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `fees`                                                                                                       | [operations.Fee](../../models/operations/fee.md)[]                                                           | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `clearing`                                                                                                   | [operations.InitiateTransferClearing](../../models/operations/initiatetransferclearing.md)                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `achDetails`                                                                                                 | [operations.InitiateTransferAchDetails](../../models/operations/initiatetransferachdetails.md)               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `rtpDetails`                                                                                                 | [operations.RtpDetails](../../models/operations/rtpdetails.md)                                               | :heavy_minus_sign:                                                                                           | Real-Time Payments (RTP) specific transaction details.                                                       |
| `instantDetails`                                                                                             | [operations.InstantDetails](../../models/operations/instantdetails.md)                                       | :heavy_minus_sign:                                                                                           | Instant Payments specific transaction details for both RTP and FedNow networks.                              |
| `correlationId`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `processingChannel`                                                                                          | [operations.InitiateTransferProcessingChannel](../../models/operations/initiatetransferprocessingchannel.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |