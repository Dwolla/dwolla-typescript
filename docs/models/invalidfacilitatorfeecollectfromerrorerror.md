# InvalidFacilitatorFeeCollectFromErrorError

## Example Usage

```typescript
import { InvalidFacilitatorFeeCollectFromErrorError } from "dwolla-typescript";

let value: InvalidFacilitatorFeeCollectFromErrorError = {
  code: "Invalid",
  message: "Unable to charge fee to specified destination.",
  path: "/fees/_links/charge-to/href",
  links: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | Invalid                                                                                                      |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | Unable to charge fee to specified destination.                                                               |
| `path`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | /fees/_links/charge-to/href                                                                                  |
| `links`                                                                                                      | [models.InvalidFacilitatorFeeCollectFromErrorLinks](../models/invalidfacilitatorfeecollectfromerrorlinks.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | {}                                                                                                           |