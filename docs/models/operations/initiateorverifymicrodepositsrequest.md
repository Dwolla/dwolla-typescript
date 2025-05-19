# InitiateOrVerifyMicroDepositsRequest

## Example Usage

```typescript
import { InitiateOrVerifyMicroDepositsRequest } from "dwolla-typescript/models/operations";

let value: InitiateOrVerifyMicroDepositsRequest = {
  id: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The ID of the FS to initiate or verify micro-deposit                                                                                                                                                     |
| `requestBody`                                                                                                                                                                                            | *operations.InitiateOrVerifyMicroDepositsRequestBody*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                       | Parameters for initiating or verifying micro-deposits.<br/>- For initiating micro-deposits: No request body is required<br/>- For verifying micro-deposits: Request body with micro-deposit amounts is required<br/> |