# Link

Link wrapper for the destination funding source (Dwolla HAL-style single link).

## Example Usage

```typescript
import { Link } from "dwolla/models";

let value: Link = {
  destination: {
    href:
      "https://api-sandbox.dwolla.com/funding-sources/5880e310-675a-4ce3-87d9-a475cc565e09",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `destination`                                                                                                          | [models.SandboxSimulationVirtualTransferItemDestination](../models/sandboxsimulationvirtualtransferitemdestination.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |