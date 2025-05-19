# IncompatibleSourceAndDestinationTypesErrorError

## Example Usage

```typescript
import { IncompatibleSourceAndDestinationTypesErrorError } from "dwolla-typescript";

let value: IncompatibleSourceAndDestinationTypesErrorError = {
  code: "Invalid",
  message:
    "Card type funding sources can only accept payments directly from a balance",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | Invalid                                                                                                                |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | Card type funding sources can only accept payments directly from a balance                                             |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | /_links/destination/href                                                                                               |
| `links`                                                                                                                | [models.IncompatibleSourceAndDestinationTypesErrorLinks](../models/incompatiblesourceanddestinationtypeserrorlinks.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | {}                                                                                                                     |