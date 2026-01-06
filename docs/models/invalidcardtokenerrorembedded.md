# InvalidCardTokenErrorEmbedded

## Example Usage

```typescript
import { InvalidCardTokenErrorEmbedded } from "dwolla/models";

let value: InvalidCardTokenErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "The card data is invalid.",
      path: "/cardToken",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [models.InvalidCardTokenErrorError](../models/invalidcardtokenerrorerror.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |