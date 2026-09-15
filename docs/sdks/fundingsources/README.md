# FundingSources

## Overview

### Available Operations

* [get](#get) - Retrieve a funding source
* [updateOrRemove](#updateorremove) - Update or remove a funding source
* [getVanRouting](#getvanrouting) - Retrieve VAN account and routing numbers

## get

Returns detailed information for a specific funding source, including its type, status, and verification details. Supports bank accounts (via Open Banking), debit card funding sources, and Dwolla balance (verified customers only). Debit card funding sources include masked card details such as brand, last four digits, expiration date, and cardholder name, along with `dateOfBirth` and `countryOfBirth` when those optional identity fields were supplied.

### Example Usage: card_funding_source

<!-- UsageSnippet language="typescript" operationID="getFundingSource" method="get" path="/funding-sources/{id}" example="card_funding_source" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesGet } from "dwolla/funcs/fundingSourcesGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesGet failed:", res.error);
  }
}

run();
```
### Example Usage: settlement_account

<!-- UsageSnippet language="typescript" operationID="getFundingSource" method="get" path="/funding-sources/{id}" example="settlement_account" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesGet } from "dwolla/funcs/fundingSourcesGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesGet failed:", res.error);
  }
}

run();
```
### Example Usage: standard_bank_account

<!-- UsageSnippet language="typescript" operationID="getFundingSource" method="get" path="/funding-sources/{id}" example="standard_bank_account" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesGet } from "dwolla/funcs/fundingSourcesGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFundingSourceRequest](../../models/operations/getfundingsourcerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FundingSource](../../models/fundingsource.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetFundingSourceDwollaV1HalJSONError | 404                                         | application/vnd.dwolla.v1.hal+json          |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |

## updateOrRemove

Updates a bank or debit card funding source's details, or soft deletes it.

For **bank** funding sources you can change the name (any status), or modify routing/account
numbers and account type (unverified status only).

For **debit card** funding sources you can change the name and any field within `cardDetails`,
including the optional cardholder identity fields `dateOfBirth`, `countryOfBirth`, and
`identification`. This is how you add or update those identity values on a card funding source
that already exists.

You must provide at least one updateable field. Bank funding sources cannot be updated with
card fields, and card funding sources cannot be updated with bank fields.

When removing, the funding source is soft deleted and can still be accessed but marked as removed.


### Example Usage: bank_updated_with_card_fields

<!-- UsageSnippet language="typescript" operationID="updateOrRemoveFundingSource" method="post" path="/funding-sources/{id}" example="bank_updated_with_card_fields" -->
```typescript
import { Dwolla } from "dwolla";
import { RFCDate } from "dwolla/types";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.updateOrRemove({
    id: "<id>",
    requestBody: {
      name: "My Visa Debit Card",
      cardDetails: {
        firstName: "Jane",
        lastName: "Doe",
        billingAddress: {
          address1: "123 Main St",
          address2: "Apt 4B",
          address3: "Unit 101",
          city: "Dallas",
          stateProvinceRegion: "TX",
          country: "US",
          postalCode: "76034",
        },
        dateOfBirth: new RFCDate("1990-01-15"),
        countryOfBirth: "US",
        identification: {
          type: "passport",
          number: "P123456",
          country: "GB",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesUpdateOrRemove } from "dwolla/funcs/fundingSourcesUpdateOrRemove.js";
import { RFCDate } from "dwolla/types";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesUpdateOrRemove(dwolla, {
    id: "<id>",
    requestBody: {
      name: "My Visa Debit Card",
      cardDetails: {
        firstName: "Jane",
        lastName: "Doe",
        billingAddress: {
          address1: "123 Main St",
          address2: "Apt 4B",
          address3: "Unit 101",
          city: "Dallas",
          stateProvinceRegion: "TX",
          country: "US",
          postalCode: "76034",
        },
        dateOfBirth: new RFCDate("1990-01-15"),
        countryOfBirth: "US",
        identification: {
          type: "passport",
          number: "P123456",
          country: "GB",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesUpdateOrRemove failed:", res.error);
  }
}

run();
```
### Example Usage: card_updated_with_bank_fields

