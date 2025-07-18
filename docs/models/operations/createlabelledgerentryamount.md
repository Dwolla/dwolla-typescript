# CreateLabelLedgerEntryAmount

## Example Usage

```typescript
import { CreateLabelLedgerEntryAmount } from "dwolla/models/operations";

let value: CreateLabelLedgerEntryAmount = {
  value: "-5.00",
  currency: "USD",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                      | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Amount of funds to increase or decrease for a Label. To decrease funds in a Label a string numeric value will be supplied and prepended with a "-" operator. | -5.00                                                                                                                                                        |
| `currency`                                                                                                                                                   | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Currency code for the amount                                                                                                                                 | USD                                                                                                                                                          |