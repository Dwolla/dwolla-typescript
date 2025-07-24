# InstantDetails

Instant Payments specific transaction details for both RTP and FedNow networks.

## Example Usage

```typescript
import { InstantDetails } from "dwolla/models/operations";

let value: InstantDetails = {
  destination: {
    remittanceData: "ABC_123 Remittance Data",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `destination`                                                                                | [operations.InstantDetailsDestination](../../models/operations/instantdetailsdestination.md) | :heavy_minus_sign:                                                                           | Instant payment details for the destination                                                  |