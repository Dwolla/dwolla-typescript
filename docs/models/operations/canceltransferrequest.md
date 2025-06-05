# CancelTransferRequest

## Example Usage

```typescript
import { CancelTransferRequest } from "dwolla-typescript/models/operations";

let value: CancelTransferRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of transfer                                                                               |
| `requestBody`                                                                                | [operations.CancelTransferRequestBody](../../models/operations/canceltransferrequestbody.md) | :heavy_check_mark:                                                                           | Parameters to cancel a transfer                                                              |