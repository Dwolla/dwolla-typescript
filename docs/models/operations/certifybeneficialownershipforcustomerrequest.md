# CertifyBeneficialOwnershipForCustomerRequest

## Example Usage

```typescript
import { CertifyBeneficialOwnershipForCustomerRequest } from "dwolla-typescript/models/operations";

let value: CertifyBeneficialOwnershipForCustomerRequest = {
  id: "<id>",
  requestBody: {
    status: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Customer unique identifier                                                                                                                 |
| `requestBody`                                                                                                                              | [operations.CertifyBeneficialOwnershipForCustomerRequestBody](../../models/operations/certifybeneficialownershipforcustomerrequestbody.md) | :heavy_check_mark:                                                                                                                         | Parameters for certifying beneficial ownership for a Customer                                                                              |