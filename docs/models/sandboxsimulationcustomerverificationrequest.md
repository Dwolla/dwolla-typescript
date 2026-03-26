# SandboxSimulationCustomerVerificationRequest

Simulate a verification directive for a business Verified Customer in Sandbox. The customer must be in
`retry` or `document` status. After a successful call, retrieve the Customer resource; the given `errorCode`
appears under `_embedded.errors`. See Dwolla documentation for verification directive meanings.


## Example Usage

```typescript
import { SandboxSimulationCustomerVerificationRequest } from "dwolla/models";

let value: SandboxSimulationCustomerVerificationRequest = {
  type: "customer-verification",
  links: {
    customer: {
      href:
        "https://api-sandbox.dwolla.com/customers/00000000-0000-0000-0000-000000000000",
    },
  },
  errorCode: "AddressNotAssociatedWithBusiness",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | *"customer-verification"*                                                                                                          | :heavy_check_mark:                                                                                                                 | Must be set to customer-verification for verification directive simulation.                                                        |                                                                                                                                    |
| `links`                                                                                                                            | [models.SandboxSimulationCustomerVerificationRequestLinks](../models/sandboxsimulationcustomerverificationrequestlinks.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `errorCode`                                                                                                                        | [models.SandboxSimulationCustomerVerificationRequestErrorCode](../models/sandboxsimulationcustomerverificationrequesterrorcode.md) | :heavy_check_mark:                                                                                                                 | Verification directive to simulate for the linked customer.                                                                        | AddressNotAssociatedWithBusiness                                                                                                   |