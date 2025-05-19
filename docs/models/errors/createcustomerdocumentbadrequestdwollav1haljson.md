# CreateCustomerDocumentBadRequestDwollaV1HalJSON

Bad Request


## Supported Types

### `models.MaximumNumberOfResourcesSchema`

```typescript
const value: models.MaximumNumberOfResourcesSchema = {
  code: "maximumNumberOfResources",
  message:
    "Max of four files upload allowed. Please wait for Dwolla to manually check the documents.",
};
```

### `models.InvalidFileTypeSchema`

```typescript
const value: models.InvalidFileTypeSchema = {
  code: "invalidFileType",
  message:
    "File types supported: Personal IDs - .jpg, .jpeg or .png. Business Documents - .jpg, .jpeg, .png, or .pdf.",
};
```

### `models.DuplicateResourceSchema`

```typescript
const value: models.DuplicateResourceSchema = {
  code: "DuplicateResource",
  message: "Bank already exists: id=df8392e5-4c06-42ed-b247-c098ed6f5a11",
  links: {
    about: {
      href:
        "https://api.dwolla.com/funding-sources/df8392e5-4c06-42ed-b247-c098ed6f5a11",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "funding-source",
    },
  },
};
```

