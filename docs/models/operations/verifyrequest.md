# VerifyRequest

## Example Usage

```typescript
import { VerifyRequest } from "dwolla/models/operations";

let value: VerifyRequest = {
  id: "<id>",
  requestBody: {
    answers: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The id of the KBA session to verify questions for.                           |
| `requestBody`                                                                | [operations.VerifyRequestBody](../../models/operations/verifyrequestbody.md) | :heavy_check_mark:                                                           | Parameters for verifying KBA questions                                       |