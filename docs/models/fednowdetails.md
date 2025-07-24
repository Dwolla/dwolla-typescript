# FedNowDetails

FedNow Service network specific details. Present when transfer was processed via FedNow network.

## Example Usage

```typescript
import { FedNowDetails } from "dwolla/models";

let value: FedNowDetails = {
  destination: {
    remittanceData: "ABC_123 Remittance Data",
    networkId: "20240115123456789FEDNOW123456",
    endToEndReferenceId: "E2E-FEDNOW-20240115-001",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `destination`                                                            | [models.FedNowDetailsDestination](../models/fednowdetailsdestination.md) | :heavy_minus_sign:                                                       | FedNow destination details with network identifiers                      |