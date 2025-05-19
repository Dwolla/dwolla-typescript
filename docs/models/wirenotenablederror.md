# WireNotEnabledError

## Example Usage

```typescript
import { WireNotEnabledError } from "dwolla-typescript";

let value: WireNotEnabledError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Wire transfers are currently not enabled.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `code`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | ValidationError                                                                |
| `message`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | Validation error(s) present. See embedded errors list for more details.        |
| `embedded`                                                                     | [models.WireNotEnabledErrorEmbedded](../models/wirenotenablederrorembedded.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |