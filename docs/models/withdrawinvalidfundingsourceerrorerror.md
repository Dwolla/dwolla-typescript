# WithdrawInvalidFundingSourceErrorError

## Example Usage

```typescript
import { WithdrawInvalidFundingSourceErrorError } from "dwolla-typescript/models";

let value: WithdrawInvalidFundingSourceErrorError = {
  code: "Invalid",
  message: "Destination funding source is either removed or does not exist.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | Invalid                                                                                              |
| `message`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | Destination funding source is either removed or does not exist.                                      |
| `path`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | /_links/destination/href                                                                             |
| `links`                                                                                              | [models.WithdrawInvalidFundingSourceErrorLinks](../models/withdrawinvalidfundingsourceerrorlinks.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | {}                                                                                                   |