# InvalidAmountLimitErrorError

## Example Usage

```typescript
import { InvalidAmountLimitErrorError } from "dwolla/models";

let value: InvalidAmountLimitErrorError = {
  code: "Invalid",
  message:
    "Invalid amount. The supplied amount is greater than your transaction limit.",
  path: "/amount/value",
  links: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Invalid                                                                          |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Invalid amount. The supplied amount is greater than your transaction limit.      |
| `path`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | /amount/value                                                                    |
| `links`                                                                          | [models.InvalidAmountLimitErrorLinks](../models/invalidamountlimiterrorlinks.md) | :heavy_minus_sign:                                                               | N/A                                                                              | {}                                                                               |