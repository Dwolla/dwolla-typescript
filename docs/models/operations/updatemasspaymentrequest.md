# UpdateMassPaymentRequest

## Example Usage

```typescript
import { UpdateMassPaymentRequest } from "dwolla/models/operations";

let value: UpdateMassPaymentRequest = {
  id: "<id>",
  requestBody: {
    status: "pending",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of mass payment to update                                                                       |
| `requestBody`                                                                                      | [operations.UpdateMassPaymentRequestBody](../../models/operations/updatemasspaymentrequestbody.md) | :heavy_check_mark:                                                                                 | Parameters for updating a mass payment                                                             |