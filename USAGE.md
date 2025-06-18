<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientCredentials: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["DWOLLA_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->