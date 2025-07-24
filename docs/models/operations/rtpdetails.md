# RtpDetails

Real-Time Payments (RTP) specific transaction details.

## Example Usage

```typescript
import { RtpDetails } from "dwolla/models/operations";

let value: RtpDetails = {
  destination: {
    remittanceData: "ABC_123 Remittance Data",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `destination`                                                                        | [operations.RtpDetailsDestination](../../models/operations/rtpdetailsdestination.md) | :heavy_minus_sign:                                                                   | RTP details for the destination                                                      |