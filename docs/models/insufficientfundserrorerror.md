# InsufficientFundsErrorError

## Example Usage

```typescript
import { InsufficientFundsErrorError } from "dwolla-typescript";

let value: InsufficientFundsErrorError = {
  code: "InsufficientFunds",
  message: "Insufficient funds.",
  path: "/_links/source/href",
  links: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `code`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | InsufficientFunds                                                              |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Insufficient funds.                                                            |
| `path`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | /_links/source/href                                                            |
| `links`                                                                        | [models.InsufficientFundsErrorLinks](../models/insufficientfundserrorlinks.md) | :heavy_minus_sign:                                                             | N/A                                                                            | {}                                                                             |