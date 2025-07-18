# CreateApplicationAccessTokenRequest

OAuth get token request. Client credentials are sent in the Authorization header using Basic authentication.

## Example Usage

```typescript
import { CreateApplicationAccessTokenRequest } from "dwolla/models/operations";

let value: CreateApplicationAccessTokenRequest = {
  grantType: "client_credentials",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `grantType`                                                  | [operations.GrantType](../../models/operations/granttype.md) | :heavy_check_mark:                                           | Must be set to "client_credentials"                          | client_credentials                                           |