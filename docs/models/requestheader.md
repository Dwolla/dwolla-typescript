# RequestHeader

## Example Usage

```typescript
import { RequestHeader } from "dwolla-typescript";

let value: RequestHeader = {
  name: "X-Dwolla-Topic",
  value: "transfer_created",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | X-Dwolla-Topic     |
| `value`            | *string*           | :heavy_minus_sign: | N/A                | transfer_created   |