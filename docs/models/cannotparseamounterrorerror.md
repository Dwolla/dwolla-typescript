# CannotParseAmountErrorError

## Example Usage

```typescript
import { CannotParseAmountErrorError } from "dwolla-typescript/models";

let value: CannotParseAmountErrorError = {
  code: "InvalidFormat",
  message: "Invalid amount. The supplied amount must be a positive number.",
  path: "/amount/value",
  links: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `code`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | InvalidFormat                                                                  |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Invalid amount. The supplied amount must be a positive number.                 |
| `path`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | /amount/value                                                                  |
| `links`                                                                        | [models.CannotParseAmountErrorLinks](../models/cannotparseamounterrorlinks.md) | :heavy_minus_sign:                                                             | N/A                                                                            | {}                                                                             |