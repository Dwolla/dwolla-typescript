<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla();

async function run() {
  const result = await dwolla.tokens.createApplicationAccessToken({
    username: "",
    password: "",
  }, {
    grantType: "client_credentials",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->