# GetMicroDepositsResponse

successful operation

## Example Usage

```typescript
import { GetMicroDepositsResponse } from "dwolla/models/operations";

let value: GetMicroDepositsResponse = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  created: new Date("2022-12-30T20:56:53.000Z"),
  status: "failed",
  failure: {
    code: "R03",
    description: "No Account/Unable to locate account",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../../models/hallink.md)>                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-12-30T20:56:53.000Z                                                                      |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | failed                                                                                        |
| `failure`                                                                                     | [operations.Failure](../../models/operations/failure.md)                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |