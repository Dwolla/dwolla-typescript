# BeneficialOwnership

## Example Usage

```typescript
import { BeneficialOwnership } from "dwolla-typescript";

let value: BeneficialOwnership = {
  links: {
    self: {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  status: "uncertified",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `links`                                                                  | [models.BeneficialOwnershipLinks](../models/beneficialownershiplinks.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `status`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | uncertified                                                              |