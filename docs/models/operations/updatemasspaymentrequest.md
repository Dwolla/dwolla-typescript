# UpdateMassPaymentRequest

## Example Usage

```typescript
import { UpdateMassPaymentRequest } from "dwolla-typescript/models/operations";

let value: UpdateMassPaymentRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of mass payment to update                                                                       |
| `requestBody`                                                                                      | [operations.UpdateMassPaymentRequestBody](../../models/operations/updatemasspaymentrequestbody.md) | :heavy_check_mark:                                                                                 | Parameters for updating a mass payment                                                             |