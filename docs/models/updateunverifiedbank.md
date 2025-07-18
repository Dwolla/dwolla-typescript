# UpdateUnverifiedBank

Request body for updating information of an unverified bank funding source

## Example Usage

```typescript
import { UpdateUnverifiedBank } from "dwolla/models";

let value: UpdateUnverifiedBank = {
  routingNumber: "222222226",
  accountNumber: "123456789",
  bankAccountType: "checking",
  name: "Jane Doe’s Checking",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `routingNumber`     | *string*            | :heavy_minus_sign:  | N/A                 | 222222226           |
| `accountNumber`     | *string*            | :heavy_minus_sign:  | N/A                 | 123456789           |
| `bankAccountType`   | *string*            | :heavy_minus_sign:  | N/A                 | checking            |
| `name`              | *string*            | :heavy_check_mark:  | N/A                 | Jane Doe’s Checking |