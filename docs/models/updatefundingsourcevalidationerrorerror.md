# UpdateFundingSourceValidationErrorError

## Example Usage

```typescript
import { UpdateFundingSourceValidationErrorError } from "dwolla/models";

let value: UpdateFundingSourceValidationErrorError = {
  code: "NotAllowed",
  message: "Card funding sources cannot be updated with bank fields",
  path: "/routingNumber",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `code`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | NotAllowed                                              |
| `message`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | Card funding sources cannot be updated with bank fields |
| `path`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | /routingNumber                                          |