# SandboxSimulationBankProcessingResponse

Response when simulating bank transfer processing (200 OK).

## Example Usage

```typescript
import { SandboxSimulationBankProcessingResponse } from "dwolla/models";

let value: SandboxSimulationBankProcessingResponse = {
  total: 8,
  links: {
    self: {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `total`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Count of bank transfers (and related items) affected by the simulation run.                                      | 8                                                                                                                |
| `links`                                                                                                          | [models.SandboxSimulationBankProcessingResponseLinks](../models/sandboxsimulationbankprocessingresponselinks.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |