# StatusNotAllowedErrorEmbedded

## Example Usage

```typescript
import { StatusNotAllowedErrorEmbedded } from "dwolla/models";

let value: StatusNotAllowedErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message: "Status not allowed.",
      path: "/status",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [models.StatusNotAllowedErrorError](../models/statusnotallowederrorerror.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |