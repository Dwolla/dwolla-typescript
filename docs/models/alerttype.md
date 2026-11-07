# AlertType

The kind of alert. Currently the only value is `unusual-transfer-activity`. More types may be added in the future, so handle values you don't recognize.


## Example Usage

```typescript
import { AlertType } from "dwolla/models";

let value: AlertType = "unusual-transfer-activity";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"unusual-transfer-activity" | Unrecognized<string>
```