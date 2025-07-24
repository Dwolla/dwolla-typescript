# InstantDetailsDestination

Instant payment details for the destination

## Example Usage

```typescript
import { InstantDetailsDestination } from "dwolla/models/operations";

let value: InstantDetailsDestination = {
  remittanceData: "ABC_123 Remittance Data",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `remittanceData`                                                                                      | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Remittance information for Instant Payments (RTP/FedNow), providing context about the payment purpose | ABC_123 Remittance Data                                                                               |