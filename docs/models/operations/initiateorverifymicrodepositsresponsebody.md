# InitiateOrVerifyMicroDepositsResponseBody

Response for microdeposits operations (initiation and verification)

## Example Usage

```typescript
import { InitiateOrVerifyMicroDepositsResponseBody } from "dwolla/models/operations";

let value: InitiateOrVerifyMicroDepositsResponseBody = {
  links: {
    self: {
      href:
        "https://api-sandbox.dwolla.com/funding-sources/2e446d1b-fb3c-42a0-9691-5d1d6a4dbbf0/micro-deposits",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "micro-deposits",
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                        | [operations.InitiateOrVerifyMicroDepositsLinks](../../models/operations/initiateorverifymicrodepositslinks.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |