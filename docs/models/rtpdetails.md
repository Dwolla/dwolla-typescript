# RtpDetails

Real-Time Payments (RTP) network specific details. Present when transfer was processed via RTP network.

## Example Usage

```typescript
import { RtpDetails } from "dwolla/models";

let value: RtpDetails = {
  destination: {
    remittanceData: "ABC_123 Remittance Data",
    networkId: "20210617021214273T1BG27487110796028",
    endToEndReferenceId: "E2E-RTP-20210617-001",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `destination`                                                      | [models.RtpDetailsDestination](../models/rtpdetailsdestination.md) | :heavy_minus_sign:                                                 | RTP destination details with network identifiers                   |