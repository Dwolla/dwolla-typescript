# InitiateOrVerifyMicroDepositsResponse

## Example Usage

```typescript
import { InitiateOrVerifyMicroDepositsResponse } from "dwolla/models/operations";

let value: InitiateOrVerifyMicroDepositsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    links: {
      self: {
        href:
          "https://api-sandbox.dwolla.com/funding-sources/2e446d1b-fb3c-42a0-9691-5d1d6a4dbbf0/micro-deposits",
        type: "application/vnd.dwolla.v1.hal+json",
        resourceType: "micro-deposits",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                    | Record<string, *string*[]>                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `result`                                                                                                                     | [operations.InitiateOrVerifyMicroDepositsResponseBody](../../models/operations/initiateorverifymicrodepositsresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |