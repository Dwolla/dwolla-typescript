# InvalidKbaSessionError

## Example Usage

```typescript
import { InvalidKbaSessionError } from "dwolla-typescript";

let value: InvalidKbaSessionError = {
  code: "InvalidResourceState",
  message: "The kba session is no longer valid.",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `code`                              | *string*                            | :heavy_check_mark:                  | N/A                                 | InvalidResourceState                |
| `message`                           | *string*                            | :heavy_check_mark:                  | N/A                                 | The kba session is no longer valid. |