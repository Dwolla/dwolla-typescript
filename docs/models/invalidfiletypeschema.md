# InvalidFileTypeSchema

## Example Usage

```typescript
import { InvalidFileTypeSchema } from "dwolla-typescript";

let value: InvalidFileTypeSchema = {
  code: "invalidFileType",
  message:
    "File types supported: Personal IDs - .jpg, .jpeg or .png. Business Documents - .jpg, .jpeg, .png, or .pdf.",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | invalidFileType                                                                                            |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | File types supported: Personal IDs - .jpg, .jpeg or .png. Business Documents - .jpg, .jpeg, .png, or .pdf. |