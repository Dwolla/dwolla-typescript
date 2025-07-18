# RetrieveLabelReallocationResponse

successful operation

## Example Usage

```typescript
import { RetrieveLabelReallocationResponse } from "dwolla/models/operations";

let value: RetrieveLabelReallocationResponse = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/label-reallocations/fd36b78c-42f3-4e21-8efb-09196fccbd21",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "label-reallocation",
    },
    toLedgerEntry: {
      href:
        "https://api.dwolla.com/ledger-entries/d8a4bf7a-3fa0-48b9-873c-765d7375c59f",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "ledger-entry",
    },
    fromLedgerEntry: {
      href:
        "https://api.dwolla.com/ledger-entries/f6a44994-b4da-48e3-bd10-d3a168e6a77d",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "ledger-entry",
    },
  },
  created: new Date("2022-05-16T13:41:31.036Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `links`                                                                                                | [operations.RetrieveLabelReallocationLinks](../../models/operations/retrievelabelreallocationlinks.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `created`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | 2022-05-16T13:41:31.036Z                                                                               |