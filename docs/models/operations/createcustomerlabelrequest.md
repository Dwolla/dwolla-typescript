# CreateCustomerLabelRequest

## Example Usage

```typescript
import { CreateCustomerLabelRequest } from "dwolla/models/operations";

let value: CreateCustomerLabelRequest = {
  id: "<id>",
  requestBody: {
    amount: {
      currency: "USD",
      value: "12.34",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | ID of customer to create a label for                                                                   |
| `requestBody`                                                                                          | [operations.CreateCustomerLabelRequestBody](../../models/operations/createcustomerlabelrequestbody.md) | :heavy_check_mark:                                                                                     | Parameters to create a customer label                                                                  |