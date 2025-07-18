# InitiateOrVerifyMicroDepositsRequest

## Example Usage

```typescript
import { InitiateOrVerifyMicroDepositsRequest } from "dwolla/models/operations";

let value: InitiateOrVerifyMicroDepositsRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The ID of the FS to initiate or verify micro-deposit                                                                                                                        |
| `requestBody`                                                                                                                                                               | *operations.InitiateOrVerifyMicroDepositsRequestBody*                                                                                                                       | :heavy_minus_sign:                                                                                                                                                          | Optional request body for verifying micro-deposits.<br/>- If omitted: Endpoint will initiate micro-deposits<br/>- If provided: Must contain micro-deposit amounts for verification<br/> |