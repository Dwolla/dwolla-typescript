# Customers

## Overview

Operations related to Customers

### Available Operations

* [list](#list) - List and search customers
* [create](#create) - Create a customer
* [get](#get) - Retrieve a customer
* [update](#update) - Update a customer
* [listAvailableConnections](#listavailableconnections) - List available exchange connections

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

## create

Creates a new customer with different verification levels and capabilities. Supports personal verified customers (individuals), business verified customers (businesses), unverified customers, and receive-only users. Customer type determines transaction limits, verification requirements, and available features.

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
      "firstName": "Business",
      "lastName": "Owner",
      "email": "solePropBusiness@email.com",
      "type": "business",
      "dateOfBirth": "1980-01-31",
      "ssn": "6789",
      "address1": "99-99 33rd St",
      "city": "Some City",
      "state": "NY",
      "postalCode": "11101",
      "businessClassification": "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
      "businessType": "soleProprietorship",
      "businessName": "Jane Corp",
      "ein": "00-0000000",
      "operationType": "upgradeToVerifiedSoleProp",
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
      "firstName": "Business",
      "lastName": "Owner",
      "email": "solePropBusiness@email.com",
      "type": "business",
      "dateOfBirth": "1980-01-31",
      "ssn": "6789",
      "address1": "99-99 33rd St",
      "city": "Some City",
      "state": "NY",
      "postalCode": "11101",
      "businessClassification": "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
      "businessType": "soleProprietorship",
      "businessName": "Jane Corp",
      "ein": "00-0000000",
      "operationType": "upgradeToVerifiedSoleProp",
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