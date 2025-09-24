# Customers
(*customers*)

## Overview

Operations related to Customers

### Available Operations

* [list](#list) - List and search customers
* [get](#get) - Retrieve a customer
* [update](#update) - Update a customer
* [listAvailableConnections](#listavailableconnections) - List available exchange connections
* [createUnverified](#createunverified) - Create an unverified customer
* [createReceiveOnly](#createreceiveonly) - Create a receive-only user
* [createVerifiedPersonal](#createverifiedpersonal) - Create a verified personal customer
* [createVerifiedSoleProp](#createverifiedsoleprop) - Create a verified sole proprietorship customer
* [createVerifiedBusiness](#createverifiedbusiness) - Create a verified business customer
* [createVerifiedBusinessInternational](#createverifiedbusinessinternational) - Create a verified business customer with international controller

## list

Returns a paginated list of customers sorted by creation date. Supports fuzzy search across customer names, business names, and email addresses, plus exact filtering by email and verification status. Default limit is 25 customers per page, maximum 200.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAndSearchCustomers" method="get" path="/customers" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersList } from "dwolla/funcs/customersList.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersList(dwolla, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAndSearchCustomersRequest](../../models/operations/listandsearchcustomersrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Customers](../../models/customers.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ForbiddenError              | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## get

Retrieve identifying information for a specific customer. The returned data varies by customer type - verified customers include contact details, address information, and verification status, while unverified customers and receive-only users contain basic contact information only.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCustomer" method="get" path="/customers/{id}" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.get({
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
import { customersGet } from "dwolla/funcs/customersGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.GetCustomerForbiddenDwollaV1HalJSONError | 403                                             | application/vnd.dwolla.v1.hal+json              |
| errors.GetCustomerNotFoundDwollaV1HalJSONError  | 404                                             | application/vnd.dwolla.v1.hal+json              |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## update

Update Customer information, upgrade an unverified Customer to a verified Customer, suspend a Customer, deactivate a Customer, reactivate a Customer, and update a verified Customer's information to retry verification.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update" method="post" path="/customers/{id}" -->
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
  const result = await dwolla.customers.update({
    id: "<id>",
    requestBody: {
      firstName: "Account",
      lastName: "Admin",
      email: "accountAdmin@email.com",
      ipAddress: "143.156.7.8",
      type: "business",
      address1: "99-99 33rd St",
      city: "Some City",
      state: "NY",
      postalCode: "11101",
      controller: {
        firstName: "John",
        lastName: "Controller",
        title: "CEO",
        ssn: "6789",
        dateOfBirth: new RFCDate("1980-01-31"),
        address: {
          address1: "1749 18th st",
          address2: "apt 12",
          city: "Des Moines",
          stateProvinceRegion: "IA",
          postalCode: "50266",
          country: "US",
        },
      },
      businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
      businessType: "llc",
      businessName: "Jane Corp",
      ein: "00-0000000",
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
import { customersUpdate } from "dwolla/funcs/customersUpdate.js";
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
  const res = await customersUpdate(dwolla, {
    id: "<id>",
    requestBody: {
      firstName: "Account",
      lastName: "Admin",
      email: "accountAdmin@email.com",
      ipAddress: "143.156.7.8",
      type: "business",
      address1: "99-99 33rd St",
      city: "Some City",
      state: "NY",
      postalCode: "11101",
      controller: {
        firstName: "John",
        lastName: "Controller",
        title: "CEO",
        ssn: "6789",
        dateOfBirth: new RFCDate("1980-01-31"),
        address: {
          address1: "1749 18th st",
          address2: "apt 12",
          city: "Des Moines",
          stateProvinceRegion: "IA",
          postalCode: "50266",
          country: "US",
        },
      },
      businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
      businessType: "llc",
      businessName: "Jane Corp",
      ein: "00-0000000",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRequest](../../models/operations/updaterequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateResponse](../../models/operations/updateresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.UpdateBadRequestDwollaV1HalJSONError | 400                                         | application/vnd.dwolla.v1.hal+json          |
| errors.UpdateForbiddenDwollaV1HalJSONError  | 403                                         | application/vnd.dwolla.v1.hal+json          |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |

## listAvailableConnections

Returns available exchange connections for a customer's bank accounts authorized through MX Connect. Each connection includes an account name and availableConnectionToken required to create exchanges and funding sources for transfers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAvailableExchangeConnections" method="get" path="/customers/{id}/available-exchange-connections" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.listAvailableConnections({
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
import { customersListAvailableConnections } from "dwolla/funcs/customersListAvailableConnections.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersListAvailableConnections(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersListAvailableConnections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAvailableExchangeConnectionsRequest](../../models/operations/listavailableexchangeconnectionsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AvailableExchangeConnections](../../models/availableexchangeconnections.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ListAvailableExchangeConnectionsDwollaV1HalJSONError | 404                                                         | application/vnd.dwolla.v1.hal+json                          |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## createUnverified

Creates a new unverified customer with basic information. Unverified customers have limited transaction capabilities.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUnverifiedCustomer" method="post" path="/customers#unverified" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.createUnverified({
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    businessName: "Jane Corp llc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersCreateUnverified } from "dwolla/funcs/customersCreateUnverified.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersCreateUnverified(dwolla, {
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    businessName: "Jane Corp llc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateUnverified failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateUnverifiedCustomer](../../models/createunverifiedcustomer.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateUnverifiedCustomerResponse](../../models/operations/createunverifiedcustomerresponse.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.CreateUnverifiedCustomerBadRequestDwollaV1HalJSONError | 400                                                           | application/vnd.dwolla.v1.hal+json                            |
| errors.CreateUnverifiedCustomerForbiddenDwollaV1HalJSONError  | 403                                                           | application/vnd.dwolla.v1.hal+json                            |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## createReceiveOnly

Creates a new receive-only user who can only receive funds, not send them.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createReceiveOnlyCustomer" method="post" path="/customers#receive-only" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.createReceiveOnly({
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    businessName: "Jane Corp llc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersCreateReceiveOnly } from "dwolla/funcs/customersCreateReceiveOnly.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersCreateReceiveOnly(dwolla, {
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    businessName: "Jane Corp llc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateReceiveOnly failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateReceiveOnlyUser](../../models/createreceiveonlyuser.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateReceiveOnlyCustomerResponse](../../models/operations/createreceiveonlycustomerresponse.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.CreateReceiveOnlyCustomerBadRequestDwollaV1HalJSONError | 400                                                            | application/vnd.dwolla.v1.hal+json                             |
| errors.CreateReceiveOnlyCustomerForbiddenDwollaV1HalJSONError  | 403                                                            | application/vnd.dwolla.v1.hal+json                             |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## createVerifiedPersonal

Creates a new verified personal customer with full transaction capabilities.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createVerifiedPersonalCustomer" method="post" path="/customers#verified-personal" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.createVerifiedPersonal({
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    ssn: "1234",
    dateOfBirth: "1980-09-12",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersCreateVerifiedPersonal } from "dwolla/funcs/customersCreateVerifiedPersonal.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersCreateVerifiedPersonal(dwolla, {
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    ssn: "1234",
    dateOfBirth: "1980-09-12",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateVerifiedPersonal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateVerifiedPersonalCustomer](../../models/createverifiedpersonalcustomer.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateVerifiedPersonalCustomerResponse](../../models/operations/createverifiedpersonalcustomerresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.CreateVerifiedPersonalCustomerBadRequestDwollaV1HalJSONError | 400                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.CreateVerifiedPersonalCustomerForbiddenDwollaV1HalJSONError  | 403                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## createVerifiedSoleProp

Creates a new verified sole proprietorship business customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createVerifiedSolePropCustomer" method="post" path="/customers#verified-sole-prop" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.createVerifiedSoleProp({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    ssn: "1234",
    dateOfBirth: "1980-09-12",
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessName: "Jane Corp",
    doingBusinessAs: "Jane's Electronics",
    ein: "00-0000000",
    website: "https://www.domain.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersCreateVerifiedSoleProp } from "dwolla/funcs/customersCreateVerifiedSoleProp.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersCreateVerifiedSoleProp(dwolla, {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    ssn: "1234",
    dateOfBirth: "1980-09-12",
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessName: "Jane Corp",
    doingBusinessAs: "Jane's Electronics",
    ein: "00-0000000",
    website: "https://www.domain.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateVerifiedSoleProp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateVerifiedSolePropCustomer](../../models/createverifiedsolepropcustomer.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateVerifiedSolePropCustomerResponse](../../models/operations/createverifiedsolepropcustomerresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.CreateVerifiedSolePropCustomerBadRequestDwollaV1HalJSONError | 400                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.CreateVerifiedSolePropCustomerForbiddenDwollaV1HalJSONError  | 403                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## createVerifiedBusiness

Creates a new verified business customer with a US controller.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createVerifiedBusinessCustomer" method="post" path="/customers#verified-business" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.createVerifiedBusiness({
    firstName: "Jane",
    lastName: "Business",
    email: "jane.business@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessName: "Jane Corp",
    doingBusinessAs: "Jane's Electronics",
    ein: "00-0000000",
    website: "https://www.domain.com",
    controller: {
      firstName: "John",
      lastName: "Controller",
      title: "CEO",
      dateOfBirth: "1980-01-31",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      ssn: "1234",
    },
    businessType: "llc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersCreateVerifiedBusiness } from "dwolla/funcs/customersCreateVerifiedBusiness.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersCreateVerifiedBusiness(dwolla, {
    firstName: "Jane",
    lastName: "Business",
    email: "jane.business@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessName: "Jane Corp",
    doingBusinessAs: "Jane's Electronics",
    ein: "00-0000000",
    website: "https://www.domain.com",
    controller: {
      firstName: "John",
      lastName: "Controller",
      title: "CEO",
      dateOfBirth: "1980-01-31",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      ssn: "1234",
    },
    businessType: "llc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateVerifiedBusiness failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateVerifiedBusinessCustomerWithController](../../models/createverifiedbusinesscustomerwithcontroller.md)                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateVerifiedBusinessCustomerResponse](../../models/operations/createverifiedbusinesscustomerresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.CreateVerifiedBusinessCustomerBadRequestDwollaV1HalJSONError | 400                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.CreateVerifiedBusinessCustomerForbiddenDwollaV1HalJSONError  | 403                                                                 | application/vnd.dwolla.v1.hal+json                                  |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## createVerifiedBusinessInternational

Creates a new verified business customer with an international (non-US) controller.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createVerifiedBusinessInternationalCustomer" method="post" path="/customers#verified-business-international" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.createVerifiedBusinessInternational({
    firstName: "Jane",
    lastName: "Business",
    email: "jane.business@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessName: "Jane Corp",
    doingBusinessAs: "Jane's Electronics",
    ein: "00-0000000",
    website: "https://www.domain.com",
    controller: {
      firstName: "John",
      lastName: "Controller",
      title: "CEO",
      dateOfBirth: "1980-01-31",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      passport: {
        number: "<value>",
        country: "Zimbabwe",
      },
    },
    businessType: "llc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { customersCreateVerifiedBusinessInternational } from "dwolla/funcs/customersCreateVerifiedBusinessInternational.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersCreateVerifiedBusinessInternational(dwolla, {
    firstName: "Jane",
    lastName: "Business",
    email: "jane.business@email.com",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    address1: "99-99 33rd St",
    address2: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessName: "Jane Corp",
    doingBusinessAs: "Jane's Electronics",
    ein: "00-0000000",
    website: "https://www.domain.com",
    controller: {
      firstName: "John",
      lastName: "Controller",
      title: "CEO",
      dateOfBirth: "1980-01-31",
      address: {
        address1: "462 Main Street",
        address2: "Suite 123",
        address3: "Unit 123",
        city: "Des Moines",
        postalCode: "50309",
        country: "USA",
        stateProvinceRegion: "IA",
      },
      passport: {
        number: "<value>",
        country: "Zimbabwe",
      },
    },
    businessType: "llc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateVerifiedBusinessInternational failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateVerifiedBusinessCustomerWithInternationalController](../../models/createverifiedbusinesscustomerwithinternationalcontroller.md)                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateVerifiedBusinessInternationalCustomerResponse](../../models/operations/createverifiedbusinessinternationalcustomerresponse.md)\>**

### Errors

| Error Type                                                                       | Status Code                                                                      | Content Type                                                                     |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| errors.CreateVerifiedBusinessInternationalCustomerBadRequestDwollaV1HalJSONError | 400                                                                              | application/vnd.dwolla.v1.hal+json                                               |
| errors.CreateVerifiedBusinessInternationalCustomerForbiddenDwollaV1HalJSONError  | 403                                                                              | application/vnd.dwolla.v1.hal+json                                               |
| errors.APIError                                                                  | 4XX, 5XX                                                                         | \*/\*                                                                            |