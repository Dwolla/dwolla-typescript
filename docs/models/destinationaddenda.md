# DestinationAddenda

Contains addenda information for the transfer

## Example Usage

```typescript
import { DestinationAddenda } from "dwolla/models";

let value: DestinationAddenda = {
  values: [
    "ZYX987_AddendaValue",
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `values`                                          | *string*[]                                        | :heavy_minus_sign:                                | An array containing a single string addenda value |