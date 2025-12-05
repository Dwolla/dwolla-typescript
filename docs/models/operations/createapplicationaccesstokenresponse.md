# CreateApplicationAccessTokenResponse

successful operation

## Example Usage

```typescript
import { CreateApplicationAccessTokenResponse } from "dwolla/models/operations";

let value: CreateApplicationAccessTokenResponse = {
  accessToken: "gTm0p62yYXFiB1rOdhV0TsNOinC2V2P1CMaAtojkO9JEGbv3i5",
  tokenType: "Bearer",
  expiresIn: 3599,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | A new access token that is used to authenticate against resources that belong to the app itself. | gTm0p62yYXFiB1rOdhV0TsNOinC2V2P1CMaAtojkO9JEGbv3i5                                               |
| `tokenType`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The type of token, always "Bearer"                                                               | Bearer                                                                                           |
| `expiresIn`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | The lifetime of the access token, in seconds. Default is 3600.                                   | 3599                                                                                             |