# ReceiverRestrictedErrorEmbedded

## Example Usage

```typescript
import { ReceiverRestrictedErrorEmbedded } from "dwolla-typescript";

let value: ReceiverRestrictedErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message: "Receiver restricted.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `errors`                                                                           | [models.ReceiverRestrictedErrorError](../models/receiverrestrictederrorerror.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |