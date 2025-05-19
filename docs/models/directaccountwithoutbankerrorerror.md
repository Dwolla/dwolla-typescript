# DirectAccountWithoutBankErrorError

## Example Usage

```typescript
import { DirectAccountWithoutBankErrorError } from "dwolla-typescript";

let value: DirectAccountWithoutBankErrorError = {
  code: "RequiresFundingSource",
  message: "Receiver requires funding source.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `code`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | RequiresFundingSource                                                                        |
| `message`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | Receiver requires funding source.                                                            |
| `path`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | /_links/destination/href                                                                     |
| `links`                                                                                      | [models.DirectAccountWithoutBankErrorLinks](../models/directaccountwithoutbankerrorlinks.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          | {}                                                                                           |