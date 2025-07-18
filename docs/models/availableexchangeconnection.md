# AvailableExchangeConnection

## Example Usage

```typescript
import { AvailableExchangeConnection } from "dwolla/models";

let value: AvailableExchangeConnection = {
  availableConnectionToken:
    "eyJhY2NvdW50SWQiOiJBQ1QtMjAxY2FkM2MtYzc2Yi00N2M1LWI3Y2QtMTkxY2FhNzdlZWM5IiwibWVtYmVySWQiOiJNQlItZGNjZWY0ZWMtOGM4MC00NTlmLTlhMGItMTc1ZTA0OTJmZWIzIn0=",
  name: "XYZ Checking",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `availableConnectionToken`                                                                                                                           | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Token representing the external bank account that can be used to create a funding source                                                             | eyJhY2NvdW50SWQiOiJBQ1QtMjAxY2FkM2MtYzc2Yi00N2M1LWI3Y2QtMTkxY2FhNzdlZWM5IiwibWVtYmVySWQiOiJNQlItZGNjZWY0ZWMtOGM4MC00NTlmLTlhMGItMTc1ZTA0OTJmZWIzIn0= |
| `name`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Name of the external bank account                                                                                                                    | XYZ Checking                                                                                                                                         |