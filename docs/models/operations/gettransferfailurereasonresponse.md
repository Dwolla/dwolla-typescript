# GetTransferFailureReasonResponse

successful operation

## Example Usage

```typescript
import { GetTransferFailureReasonResponse } from "dwolla/models/operations";

let value: GetTransferFailureReasonResponse = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  code: "R03",
  description: "No Account/Unable to Locate Account",
  explanation:
    "The account number does not correspond to the individual identified in the entry or a valid account.",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `links`                                                                                              | Record<string, [models.HalLink](../../models/hallink.md)>                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `code`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | R03                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | No Account/Unable to Locate Account                                                                  |
| `explanation`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | The account number does not correspond to the individual identified in the entry or a valid account. |