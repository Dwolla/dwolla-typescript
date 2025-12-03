<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla();

async function run() {
  const result = await dwolla.tokens.create({
    basicAuth: process.env["DWOLLA_BASIC_AUTH"] ?? "",
  }, {
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->