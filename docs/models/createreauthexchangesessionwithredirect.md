# CreateReAuthExchangeSessionWithRedirect

Create re-auth exchange session with redirect URL (required for mobile sessions with Plaid)

## Example Usage

```typescript
import { CreateReAuthExchangeSessionWithRedirect } from "dwolla/models";

let value: CreateReAuthExchangeSessionWithRedirect = {
  links: {
    redirectUrl: {
      href:
        "{\"description\":\"Plaid Android example\",\"value\":\"com.example.app123\"}",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                          | [models.CreateReAuthExchangeSessionWithRedirectLinks](../models/createreauthexchangesessionwithredirectlinks.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |