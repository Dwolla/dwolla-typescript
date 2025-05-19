# StatusInvalidErrorEmbedded

## Example Usage

```typescript
import { StatusInvalidErrorEmbedded } from "dwolla-typescript";

let value: StatusInvalidErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Status invalid.",
      path: "/status",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `errors`                                                                 | [models.StatusInvalidErrorError](../models/statusinvaliderrorerror.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |