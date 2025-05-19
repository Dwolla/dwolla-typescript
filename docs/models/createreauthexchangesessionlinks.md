# CreateReAuthExchangeSessionLinks

## Example Usage

```typescript
import { CreateReAuthExchangeSessionLinks } from "dwolla-typescript";

let value: CreateReAuthExchangeSessionLinks = {
  redirectUrl: {
    href:
      "{\"description\":\"Visa example\",\"value\":\"https://www.yourdomain.com/iav-callback\"}",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `redirectUrl`                                                                                        | [models.CreateReAuthExchangeSessionRedirectUrl](../models/createreauthexchangesessionredirecturl.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |