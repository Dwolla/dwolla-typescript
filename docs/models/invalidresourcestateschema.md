# InvalidResourceStateSchema

## Example Usage

```typescript
import { InvalidResourceStateSchema } from "dwolla-typescript";

let value: InvalidResourceStateSchema = {
  code: "invalidResourceState",
  message:
    "Resource cannot be modified. Document creation not allowed for already verified Customers or non-verified Customer types.",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                    | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       | invalidResourceState                                                                                                      |
| `message`                                                                                                                 | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       | Resource cannot be modified. Document creation not allowed for already verified Customers or non-verified Customer types. |