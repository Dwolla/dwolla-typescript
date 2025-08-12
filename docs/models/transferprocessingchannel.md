# TransferProcessingChannel

## Example Usage

```typescript
import { TransferProcessingChannel } from "dwolla/models";

let value: TransferProcessingChannel = {
  destination: "real-time-payments",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `destination`                                          | [models.DestinationEnum](../models/destinationenum.md) | :heavy_minus_sign:                                     | The payment network used to process the transfer       | real-time-payments                                     |