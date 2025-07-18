# SecretTooLongErrorEmbedded

## Example Usage

```typescript
import { SecretTooLongErrorEmbedded } from "dwolla/models";

let value: SecretTooLongErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message: "Secret must be 128 or fewer characters.",
      path: "/secret",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `errors`                                                                 | [models.SecretTooLongErrorError](../models/secrettoolongerrorerror.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |