# Document

Identity verification document for a customer or beneficial owner

## Example Usage

```typescript
import { Document } from "dwolla/models";

let value: Document = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | [models.DocumentLinks](../models/documentlinks.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the document                                                            | 56502f7a-fa59-4a2f-8579-0f8bc9d7b9cc                                                          |
| `status`                                                                                      | [models.DocumentStatus](../models/documentstatus.md)                                          | :heavy_check_mark:                                                                            | Current status of the document upload                                                         | reviewed                                                                                      |
| `type`                                                                                        | [models.DocumentType](../models/documenttype.md)                                              | :heavy_check_mark:                                                                            | Type of identity document uploaded                                                            | passport                                                                                      |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | ISO-8601 timestamp when the document was uploaded                                             | 2015-09-29T21:42:16.000Z                                                                      |
| `documentVerificationStatus`                                                                  | [models.DocumentVerificationStatus](../models/documentverificationstatus.md)                  | :heavy_check_mark:                                                                            | Verification status of the document after review                                              | rejected                                                                                      |
| `failureReason`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Primary reason why document verification failed (if rejected)                                 | ScanDobMismatch                                                                               |
| `allFailureReasons`                                                                           | [models.AllFailureReason](../models/allfailurereason.md)[]                                    | :heavy_minus_sign:                                                                            | Complete list of all failure reasons if document verification was rejected                    |                                                                                               |