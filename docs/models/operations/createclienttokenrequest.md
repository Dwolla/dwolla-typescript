# CreateClientTokenRequest

## Example Usage

```typescript
import { CreateClientTokenRequest } from "dwolla/models/operations";

let value: CreateClientTokenRequest = {
  action: "customer.update",
  links: {
    customer: {
      href:
        "https://api-sandbox.dwolla.com/customers/707177c3-bf15-4e7e-b37c-55c3898d9bf4",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `action`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | A granular permission for the Customer performing an action within a drop-in component | customer.update                                                                        |
| `links`                                                                                | [operations.CreateClientTokenLinks](../../models/operations/createclienttokenlinks.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |