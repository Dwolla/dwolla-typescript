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
  achDetails: {
    deposit1: {
      traceId: "273976360000105",
    },
    deposit2: {
      traceId: "273976360000106",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             | Example                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                                 | Record<string, [models.HalLink](../../models/hallink.md)>                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |
| `created`                                                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     | 2022-12-30T20:56:53.000Z                                                                                                                                                                                |
| `status`                                                                                                                                                                                                | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     | failed                                                                                                                                                                                                  |
| `failure`                                                                                                                                                                                               | [operations.Failure](../../models/operations/failure.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |
| `achDetails`                                                                                                                                                                                            | [operations.GetMicroDepositsAchDetails](../../models/operations/getmicrodepositsachdetails.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                      | ACH details for each micro-deposit. Optional; only returned when ACH details are available for the micro-deposits. `deposit1` or `deposit2` may be omitted if details for that deposit are unavailable. |                                                                                                                                                                                                         |