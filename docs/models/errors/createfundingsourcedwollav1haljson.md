# CreateFundingSourceDwollaV1HalJSON

Bad request or duplicate resource


## Supported Types

### `errors.BadRequestSchemaError`

```typescript
const value: errors.BadRequestSchemaError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    code: "ValidationError",
    message:
      "Validation error(s) present. See embedded errors list for more details.",
  },
};
```

### `errors.DuplicateResourceSchemaError`

```typescript
const value: errors.DuplicateResourceSchemaError = {
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

