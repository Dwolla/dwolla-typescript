# Customers.FundingSources

## Overview

### Available Operations

* [list](#list) - List customer funding sources
* [create](#create) - Create customer funding source

## list

Returns all funding sources for a customer, including bank accounts, debit card funding sources, and Dwolla balance (verified customers only). Shows verification status, limited account details, and creation dates. Card funding sources include masked card information. Supports filtering to exclude removed funding sources using the removed parameter.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCustomerFundingSources" method="get" path="/customers/{id}/funding-sources" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.fundingSources.list({
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
import { customersFundingSourcesList } from "dwolla/funcs/customersFundingSourcesList.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersFundingSourcesList(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersFundingSourcesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomerFundingSourcesRequest](../../models/operations/listcustomerfundingsourcesrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FundingSources](../../models/fundingsources.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ListCustomerFundingSourcesForbiddenDwollaV1HalJSONError | 403                                                            | application/vnd.dwolla.v1.hal+json                             |
| errors.ListCustomerFundingSourcesNotFoundDwollaV1HalJSONError  | 404                                                            | application/vnd.dwolla.v1.hal+json                             |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## create

Creates a bank account or debit card funding source for a customer. Supports multiple methods including manual entry with routing/account numbers, instant verification using existing open banking connections, tokenized card creation, and virtual account numbers. Bank funding sources require verification before transfers can be initiated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCustomerFundingSource" method="post" path="/customers/{id}/funding-sources" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.fundingSources.create({
    id: "<id>",
    createCustomerFundingSource: {
      links: {
        exchange: {
          href: "https://api-sandbox.dwolla.com/exchanges/6bc9109a-04fd-49b6-ace6-ca06fd282d65",
        },
        onDemandAuthorization: {
          href: "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
        },
      },
      bankAccountType: "checking",
      name: "Jane Doe's Checking",
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
import { customersFundingSourcesCreate } from "dwolla/funcs/customersFundingSourcesCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersFundingSourcesCreate(dwolla, {
    id: "<id>",
    createCustomerFundingSource: {
      links: {
        exchange: {
          href: "https://api-sandbox.dwolla.com/exchanges/6bc9109a-04fd-49b6-ace6-ca06fd282d65",
        },
        onDemandAuthorization: {
          href: "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
        },
      },
      bankAccountType: "checking",
      name: "Jane Doe's Checking",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersFundingSourcesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerFundingSourceRequest](../../models/operations/createcustomerfundingsourcerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerFundingSourceResponse](../../models/operations/createcustomerfundingsourceresponse.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.InactiveExchangeError                                    | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.InvalidExchangeTokenErrorError                           | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.DuplicateFundingSourceError                              | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.UnsupportedCardCountryError                              | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.InvalidCardTokenError                                    | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.MaximumCardsExceededError                                | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.CardMissingRequiredFieldsError                           | 400                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.CreateCustomerFundingSourceForbiddenDwollaV1HalJSONError | 403                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.CreateCustomerFundingSourceNotFoundDwollaV1HalJSONError  | 404                                                             | application/vnd.dwolla.v1.hal+json                              |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |