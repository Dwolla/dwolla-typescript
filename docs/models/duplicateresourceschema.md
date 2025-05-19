# DuplicateResourceSchema

## Example Usage

```typescript
import { DuplicateResourceSchema } from "dwolla-typescript";

let value: DuplicateResourceSchema = {
  code: "DuplicateResource",
  message: "Bank already exists: id=df8392e5-4c06-42ed-b247-c098ed6f5a11",
  links: {
    about: {
      href:
        "https://api.dwolla.com/funding-sources/df8392e5-4c06-42ed-b247-c098ed6f5a11",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "funding-source",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | DuplicateResource                                                                |
| `message`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | Bank already exists: id=df8392e5-4c06-42ed-b247-c098ed6f5a11                     |
| `links`                                                                          | [models.DuplicateResourceSchemaLinks](../models/duplicateresourceschemalinks.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |