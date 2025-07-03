# ReceiverRestrictedErrorError

## Example Usage

```typescript
import { ReceiverRestrictedErrorError } from "dwolla-typescript/models";

let value: ReceiverRestrictedErrorError = {
  code: "Restricted",
  message: "Receiver restricted.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Restricted                                                                       |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Receiver restricted.                                                             |
| `path`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | /_links/destination/href                                                         |
| `links`                                                                          | [models.ReceiverRestrictedErrorLinks](../models/receiverrestrictederrorlinks.md) | :heavy_minus_sign:                                                               | N/A                                                                              | {}                                                                               |