# Webhook

## Example Usage

```typescript
import { Webhook } from "dwolla/models";

let value: Webhook = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8",
    },
    subscription: {
      href:
        "https://api.dwolla.com/webhook-subscriptions/a0943041-7a5c-4e8f-92de-b55711ef3a83",
    },
    retry: {
      href:
        "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8/retries",
    },
    event: {
      href:
        "https://api.dwolla.com/events/03c7e14c-7f15-44a2-bcf7-83f2f7e95d50",
    },
  },
  id: "9ece9660-aa34-41eb-80d7-0125d53b45e8",
  topic: "transfer_created",
  accountId: "ca32853c-48fa-40be-ae75-77b37504581b",
  eventId: "03c7e14c-7f15-44a2-bcf7-83f2f7e95d50",
  subscriptionId: "a0943041-7a5c-4e8f-92de-b55711ef3a83",
  attempts: [
    {
      id: "d4d16621-c6b0-40cb-8dc3-0469fa9dc4e8",
      request: {
        timestamp: new Date("2022-10-27T17:07:34.304Z"),
        url: "https://myapp.runscope.net",
        headers: [
          {
            name: "X-Dwolla-Topic",
            value: "transfer_created",
          },
        ],
        body:
          "id:03c7e14c-7f15-44a2-bcf7-83f2f7e95d50resourceId:81BA6F36-CD7C-E511-80DB-0AA34A9B2388topic:transfer_createdtimestamp:2022-10-27T17:07:34.207Z_links:self:href:https://api.dwolla.com/events/03c7e14c-7f15-44a2-bcf7-83f2f7e95d50account:href:https://api.dwolla.com/accounts/ca32853c-48fa-40be-ae75-77b37504581bresource:href:https://api.dwolla.com/transfers/81BA6F36-CD7C-E511-80DB-0AA34A9B2388",
      },
      response: {
        timestamp: new Date("2022-10-27T17:07:34.308Z"),
        headers: [
          {
            name: "Date",
            value: "Tue 27 Oct 2022 17:07:34 GMT",
          },
        ],
        statusCode: 200,
        body:
          "body:id:03c7e14c-7f15-44a2-bcf7-83f2f7e95d50resourceId:81BA6F36-CD7C-E511-80DB-0AA34A9B2388topic:transfer_createdtimestamp:2022-10-27T17:07:34.207Z_links:self:href:https://api.dwolla.com/events/03c7e14c-7f15-44a2-bcf7-83f2f7e95d50account:href:https://api.dwolla.com/accounts/ca32853c-48fa-40be-ae75-77b37504581bresource:href:https://api.dwolla.com/transfers/81BA6F36-CD7C-E511-80DB-0AA34A9B2388files:[]form:fragment:headers:Connection:[close]Content-Length:[453]Content-Type:[application/json; charset=UTF-8]Host:[myapp.runscope.net]User-Agent:[dwolla-webhooks/1.0]X-Dwolla-Topic:[transfer_created]X-Request-Signature:[bd93780bd7e1ad77ab821094aaa0f9e3dece5ee3]host:myapp.runscope.netmethod:POSTparams:path:/region:us5runscope_host:prod078.runscope.inscheme:httpssource:capturesource_ip:52.24.10.184timestamp:1.4459656543078682e+09url:https://myapp.runscope.net/",
      },
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `links`                                          | [models.WebhookLinks](../models/webhooklinks.md) | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | N/A                                              | 9ece9660-aa34-41eb-80d7-0125d53b45e8             |
| `topic`                                          | *string*                                         | :heavy_minus_sign:                               | N/A                                              | transfer_created                                 |
| `accountId`                                      | *string*                                         | :heavy_minus_sign:                               | N/A                                              | ca32853c-48fa-40be-ae75-77b37504581b             |
| `eventId`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              | 03c7e14c-7f15-44a2-bcf7-83f2f7e95d50             |
| `subscriptionId`                                 | *string*                                         | :heavy_minus_sign:                               | N/A                                              | a0943041-7a5c-4e8f-92de-b55711ef3a83             |
| `attempts`                                       | [models.Attempt](../models/attempt.md)[]         | :heavy_minus_sign:                               | N/A                                              |                                                  |