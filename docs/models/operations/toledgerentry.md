# ToLedgerEntry

## Example Usage

```typescript
import { ToLedgerEntry } from "dwolla-typescript/models/operations";

let value: ToLedgerEntry = {
  href:
    "https://api.dwolla.com/ledger-entries/d8a4bf7a-3fa0-48b9-873c-765d7375c59f",
  type: "application/vnd.dwolla.v1.hal+json",
  resourceType: "ledger-entry",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `href`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | https://api.dwolla.com/ledger-entries/d8a4bf7a-3fa0-48b9-873c-765d7375c59f |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | application/vnd.dwolla.v1.hal+json                                         |
| `resourceType`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | ledger-entry                                                               |