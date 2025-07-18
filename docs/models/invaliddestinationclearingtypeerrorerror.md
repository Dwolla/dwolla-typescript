# InvalidDestinationClearingTypeErrorError

## Example Usage

```typescript
import { InvalidDestinationClearingTypeErrorError } from "dwolla/models";

let value: InvalidDestinationClearingTypeErrorError = {
  code: "Restricted",
  message: "Destination clearing type is currently not enabled.",
  path: "/clearing/destination",
  links: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | Restricted                                                                                               |
| `message`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | Destination clearing type is currently not enabled.                                                      |
| `path`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | /clearing/destination                                                                                    |
| `links`                                                                                                  | [models.InvalidDestinationClearingTypeErrorLinks](../models/invaliddestinationclearingtypeerrorlinks.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | {}                                                                                                       |