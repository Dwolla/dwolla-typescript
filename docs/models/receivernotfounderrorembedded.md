# ReceiverNotFoundErrorEmbedded

## Example Usage

```typescript
import { ReceiverNotFoundErrorEmbedded } from "dwolla/models";

let value: ReceiverNotFoundErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Receiver not found.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [models.ReceiverNotFoundErrorError](../models/receivernotfounderrorerror.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |