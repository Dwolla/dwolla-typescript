# CreateReAuthExchangeSessionRedirectUrl

## Example Usage

```typescript
import { CreateReAuthExchangeSessionRedirectUrl } from "dwolla-typescript";

let value: CreateReAuthExchangeSessionRedirectUrl = {
  href:
    "{\"description\":\"Plaid iOS example\",\"value\":\"https://example.com/app123\"}",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `href`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Required for Visa and Plaid mobile sessions                                           | {<br/>"description": "Visa example",<br/>"value": "https://www.yourdomain.com/iav-callback"<br/>} |