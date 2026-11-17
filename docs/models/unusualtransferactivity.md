# UnusualTransferActivity

Details of the transfer activity that triggered an `unusual-transfer-activity` alert. Omitted for alerts without these details.

## Example Usage

```typescript
import { UnusualTransferActivity } from "dwolla/models";

let value: UnusualTransferActivity = {
  transferCount: 12,
  totalAmount: {
    value: "48250.00",
    currency: "USD",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `transferCount`                                                                                    | *number*                                                                                           | :heavy_check_mark:                                                                                 | The number of transfers involved in the activity.                                                  | 12                                                                                                 |
| `totalAmount`                                                                                      | [models.UnusualTransferActivityTransferAmount](../models/unusualtransferactivitytransferamount.md) | :heavy_check_mark:                                                                                 | The total amount of the transfers involved in the activity.                                        | {<br/>"value": "48250.00",<br/>"currency": "USD"<br/>}                                             |