<!-- UsageSnippet language="typescript" operationID="updateOrRemoveFundingSource" method="post" path="/funding-sources/{id}" example="card_updated_with_bank_fields" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.updateOrRemove({
    id: "<id>",
    requestBody: {
      routingNumber: "222222226",
      accountNumber: "123456789",
      bankAccountType: "checking",
      name: "Jane Doe’s Checking",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesUpdateOrRemove } from "dwolla/funcs/fundingSourcesUpdateOrRemove.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesUpdateOrRemove(dwolla, {
    id: "<id>",
    requestBody: {
      routingNumber: "222222226",
      accountNumber: "123456789",
      bankAccountType: "checking",
      name: "Jane Doe’s Checking",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesUpdateOrRemove failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_country_of_birth

<!-- UsageSnippet language="typescript" operationID="updateOrRemoveFundingSource" method="post" path="/funding-sources/{id}" example="invalid_country_of_birth" -->
```typescript
import { Dwolla } from "dwolla";
import { RFCDate } from "dwolla/types";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.updateOrRemove({
    id: "<id>",
    requestBody: {
      name: "My Visa Debit Card",
      cardDetails: {
        firstName: "Jane",
        lastName: "Doe",
        billingAddress: {
          address1: "123 Main St",
          address2: "Apt 4B",
          address3: "Unit 101",
          city: "Dallas",
          stateProvinceRegion: "TX",
          country: "US",
          postalCode: "76034",
        },
        dateOfBirth: new RFCDate("1990-01-15"),
        countryOfBirth: "US",
        identification: {
          type: "passport",
          number: "P123456",
          country: "GB",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesUpdateOrRemove } from "dwolla/funcs/fundingSourcesUpdateOrRemove.js";
import { RFCDate } from "dwolla/types";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesUpdateOrRemove(dwolla, {
    id: "<id>",
    requestBody: {
      name: "My Visa Debit Card",
      cardDetails: {
        firstName: "Jane",
        lastName: "Doe",
        billingAddress: {
          address1: "123 Main St",
          address2: "Apt 4B",
          address3: "Unit 101",
          city: "Dallas",
          stateProvinceRegion: "TX",
          country: "US",
          postalCode: "76034",
        },
        dateOfBirth: new RFCDate("1990-01-15"),
        countryOfBirth: "US",
        identification: {
          type: "passport",
          number: "P123456",
          country: "GB",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesUpdateOrRemove failed:", res.error);
  }
}

run();
```
### Example Usage: no_fields_to_update

<!-- UsageSnippet language="typescript" operationID="updateOrRemoveFundingSource" method="post" path="/funding-sources/{id}" example="no_fields_to_update" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.updateOrRemove({
    id: "<id>",
    requestBody: {
      removed: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesUpdateOrRemove } from "dwolla/funcs/fundingSourcesUpdateOrRemove.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesUpdateOrRemove(dwolla, {
    id: "<id>",
    requestBody: {
      removed: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesUpdateOrRemove failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateOrRemoveFundingSourceRequest](../../models/operations/updateorremovefundingsourcerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateOrRemoveFundingSourceResponse](../../models/operations/updateorremovefundingsourceresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.UpdateFundingSourceValidationError              | 400                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.UpdateOrRemoveFundingSourceDwollaV1HalJSONError | 403                                                    | application/vnd.dwolla.v1.hal+json                     |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## getVanRouting

Returns the unique account and routing numbers for a Virtual Account Number (VAN) funding source. These numbers can be used by external systems to initiate ACH transactions that pull funds from or push funds to the associated Dwolla balance.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVanRouting" method="get" path="/funding-sources/{id}/ach-routing" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.fundingSources.getVanRouting({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { fundingSourcesGetVanRouting } from "dwolla/funcs/fundingSourcesGetVanRouting.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await fundingSourcesGetVanRouting(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fundingSourcesGetVanRouting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVanRoutingRequest](../../models/operations/getvanroutingrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVanRoutingResponse](../../models/operations/getvanroutingresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.GetVanRoutingDwollaV1HalJSONError | 404                                      | application/vnd.dwolla.v1.hal+json       |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |