# CardMissingRequiredFieldsErrorError

## Example Usage

```typescript
import { CardMissingRequiredFieldsErrorError } from "dwolla/models";

let value: CardMissingRequiredFieldsErrorError = {
  code: "Required",
  message: "Card token is required.",
  path: "/cardToken",
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `code`                  | *string*                | :heavy_check_mark:      | N/A                     | Required                |
| `message`               | *string*                | :heavy_check_mark:      | N/A                     | Card token is required. |
| `path`                  | *string*                | :heavy_check_mark:      | N/A                     | /cardToken              |