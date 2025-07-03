# AccessPeriod

## Example Usage

```typescript
import { AccessPeriod } from "dwolla-typescript/models";
import { RFCDate } from "dwolla-typescript/types";

let value: AccessPeriod = {
  type: "timeframe",
  startTime: new RFCDate("2022-07-06"),
  endTime: new Date("2022-08-16T06:06:20Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | timeframe                                                                                     |
| `startTime`                                                                                   | [RFCDate](../types/rfcdate.md)                                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-07-06                                                                                    |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-08-16T06:06:20Z                                                                          |