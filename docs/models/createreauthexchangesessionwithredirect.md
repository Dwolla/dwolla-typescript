# CreateReAuthExchangeSessionWithRedirect

Create re-auth exchange session with redirect URL (required for mobile sessions with Visa and Plaid)

## Example Usage

```typescript
import { CreateReAuthExchangeSessionWithRedirect } from "dwolla-typescript/models";

let value: CreateReAuthExchangeSessionWithRedirect = {
  links: {
    redirectUrl: {
      href:
        "{\"description\":\"Visa example\",\"value\":\"https://www.yourdomain.com/iav-callback\"}",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                          | [models.CreateReAuthExchangeSessionWithRedirectLinks](../models/createreauthexchangesessionwithredirectlinks.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |