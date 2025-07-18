# CreateWebhookSubscriptionRequest

Parameters to create a webhook subscriptions

## Example Usage

```typescript
import { CreateWebhookSubscriptionRequest } from "dwolla/models/operations";

let value: CreateWebhookSubscriptionRequest = {
  url: "http://myapplication.com/webhooks",
  secret: "sshhhhhh",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `url`                             | *string*                          | :heavy_check_mark:                | N/A                               | http://myapplication.com/webhooks |
| `secret`                          | *string*                          | :heavy_check_mark:                | N/A                               | sshhhhhh                          |