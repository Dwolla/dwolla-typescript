# CardMissingRequiredFieldsErrorError

## Example Usage

```typescript
import { CardMissingRequiredFieldsErrorError } from "dwolla/models";

let value: CardMissingRequiredFieldsErrorError = {
  code: "Required",
  message: "Token is required.",
  path: "/token",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | N/A                | Required           |
| `message`          | *string*           | :heavy_check_mark: | N/A                | Token is required. |
| `path`             | *string*           | :heavy_check_mark: | N/A                | /token             |