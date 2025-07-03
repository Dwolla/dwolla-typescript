# EventsEmbedded

## Example Usage

```typescript
import { EventsEmbedded } from "dwolla-typescript/models";

let value: EventsEmbedded = {
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
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `events`                             | [models.Event](../models/event.md)[] | :heavy_minus_sign:                   | N/A                                  |