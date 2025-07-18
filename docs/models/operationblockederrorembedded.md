# OperationBlockedErrorEmbedded

## Example Usage

```typescript
import { OperationBlockedErrorEmbedded } from "dwolla/models";

let value: OperationBlockedErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message: "Receiver cannot receive from sender.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [models.OperationBlockedErrorError](../models/operationblockederrorerror.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |