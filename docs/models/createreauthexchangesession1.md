# CreateReAuthExchangeSession1

## Example Usage

```typescript
import { CreateReAuthExchangeSession1 } from "dwolla-typescript";

let value: CreateReAuthExchangeSession1 = {
  links: {
    redirectUrl: {
      href:
        "{\"description\":\"Visa example\",\"value\":\"https://www.yourdomain.com/iav-callback\"}",
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `links`                                                                                  | [models.CreateReAuthExchangeSessionLinks](../models/createreauthexchangesessionlinks.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |