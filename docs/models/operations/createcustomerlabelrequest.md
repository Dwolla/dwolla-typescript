# CreateCustomerLabelRequest

## Example Usage

```typescript
import { CreateCustomerLabelRequest } from "dwolla/models/operations";

let value: CreateCustomerLabelRequest = {
  id: "<id>",
  requestBody: {
    amount: {
      currency: "12.34",
      value: "USD",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | ID of customer to create a label for                                                                   |
| `requestBody`                                                                                          | [operations.CreateCustomerLabelRequestBody](../../models/operations/createcustomerlabelrequestbody.md) | :heavy_check_mark:                                                                                     | Parameters to create a customer label                                                                  |