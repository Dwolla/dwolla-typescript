# VerifyKbaQuestionsResponse

created

## Example Usage

```typescript
import { VerifyKbaQuestionsResponse } from "dwolla-typescript/models/operations";

let value: VerifyKbaQuestionsResponse = {
  links: {
    customer: {
      href:
        "https://api.dwolla.com/customers/b5fd802d-d8c7-43ce-94a8-7c14485b7042",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "customer",
    },
  },
  verificationStatus: "verified",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `links`                                                                                  | [operations.VerifyKbaQuestionsLinks](../../models/operations/verifykbaquestionslinks.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `verificationStatus`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | verified                                                                                 |