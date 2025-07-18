# Transfer

## Example Usage

```typescript
import { Transfer } from "dwolla/models";

let value: Transfer = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "15c6bcce-46f7-e811-8112-e8dd3bececa8",
  status: "pending",
  amount: {
    value: "42.00",
    currency: "USD",
  },
  created: new Date("2018-12-03T22:00:22.970Z"),
  clearing: {
    source: "standard",
    destination: "same-day",
  },
  metadata: {
    paymentId: "12345678",
    note: "Payment for completed work Dec. 1",
  },
  achDetails: {
    source: {
      addenda: {
        values: [
          "ABC123_AddendaValue",
        ],
      },
    },
    destination: {
      addenda: {
        values: [
          "ZYX987_AddendaValue",
        ],
      },
    },
  },
  rtpDetails: {
    destination: {
      remittanceData: "ABC_123 Remittance Data",
    },
  },
  correlationId: "8a2cdc8d-629d-4a24-98ac-40b735229fe2",
  processingChannel: {
    destination: "real-time-payments",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 15c6bcce-46f7-e811-8112-e8dd3bececa8                                                          |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | pending                                                                                       |
| `amount`                                                                                      | [models.TransferAmount1](../models/transferamount1.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2018-12-03T22:00:22.970Z                                                                      |
| `clearing`                                                                                    | [models.Clearing](../models/clearing.md)                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | [models.TransferMetadata](../models/transfermetadata.md)                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `achDetails`                                                                                  | [models.AchDetails](../models/achdetails.md)                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `rtpDetails`                                                                                  | [models.RtpDetails](../models/rtpdetails.md)                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `correlationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 8a2cdc8d-629d-4a24-98ac-40b735229fe2                                                          |
| `processingChannel`                                                                           | [models.TransferProcessingChannel](../models/transferprocessingchannel.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |