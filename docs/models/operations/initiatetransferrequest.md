# InitiateTransferRequest

Parameters to initiate a transfer

## Example Usage

```typescript
import { InitiateTransferRequest } from "dwolla-typescript/models/operations";

let value: InitiateTransferRequest = {
  links: {},
  amount: {
    value: "5.00",
    currency: "USD",
  },
  processingChannel: {
    destination: "real-time-payments",
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
| `rtpDetails`                                                                                                 | [operations.RtpDetails](../../models/operations/rtpdetails.md)                                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `correlationId`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `processingChannel`                                                                                          | [operations.InitiateTransferProcessingChannel](../../models/operations/initiatetransferprocessingchannel.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |