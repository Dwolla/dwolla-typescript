# InvalidCorrelationIdErrorError

## Example Usage

```typescript
import { InvalidCorrelationIdErrorError } from "dwolla-typescript/models";

let value: InvalidCorrelationIdErrorError = {
  code: "InvalidFormat",
  message:
    "Correlation id must be at least one character and up to 255 characters when supplied.",
  path: "/correlationId",
  links: {},
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `code`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | InvalidFormat                                                                         |
| `message`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | Correlation id must be at least one character and up to 255 characters when supplied. |
| `path`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | /correlationId                                                                        |
| `links`                                                                               | [models.InvalidCorrelationIdErrorLinks](../models/invalidcorrelationiderrorlinks.md)  | :heavy_minus_sign:                                                                    | N/A                                                                                   | {}                                                                                    |