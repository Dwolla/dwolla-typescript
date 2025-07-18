# FromLedgerEntry

## Example Usage

```typescript
import { FromLedgerEntry } from "dwolla/models/operations";

let value: FromLedgerEntry = {
  href:
    "https://api.dwolla.com/ledger-entries/f6a44994-b4da-48e3-bd10-d3a168e6a77d",
  type: "application/vnd.dwolla.v1.hal+json",
  resourceType: "ledger-entry",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `href`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | https://api.dwolla.com/ledger-entries/f6a44994-b4da-48e3-bd10-d3a168e6a77d |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | application/vnd.dwolla.v1.hal+json                                         |
| `resourceType`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | ledger-entry                                                               |