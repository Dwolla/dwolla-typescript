# Customers
(*customers*)

## Overview

Operations related to Customers

### Available Operations

* [list](#list) - List and search customers
* [create](#create) - Create a customer
* [get](#get) - Retrieve a customer
* [update](#update) - Update a customer
* [listAvailableConnections](#listavailableconnections) - List available exchange connections

## list

List and search customers allowing you to filter by email and status, as well as search on key fields such as firstName, lastName, and businessName.

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

## create

Create an unverified customer, verified customer, or receive-only user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCustomer" method="post" path="/customers" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.create({
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    type: "receive-only",
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
import { customersCreate } from "dwolla/funcs/customersCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersCreate(dwolla, {
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    type: "receive-only",
    ipAddress: "143.156.7.8",
    phone: "5555555555",
    correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
    businessName: "Jane Corp llc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerRequest](../../models/operations/createcustomerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerResponse](../../models/operations/createcustomerresponse.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.BadRequestError                             | 400                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.CreateCustomerForbiddenDwollaV1HalJSONError | 403                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.CreateCustomerNotFoundDwollaV1HalJSONError  | 404                                                | application/vnd.dwolla.v1.hal+json                 |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## get

Retrieve details for a single customer

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

Retrieve a list of a customer's external bank accounts that have been authorized through MX Connect.
Each account is represented as an "available exchange connection" with details like the account name and associated availableConnectionToken.
This information is essential for creating an exchange and corresponding funding source within Dwolla.


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