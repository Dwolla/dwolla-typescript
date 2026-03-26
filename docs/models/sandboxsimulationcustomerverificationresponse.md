# SandboxSimulationCustomerVerificationResponse

Response when simulating customer verification directives (200 OK). Echoes the simulated `errorCode`;
retrieve the Customer resource to inspect `_embedded.errors`.


## Example Usage

```typescript
import { SandboxSimulationCustomerVerificationResponse } from "dwolla/models";

let value: SandboxSimulationCustomerVerificationResponse = {
  links: {
    self: {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  errorCode: "AddressNotAssociatedWithBusiness",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `links`                                                                                                                              | [models.SandboxSimulationCustomerVerificationResponseLinks](../models/sandboxsimulationcustomerverificationresponselinks.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `errorCode`                                                                                                                          | [models.SandboxSimulationCustomerVerificationResponseErrorCode](../models/sandboxsimulationcustomerverificationresponseerrorcode.md) | :heavy_check_mark:                                                                                                                   | Verification directive that was simulated.                                                                                           | AddressNotAssociatedWithBusiness                                                                                                     |