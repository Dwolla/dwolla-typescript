# Documents

## Example Usage

```typescript
import { Documents } from "dwolla/models";

let value: Documents = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
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
  },
  total: 100,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `links`                                                    | Record<string, [models.HalLink](../models/hallink.md)>     | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `embedded`                                                 | [models.DocumentsEmbedded](../models/documentsembedded.md) | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `total`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 100                                                        |