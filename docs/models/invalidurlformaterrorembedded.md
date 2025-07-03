# InvalidUrlFormatErrorEmbedded

## Example Usage

```typescript
import { InvalidUrlFormatErrorEmbedded } from "dwolla-typescript/models";

let value: InvalidUrlFormatErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message: "Url must be a valid url.",
      path: "/url",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [models.InvalidUrlFormatErrorError](../models/invalidurlformaterrorerror.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |