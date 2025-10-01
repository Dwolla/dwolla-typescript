# SourceAddenda

Contains addenda information for the transfer

## Example Usage

```typescript
import { SourceAddenda } from "dwolla/models";

let value: SourceAddenda = {
  values: [
    "ABC123_AddendaValue",
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `values`                                          | *string*[]                                        | :heavy_minus_sign:                                | An array containing a single string addenda value |