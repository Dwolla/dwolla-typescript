# TransfersEmbedded

## Example Usage

```typescript
import { TransfersEmbedded } from "dwolla/models";
import { RFCDate } from "dwolla/types";

let value: TransfersEmbedded = {
  transfers: [
    {
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
          beneficiaryName: "John Doe",
          companyEntryDescription: "PAYMENT",
          companyId: "1234567890",
          companyName: "Acme Corporation",
          effectiveDate: new RFCDate("2021-12-01"),
          postingData: "Acme Corporation:Payment Reference:John Doe",
          routingNumber: "222222226",
          traceId: "222222225926346",
        },
        destination: {
          addenda: {
            values: [
              "ZYX987_AddendaValue",
            ],
          },
          beneficiaryName: "Jane Smith",
          companyEntryDescription: "PAYMENT",
          companyId: "1234567890",
          companyName: "Acme Corporation",
          effectiveDate: new RFCDate("2021-12-01"),
          postingData: "Acme Corporation:Payment Reference:Jane Smith",
          routingNumber: "222222226",
          traceId: "222222225926346",
        },
      },
      rtpDetails: {
        destination: {
          remittanceData: "ABC_123 Remittance Data",
          networkId: "20210617021214273T1BG27487110796028",
          endToEndReferenceId: "E2E-RTP-20210617-001",
        },
      },
      fedNowDetails: {
        destination: {
          remittanceData: "ABC_123 Remittance Data",
          networkId: "20240115123456789FEDNOW123456",
          endToEndReferenceId: "E2E-FEDNOW-20240115-001",
        },
      },
      correlationId: "8a2cdc8d-629d-4a24-98ac-40b735229fe2",
      processingChannel: {
        destination: "real-time-payments",
      },
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `transfers`                                | [models.Transfer](../models/transfer.md)[] | :heavy_minus_sign:                         | N/A                                        |