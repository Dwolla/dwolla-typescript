# BeneficialOwnership
(*customers.beneficialOwnership*)

## Overview

### Available Operations

* [get](#get) - Retrieve beneficial ownership status
* [certify](#certify) - Certify beneficial ownership

## get

Returns the certification status of beneficial ownership for a business verified customer. Status indicates whether beneficial owner information has been certified and affects the customer's ability to send funds. Possible values include uncertified, certified, and recertify.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBeneficialOwnershipStatusForCustomer" method="get" path="/customers/{id}/beneficial-ownership" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.beneficialOwnership.get({
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
import { customersBeneficialOwnershipGet } from "dwolla/funcs/customersBeneficialOwnershipGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersBeneficialOwnershipGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersBeneficialOwnershipGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBeneficialOwnershipStatusForCustomerRequest](../../models/operations/getbeneficialownershipstatusforcustomerrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BeneficialOwnership](../../models/beneficialownership.md)\>**

### Errors

| Error Type                                                                  | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.GetBeneficialOwnershipStatusForCustomerForbiddenDwollaV1HalJSONError | 403                                                                         | application/vnd.dwolla.v1.hal+json                                          |
| errors.GetBeneficialOwnershipStatusForCustomerNotFoundDwollaV1HalJSONError  | 404                                                                         | application/vnd.dwolla.v1.hal+json                                          |
| errors.APIError                                                             | 4XX, 5XX                                                                    | \*/\*                                                                       |

## certify

Updates the beneficial ownership certification status to "certified", confirming that all beneficial owner information is accurate and complete. This action enables the business customer to send funds and is required to complete the verification process.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="certifyBeneficialOwnershipForCustomer" method="post" path="/customers/{id}/beneficial-ownership" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.customers.beneficialOwnership.certify({
    id: "<id>",
    requestBody: {
      status: "<value>",
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
import { customersBeneficialOwnershipCertify } from "dwolla/funcs/customersBeneficialOwnershipCertify.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await customersBeneficialOwnershipCertify(dwolla, {
    id: "<id>",
    requestBody: {
      status: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersBeneficialOwnershipCertify failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CertifyBeneficialOwnershipForCustomerRequest](../../models/operations/certifybeneficialownershipforcustomerrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BeneficialOwnership](../../models/beneficialownership.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.ValidationErrorSchema                                     | 400                                                              | application/vnd.dwolla.v1.hal+json                               |
| errors.CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError | 403                                                              | application/vnd.dwolla.v1.hal+json                               |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |