# AchDetails

ACH-specific details for the transfer. Present when transfer was processed via ACH network.

## Example Usage

```typescript
import { AchDetails } from "dwolla/models";
import { RFCDate } from "dwolla/types";

let value: AchDetails = {
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `source`                                                                           | [models.Source](../models/source.md)                                               | :heavy_minus_sign:                                                                 | Information sent to the source/originating bank account along with the transfer    |
| `destination`                                                                      | [models.AchDetailsDestination](../models/achdetailsdestination.md)                 | :heavy_minus_sign:                                                                 | Information sent to the destination/receiving bank account along with the transfer |