# SourceNotCardNetworkSettlementErrorError

## Example Usage

```typescript
import { SourceNotCardNetworkSettlementErrorError } from "dwolla/models";

let value: SourceNotCardNetworkSettlementErrorError = {
  code: "NotAllowed",
  message: "Source funding source does not support card payouts.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | NotAllowed                                                                                               |
| `message`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | Source funding source does not support card payouts.                                                     |
| `path`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | /_links/source/href                                                                                      |
| `links`                                                                                                  | [models.SourceNotCardNetworkSettlementErrorLinks](../models/sourcenotcardnetworksettlementerrorlinks.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | {}                                                                                                       |