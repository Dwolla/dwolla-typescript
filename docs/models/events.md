# Events

## Example Usage

```typescript
import { Events } from "dwolla-typescript";

let value: Events = {
  additionalProperties: {
    href: "https://api.dwolla.com",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "resource-type",
  },
  embedded: {
    events: [
      {
        links: {
          "key": {
            href: "https://api.dwolla.com",
            type: "application/vnd.dwolla.v1.hal+json",
            resourceType: "resource-type",
          },
        },
        id: "81f6e13c-557c-4449-9331-da5c65e61095",
        created: new Date("2015-10-16T15:37:02.000Z"),
        topic: "customer_transfer_created",
        resourceId: "09A166BC-1B74-E511-80DB-0AA34A9B2388",
      },
    ],
  },
  total: 3,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `links`                                              | [models.EventsLinks](../models/eventslinks.md)       | :heavy_minus_sign:                                   | N/A                                                  |                                                      |
| `additionalProperties`                               | [models.HalLink](../models/hallink.md)               | :heavy_minus_sign:                                   | N/A                                                  |                                                      |
| `embedded`                                           | [models.EventsEmbedded](../models/eventsembedded.md) | :heavy_minus_sign:                                   | N/A                                                  |                                                      |
| `total`                                              | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 3                                                    |