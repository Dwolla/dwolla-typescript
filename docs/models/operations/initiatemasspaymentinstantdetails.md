# InitiateMassPaymentInstantDetails

Instant Payments specific transaction details for both RTP and FedNow networks. Applies to items where processingChannel.destination is set to instant or real-time-payments. Only destination is supported; there is no sender-side remittance field. Use destination.remittanceData to convey payment context to the receiver. The metadata and correlationId fields are for your own reconciliation and are not transmitted over the payment network.

## Example Usage

```typescript
import { InitiateMassPaymentInstantDetails } from "dwolla/models/operations";

let value: InitiateMassPaymentInstantDetails = {
  destination: {
    remittanceData: "ABC_123 Remittance Data",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `destination`                                                                                                                      | [operations.InitiateMassPaymentInstantDetailsDestination](../../models/operations/initiatemasspaymentinstantdetailsdestination.md) | :heavy_minus_sign:                                                                                                                 | Instant payment details for the destination                                                                                        |