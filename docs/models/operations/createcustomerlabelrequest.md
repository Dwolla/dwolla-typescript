# CreateCustomerLabelRequest

## Example Usage

```typescript
import { CreateCustomerLabelRequest } from "dwolla-typescript/models/operations";

let value: CreateCustomerLabelRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | ID of customer to create a label for                                                                   |
| `requestBody`                                                                                          | [operations.CreateCustomerLabelRequestBody](../../models/operations/createcustomerlabelrequestbody.md) | :heavy_check_mark:                                                                                     | Parameters to create a customer label                                                                  |