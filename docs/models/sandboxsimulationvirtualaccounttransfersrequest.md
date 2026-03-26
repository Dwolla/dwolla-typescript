# SandboxSimulationVirtualAccountTransfersRequest

Simulate Virtual Account Number (VAN) / external transfers in Sandbox. Up to 10 transfers per request;
transfers are created and processed immediately. Successful response is 202 Accepted.


## Example Usage

```typescript
import { SandboxSimulationVirtualAccountTransfersRequest } from "dwolla/models";

let value: SandboxSimulationVirtualAccountTransfersRequest = {
  type: "virtual",
  transfers: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"virtual"*                                                                                        | :heavy_check_mark:                                                                                 | Must be set to virtual for VAN transfer simulation.                                                |
| `transfers`                                                                                        | [models.SandboxSimulationVirtualTransferItem](../models/sandboxsimulationvirtualtransferitem.md)[] | :heavy_check_mark:                                                                                 | Transfers to simulate (max 10 per request).                                                        |