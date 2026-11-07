# Alerts

## Overview

Operations related to Alerts

### Available Operations

* [list](#list) - List alerts
* [get](#get) - Retrieve alert

## list

Returns the alerts for your Dwolla account, newest first. Alerts notify you of activity that may need your attention, such as unusual transfer activity for one of your Customers. When an alert needs a response from you, it includes an `actionRequired` object whose `description` explains what to do. Each alert's `_links.self` is the alert's resource URI.

Alerts are in active development and must be enabled for your account. If alerts aren't enabled, listing alerts returns an empty list. To enable alerts, please [reach out to Dwolla](https://www.dwolla.com/contact?b=apidocs).

Requires an application access token for your account.

**Pagination** — Alerts are returned using cursor-based pagination. Each page holds up to `limit` alerts (25 by default, 200 at most):
- Request `GET /alerts` to get the first page, which contains your newest alerts. Add `limit` to choose the page size, such as `GET /alerts?limit=50`.
- Follow the `next` link in `_links` to get the next page of older alerts. `next` is omitted on the last page.
- Follow the `prev` link in `_links` to go back to the previous page of newer alerts. `prev` is omitted on the first page.

The `next` and `prev` link URLs contain an opaque cursor. Use the cursor exactly as returned; don't build, parse, or modify it. A modified cursor returns a `400 InvalidQueryParameter` error.

**Page size** — The `next` and `prev` links always include `limit`, even if your request omitted it, so following them keeps the same page size. To change the page size partway through, send the `next` or `prev` link with a different `limit` value; the new page size is honored. `limit` is the only parameter you may change between pages.

**Filtering by status** — To list only `open` or only `resolved` alerts, add the `status` query parameter to your first request, such as `GET /alerts?status=open`. Omit `status` to list every alert.
- The `next` and `prev` links keep the filter. Their URLs include `status` along with the cursor, so follow them as returned.
- A cursor belongs to the filtered list it came from. Sending a cursor with a different or missing `status` returns a `400 ValidationError` error.
- To change the filter, start again from `GET /alerts?status=…` without a cursor.


### Example Usage: first_page

<!-- UsageSnippet language="typescript" operationID="listAlerts" method="get" path="/alerts" example="first_page" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.alerts.list({
    status: "open",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { alertsList } from "dwolla/funcs/alertsList.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await alertsList(dwolla, {
    status: "open",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("alertsList failed:", res.error);
  }
}

run();
```
### Example Usage: open_alerts_page

<!-- UsageSnippet language="typescript" operationID="listAlerts" method="get" path="/alerts" example="open_alerts_page" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.alerts.list({
    status: "open",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { alertsList } from "dwolla/funcs/alertsList.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await alertsList(dwolla, {
    status: "open",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("alertsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAlertsRequest](../../models/operations/listalertsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAlertsResponse](../../models/operations/listalertsresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.ListAlertsInvalidQueryParameterError       | 400                                               | application/vnd.dwolla.v1.hal+json                |
| errors.ListAlertsValidationError                  | 400                                               | application/vnd.dwolla.v1.hal+json                |
| errors.ListAlertsUnauthorizedDwollaV1HalJSONError | 401                                               | application/vnd.dwolla.v1.hal+json                |
| errors.ListAlertsForbiddenDwollaV1HalJSONError    | 403                                               | application/vnd.dwolla.v1.hal+json                |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## get

Returns a single alert for your Dwolla account. Alerts notify you of activity that may need your attention, such as unusual transfer activity for one of your Customers. When an alert needs a response from you, it includes an `actionRequired` object whose `description` explains what to do.

Alerts are in active development and must be enabled for your account. To enable alerts, please [reach out to Dwolla](https://www.dwolla.com/contact?b=apidocs).

Requires an application access token for your account. Returns a `404 NotFound` error if the alert doesn't exist.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAlert" method="get" path="/alerts/{id}" example="open_unusual_transfer_activity" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.alerts.get({
    id: "d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla/core.js";
import { alertsGet } from "dwolla/funcs/alertsGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await alertsGet(dwolla, {
    id: "d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alertsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAlertRequest](../../models/operations/getalertrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Alert](../../models/alert.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.GetAlertUnauthorizedDwollaV1HalJSONError | 401                                             | application/vnd.dwolla.v1.hal+json              |
| errors.GetAlertForbiddenDwollaV1HalJSONError    | 403                                             | application/vnd.dwolla.v1.hal+json              |
| errors.NotFoundError                            | 404                                             | application/vnd.dwolla.v1.hal+json              |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |