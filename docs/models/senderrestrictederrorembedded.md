# SenderRestrictedErrorEmbedded

## Example Usage

```typescript
import { SenderRestrictedErrorEmbedded } from "dwolla-typescript/models";

let value: SenderRestrictedErrorEmbedded = {
  errors: [
    {
      code: "Restricted",
      message: "Sender restricted.",
      path: "/_links/source/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [models.SenderRestrictedErrorError](../models/senderrestrictederrorerror.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |