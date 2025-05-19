# CreateCustomerExchangeSessionRedirectUrl

## Example Usage

```typescript
import { CreateCustomerExchangeSessionRedirectUrl } from "dwolla-typescript";

let value: CreateCustomerExchangeSessionRedirectUrl = {
  href:
    "{\"description\":\"Visa example\",\"value\":\"https://www.yourdomain.com/iav-callback\"}",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `href`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Required for Visa and Plaid mobile sessions                                           | {<br/>"description": "Visa example",<br/>"value": "https://www.yourdomain.com/iav-callback"<br/>} |