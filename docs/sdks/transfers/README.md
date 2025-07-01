# Transfers
(*transfers*)

## Overview

Operations related to Transfers

### Available Operations

* [create](#create) - Initiate a transfer
* [get](#get) - Retrieve a transfer
* [cancel](#cancel) - Cancel a transfer
* [listFees](#listfees) - List fees for a transfer
* [getFailureReason](#getfailurereason) - Retrieve a transfer failure reason
* [createOnDemandAuthorization](#createondemandauthorization) - Create an on-demand transfer authorization

## create

Initiate a transfer

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.transfers.create({
    links: {},
    amount: {
      value: "5.00",
      currency: "USD",
    },
    processingChannel: {
      destination: "real-time-payments",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { transfersCreate } from "dwolla-typescript/funcs/transfersCreate.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await transfersCreate(dwolla, {
    links: {},
    amount: {
      value: "5.00",
      currency: "USD",
    },
    processingChannel: {
      destination: "real-time-payments",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InitiateTransferRequest](../../models/operations/initiatetransferrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitiateTransferResponse](../../models/operations/initiatetransferresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.SourceNotFoundError                                | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.ReceiverNotFoundError                              | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidSourceFundingSourceError                    | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.SenderRestrictedError                              | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.ReceiverRestrictedError                            | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidMetadataError                               | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.OperationBlockedError                              | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidAmountLimitError                            | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.CannotParseAmountError                             | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InsufficientFundsError                             | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.FacilitatorFeeAccountNotFoundError                 | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.FacilitatorFeeSumTooLargeError                     | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.FacilitatorFeeBelowMinimumError                    | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.HighRiskError                                      | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.IncompatibleHoldingsError                          | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.DirectAccountWithoutBankError                      | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.SourceSameAsDestinationError                       | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidFacilitatorError                            | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidFacilitatorFeeCollectFromError              | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidFacilitatorFeeCollectFromCombinationError   | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidDestinationFundingSourceError               | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidFacilitatorFeeAmountError                   | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WeeklyReceiveLimitReachedError                     | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidDestinationClearingTypeError                | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidAmountForDestinationClearingTypeError       | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidCorrelationIdError                          | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.SourceAddendaMaxLengthError                        | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.DestinationAddendaMaxLengthError                   | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.AchAddendaEntriesNotEnabledForAccountError         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.PointOfSaleAddendaEntriesNotEnabledForAccountError | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.IncompatibleAddendaEntriesError                    | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidPointOfSaleAddendaIdentificationCodeError   | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidPointOfSaleAddendaSerialNumberError         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidPointOfSaleAddendaDateError                 | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidPointOfSaleAddendaAddressError              | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidPointOfSaleAddendaCityError                 | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidPointOfSaleAddendaStateError                | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.TransferExpiredForFeeError                         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidFeeOdfiError                                | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidSourceBankAccountTypeError                  | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidDestinationBankAccountTypeError             | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.IncompatibleSourceAndDestinationTypesError         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.IncompatibleSourceForRtpDestinationError           | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidAmountForDestinationProcessingChannelError  | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.RtpFacilitatorFeeNotSupportedError                 | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.RtpUnverifiedSenderNotSupportedError               | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.RtpPersonalToPersonalNotSupportedError             | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.DestinationProcessingChannelNotSupportedError      | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.DestinationRemittanceDataMaxLengthError            | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawInvalidAmountError                         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawInvalidFundingSourceError                  | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawAccountRestrictedError                     | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawInvalidAmountForClearingTypeError          | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawInvalidWireBeneficiaryLocalityError        | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawInvalidWireBeneficiaryRegionError          | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawInvalidWireBeneficiaryCountryError         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawInvalidWireOriginatorToBeneficiaryError    | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawProcessingChannelNotSupportedError         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawRtpUnverifiedSenderNotSupportedError       | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WithdrawRtpPersonalWithdrawalNotSupportedError     | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.DepositAccountRestrictedError                      | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WireInvalidImadError                               | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WireAccountRestrictedError                         | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WireNotEnabledError                                | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.WireAccountNotFoundError                           | 400                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidAttemptToFacilitateFundsError               | 403                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidAttemptToPayInFundsError                    | 403                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.InvalidAttemptToPayOutFundsError                   | 403                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.RtpAccountSettingNotEnabledError                   | 403                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.TooManyRequestsErrorError                          | 429                                                       | application/vnd.dwolla.v1.hal+json                        |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |

## get

Retrieve a transfer

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.transfers.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { transfersGet } from "dwolla-typescript/funcs/transfersGet.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransferRequest](../../models/operations/gettransferrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Transfer](../../models/transfer.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.NotFoundError               | 404                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## cancel

Cancel a transfer

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.transfers.cancel({
    id: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { transfersCancel } from "dwolla-typescript/funcs/transfersCancel.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await transfersCancel(dwolla, {
    id: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelTransferRequest](../../models/operations/canceltransferrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelTransferResponse](../../models/operations/canceltransferresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestError             | 400                                | application/vnd.dwolla.v1.hal+json |
| errors.StatusInvalidError          | 400                                | application/vnd.dwolla.v1.hal+json |
| errors.StatusNotAllowedError       | 400                                | application/vnd.dwolla.v1.hal+json |
| errors.NotFoundError               | 404                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## listFees

List fees for a transfer

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.transfers.listFees({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { transfersListFees } from "dwolla-typescript/funcs/transfersListFees.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await transfersListFees(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersListFees failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransferFeesRequest](../../models/operations/listtransferfeesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTransferFeesResponse](../../models/operations/listtransferfeesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.NotFoundError               | 404                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## getFailureReason

Retrieve a transfer failure reason

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.transfers.getFailureReason({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { transfersGetFailureReason } from "dwolla-typescript/funcs/transfersGetFailureReason.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await transfersGetFailureReason(dwolla, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGetFailureReason failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransferFailureReasonRequest](../../models/operations/gettransferfailurereasonrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransferFailureReasonResponse](../../models/operations/gettransferfailurereasonresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ForbiddenError              | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.NotFoundError               | 404                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## createOnDemandAuthorization

Create an on-demand transfer authorization

### Example Usage

```typescript
import { Dwolla } from "dwolla-typescript";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.transfers.createOnDemandAuthorization();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DwollaCore } from "dwolla-typescript/core.js";
import { transfersCreateOnDemandAuthorization } from "dwolla-typescript/funcs/transfersCreateOnDemandAuthorization.js";

// Use `DwollaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dwolla = new DwollaCore({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await transfersCreateOnDemandAuthorization(dwolla);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreateOnDemandAuthorization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OnDemandAuthorization](../../models/ondemandauthorization.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ForbiddenError              | 403                                | application/vnd.dwolla.v1.hal+json |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |