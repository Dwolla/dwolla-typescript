# Transfers
(*transfers*)

## Overview

Operations related to Transfers

### Available Operations

* [create](#create) - Initiate a transfer
* [get](#get) - Retrieve a transfer
* [cancel](#cancel) - Cancel a transfer

## create

Initiate a transfer between funding sources from a Dwolla Account or API Customer resource. Supports ACH, Instant Payments (RTP/FedNow), and wire transfers with optional expedited clearing, facilitator fees, metadata, and correlation IDs for enhanced traceability. Includes idempotency key support to prevent duplicate transfers and extensive customization options for addenda records and processing channels. Returns the location of the created transfer resource for tracking and management.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="initiateTransfer" method="post" path="/transfers" -->
```typescript
import { Dwolla } from "dwolla";

const dwolla = new Dwolla({
  security: {
    clientID: process.env["DWOLLA_CLIENT_ID"] ?? "",
    clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await dwolla.transfers.create({
    idempotencyKey: "19051a62-3403-11e6-ac61-9e71128cae77",
    requestBody: {
      links: {},
      amount: {
        value: "5.00",
        currency: "USD",
      },
      rtpDetails: {
        destination: {
          remittanceData: "ABC_123 Remittance Data",
        },
      },
      instantDetails: {
        destination: {
          remittanceData: "ABC_123 Remittance Data",
        },
      },
      processingChannel: {
        destination: "instant",
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
import { transfersCreate } from "dwolla/funcs/transfersCreate.js";

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
    idempotencyKey: "19051a62-3403-11e6-ac61-9e71128cae77",
    requestBody: {
      links: {},
      amount: {
        value: "5.00",
        currency: "USD",
      },
      rtpDetails: {
        destination: {
          remittanceData: "ABC_123 Remittance Data",
        },
      },
      instantDetails: {
        destination: {
          remittanceData: "ABC_123 Remittance Data",
        },
      },
      processingChannel: {
        destination: "instant",
      },
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

Retrieve detailed information for a specific transfer by its unique identifier belonging to an Account or Customer. Returns transfer status, amount, creation date, clearing details, and links to source and destination funding sources for complete transaction tracking. Includes cancellation links when applicable and references to related funding transfers. Essential for monitoring transfer lifecycle and transaction reconciliation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTransfer" method="get" path="/transfers/{id}" -->
```typescript
import { Dwolla } from "dwolla";

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
import { DwollaCore } from "dwolla/core.js";
import { transfersGet } from "dwolla/funcs/transfersGet.js";

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

Cancel a pending transfer by setting its status to cancelled. Only transfers in pending status can be cancelled before processing begins. Returns the updated transfer resource with cancelled status. Use this endpoint to stop a bank transfer from further processing.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelTransfer" method="post" path="/transfers/{id}" -->
```typescript
import { Dwolla } from "dwolla";

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
import { DwollaCore } from "dwolla/core.js";
import { transfersCancel } from "dwolla/funcs/transfersCancel.js";

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