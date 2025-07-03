# InvalidFacilitatorErrorError

## Example Usage

```typescript
import { InvalidFacilitatorErrorError } from "dwolla-typescript/models";

let value: InvalidFacilitatorErrorError = {
  code: "Invalid",
  message: "Account cannot facilitate this transaction.",
  path: "",
  links: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Invalid                                                                          |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Account cannot facilitate this transaction.                                      |
| `path`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `links`                                                                          | [models.InvalidFacilitatorErrorLinks](../models/invalidfacilitatorerrorlinks.md) | :heavy_minus_sign:                                                               | N/A                                                                              | {}                                                                               |