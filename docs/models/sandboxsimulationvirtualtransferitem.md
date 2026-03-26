# SandboxSimulationVirtualTransferItem

One simulated external (VAN) transfer in a sandbox-simulations request.

## Example Usage

```typescript
import { SandboxSimulationVirtualTransferItem } from "dwolla/models";

let value: SandboxSimulationVirtualTransferItem = {
  link: {
    destination: {
      href:
        "https://api-sandbox.dwolla.com/funding-sources/5880e310-675a-4ce3-87d9-a475cc565e09",
    },
  },
  amount: {
    value: "5.00",
    currency: "USD",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `link`                                                                          | [models.Link](../models/link.md)                                                | :heavy_check_mark:                                                              | Link wrapper for the destination funding source (Dwolla HAL-style single link). |
| `amount`                                                                        | [models.TransferAmount](../models/transferamount.md)                            | :heavy_check_mark:                                                              | N/A                                                                             |