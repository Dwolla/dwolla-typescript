# DocumentsEmbedded

## Example Usage

```typescript
import { DocumentsEmbedded } from "dwolla/models";

let value: DocumentsEmbedded = {
  documents: [
    {
      links: {
        self: {
          href: "https://api.dwolla.com",
          type: "application/vnd.dwolla.v1.hal+json",
          resourceType: "resource-type",
        },
      },
      id: "56502f7a-fa59-4a2f-8579-0f8bc9d7b9cc",
      status: "reviewed",
      type: "passport",
      created: new Date("2015-09-29T21:42:16.000Z"),
      documentVerificationStatus: "rejected",
      failureReason: "ScanDobMismatch",
      allFailureReasons: [
        {
          reason: "ScanDobMismatch",
          description: "Scan DOB does not match DOB on account",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `documents`                                | [models.Document](../models/document.md)[] | :heavy_minus_sign:                         | N/A                                        |