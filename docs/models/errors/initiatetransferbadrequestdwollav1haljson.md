# InitiateTransferBadRequestDwollaV1HalJSON

Bad Request


## Supported Types

### `errors.SourceNotFoundError`

```typescript
const value: errors.SourceNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Funding source not found.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

### `errors.ReceiverNotFoundError`

```typescript
const value: errors.ReceiverNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Receiver not found.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidSourceFundingSourceError`

```typescript
const value: errors.InvalidSourceFundingSourceError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid funding source.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

### `errors.SenderRestrictedError`

```typescript
const value: errors.SenderRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Sender restricted.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

### `errors.ReceiverRestrictedError`

```typescript
const value: errors.ReceiverRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Receiver restricted.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidMetadataError`

```typescript
const value: errors.InvalidMetadataError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid metadata.",
        path: "/metadata",
        links: {},
      },
    ],
  },
};
```

### `errors.OperationBlockedError`

```typescript
const value: errors.OperationBlockedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Receiver cannot receive from sender.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidAmountLimitError`

```typescript
const value: errors.InvalidAmountLimitError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message:
          "Invalid amount. The supplied amount is greater than your transaction limit.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

### `errors.CannotParseAmountError`

```typescript
const value: errors.CannotParseAmountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Invalid amount. The supplied amount must be a positive number.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

### `errors.InsufficientFundsError`

```typescript
const value: errors.InsufficientFundsError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InsufficientFunds",
        message: "Insufficient funds.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

### `errors.FacilitatorFeeAccountNotFoundError`

```typescript
const value: errors.FacilitatorFeeAccountNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Facilitator fee account not found.",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.FacilitatorFeeSumTooLargeError`

```typescript
const value: errors.FacilitatorFeeSumTooLargeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Facilitator fee sum too large.",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.FacilitatorFeeBelowMinimumError`

```typescript
const value: errors.FacilitatorFeeBelowMinimumError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Facilitator fee below minimum.",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.HighRiskError`

```typescript
const value: errors.HighRiskError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Due to account restrictions, we are unable to process this transaction.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.IncompatibleHoldingsError`

```typescript
const value: errors.IncompatibleHoldingsError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Receiver cannot receive from sender.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.DirectAccountWithoutBankError`

```typescript
const value: errors.DirectAccountWithoutBankError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "RequiresFundingSource",
        message: "Receiver requires funding source.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.SourceSameAsDestinationError`

```typescript
const value: errors.SourceSameAsDestinationError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Receiver cannot be the owner of the source funding source.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidFacilitatorError`

```typescript
const value: errors.InvalidFacilitatorError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Account cannot facilitate this transaction.",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidFacilitatorFeeCollectFromError`

```typescript
const value: errors.InvalidFacilitatorFeeCollectFromError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Unable to charge fee to specified destination.",
        path: "/fees/_links/charge-to/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidFacilitatorFeeCollectFromCombinationError`

```typescript
const value: errors.InvalidFacilitatorFeeCollectFromCombinationError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Currently, all fees must be paid by same destination.\"",
        path: "/fees/_links/charge-to/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidDestinationFundingSourceError`

```typescript
const value: errors.InvalidDestinationFundingSourceError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid destination funding source.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidFacilitatorFeeAmountError`

```typescript
const value: errors.InvalidFacilitatorFeeAmountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid facilitator fee amount.",
        path: "/fees/_links/charge-to/href",
        links: {},
      },
    ],
  },
};
```

### `errors.WeeklyReceiveLimitReachedError`

```typescript
const value: errors.WeeklyReceiveLimitReachedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Destination customer has reached its weekly receive limit.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidDestinationClearingTypeError`

```typescript
const value: errors.InvalidDestinationClearingTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Destination clearing type is currently not enabled.",
        path: "/clearing/destination",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidAmountForDestinationClearingTypeError`

```typescript
const value: errors.InvalidAmountForDestinationClearingTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message:
          "Amount is above the allowed threshold for the specified destination clearing type.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidCorrelationIdError`

```typescript
const value: errors.InvalidCorrelationIdError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Correlation id must be at least one character and up to 255 characters when supplied.",
        path: "/correlationId",
        links: {},
      },
    ],
  },
};
```

### `errors.SourceAddendaMaxLengthError`

```typescript
const value: errors.SourceAddendaMaxLengthError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Ach addenda entries can be up to 80 characters when supplied.",
        path: "/achDetails/source/addenda/values",
        links: {},
      },
    ],
  },
};
```

### `errors.DestinationAddendaMaxLengthError`

```typescript
const value: errors.DestinationAddendaMaxLengthError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Ach addenda entries can be up to 80 characters when supplied.",
        path: "/achDetails/destination/addenda/values",
        links: {},
      },
    ],
  },
};
```

### `errors.AchAddendaEntriesNotEnabledForAccountError`

```typescript
const value: errors.AchAddendaEntriesNotEnabledForAccountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Supplying ach addenda entries is currently not enabled.",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.PointOfSaleAddendaEntriesNotEnabledForAccountError`

```typescript
const value: errors.PointOfSaleAddendaEntriesNotEnabledForAccountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Supplying point of sale addenda entries is currently not enabled.",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.IncompatibleAddendaEntriesError`

```typescript
const value: errors.IncompatibleAddendaEntriesError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Addenda must not include both 'values' and 'pointOfSale addenda",
        path: "/achDetails/source/addenda/pointOfSale",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidPointOfSaleAddendaIdentificationCodeError`

```typescript
const value: errors.InvalidPointOfSaleAddendaIdentificationCodeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Identification code on a Point of Sale addenda entry is required and can be up to 6 characters.",
        path: "/achDetails/source/addenda/pointOfSale/identificationCode",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidPointOfSaleAddendaSerialNumberError`

```typescript
const value: errors.InvalidPointOfSaleAddendaSerialNumberError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Serial number on a Point of Sale addenda entry is required and can be up to 6 characters.",
        path: "/achDetails/source/addenda/pointOfSale/serialNumber",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidPointOfSaleAddendaDateError`

```typescript
const value: errors.InvalidPointOfSaleAddendaDateError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Date on a Point of Sale addenda entry is required and should be ISO-8601 format: YYYY-MM-DD.",
        path: "/achDetails/source/addenda/pointOfSale/date",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidPointOfSaleAddendaAddressError`

```typescript
const value: errors.InvalidPointOfSaleAddendaAddressError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Address on a Point of Sale addenda entry is required and can be up to 27 characters.",
        path: "/achDetails/source/addenda/pointOfSale/address",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidPointOfSaleAddendaCityError`

```typescript
const value: errors.InvalidPointOfSaleAddendaCityError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "City on a Point of Sale addenda entry is required and can be up to 15 characters.",
        path: "/achDetails/source/addenda/pointOfSale/city",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidPointOfSaleAddendaStateError`

```typescript
const value: errors.InvalidPointOfSaleAddendaStateError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "State on a Point of Sale addenda entry is required and should be a valid 2-letter abbreviation.",
        path: "/achDetails/source/addenda/pointOfSale/state",
        links: {},
      },
    ],
  },
};
```

### `errors.TransferExpiredForFeeError`

```typescript
const value: errors.TransferExpiredForFeeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Return fees can only be charged within 45 days of the original transfer's settlement date.",
        path: "/_links/failed-transfer/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidFeeOdfiError`

```typescript
const value: errors.InvalidFeeOdfiError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Transfer ineligible.",
        path: "/_links/failed-transfer/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidSourceBankAccountTypeError`

```typescript
const value: errors.InvalidSourceBankAccountTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid bank account type",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidDestinationBankAccountTypeError`

```typescript
const value: errors.InvalidDestinationBankAccountTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid bank account type",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.IncompatibleSourceAndDestinationTypesError`

```typescript
const value: errors.IncompatibleSourceAndDestinationTypesError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message:
          "Card type funding sources can only accept payments directly from a balance",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.IncompatibleSourceForRtpDestinationError`

```typescript
const value: errors.IncompatibleSourceForRtpDestinationError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Transfers using the Real Time Payments processing channel must be funded by a balance",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.InvalidAmountForDestinationProcessingChannelError`

```typescript
const value: errors.InvalidAmountForDestinationProcessingChannelError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message:
          "Amount is greater than the allowed threshold for the specified destination processing channel.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

### `errors.RtpFacilitatorFeeNotSupportedError`

```typescript
const value: errors.RtpFacilitatorFeeNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments does not currently support facilitator fees",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.RtpUnverifiedSenderNotSupportedError`

```typescript
const value: errors.RtpUnverifiedSenderNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments does not currently support unverified senders",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.RtpPersonalToPersonalNotSupportedError`

```typescript
const value: errors.RtpPersonalToPersonalNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments does not currently support transfers between personal accounts",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.DestinationProcessingChannelNotSupportedError`

```typescript
const value: errors.DestinationProcessingChannelNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Destination funding source does not support processing channel",
        path: "/processingChannel/destination",
        links: {},
      },
    ],
  },
};
```

### `errors.DestinationRemittanceDataMaxLengthError`

```typescript
const value: errors.DestinationRemittanceDataMaxLengthError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Remittance data entries can be up to 140 characters when supplied.",
        path: "/rtpDetails/destination/remittanceData",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawInvalidAmountError`

```typescript
const value: errors.WithdrawInvalidAmountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid amount.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawInvalidFundingSourceError`

```typescript
const value: errors.WithdrawInvalidFundingSourceError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message:
          "Destination funding source is either removed or does not exist.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawAccountRestrictedError`

```typescript
const value: errors.WithdrawAccountRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Account or customer restricted.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawInvalidAmountForClearingTypeError`

```typescript
const value: errors.WithdrawInvalidAmountForClearingTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message:
          "Amount is above the allowed threshold for the specified clearing type.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawInvalidWireBeneficiaryLocalityError`

```typescript
const value: errors.WithdrawInvalidWireBeneficiaryLocalityError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Beneficiary locality must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/beneficiaryLocality",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawInvalidWireBeneficiaryRegionError`

```typescript
const value: errors.WithdrawInvalidWireBeneficiaryRegionError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Beneficiary region must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/beneficiaryRegion",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawInvalidWireBeneficiaryCountryError`

```typescript
const value: errors.WithdrawInvalidWireBeneficiaryCountryError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Beneficiary country must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/beneficiaryCountry",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawInvalidWireOriginatorToBeneficiaryError`

```typescript
const value: errors.WithdrawInvalidWireOriginatorToBeneficiaryError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Originator to beneficiary items must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/originatorToBeneficiary",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawProcessingChannelNotSupportedError`

```typescript
const value: errors.WithdrawProcessingChannelNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Unsupported processing channel.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawRtpUnverifiedSenderNotSupportedError`

```typescript
const value: errors.WithdrawRtpUnverifiedSenderNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments does not currently support unverified senders",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.WithdrawRtpPersonalWithdrawalNotSupportedError`

```typescript
const value: errors.WithdrawRtpPersonalWithdrawalNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments withdrawal from a personal account is currently not supported",
        path: "",
        links: {},
      },
    ],
  },
};
```

### `errors.DepositAccountRestrictedError`

```typescript
const value: errors.DepositAccountRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Account is restricted.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.WireInvalidImadError`

```typescript
const value: errors.WireInvalidImadError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Missing or invalid IMAD.",
        path: "/imad",
        links: {},
      },
    ],
  },
};
```

### `errors.WireAccountRestrictedError`

```typescript
const value: errors.WireAccountRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Account or customer restricted.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

### `errors.WireNotEnabledError`

```typescript
const value: errors.WireNotEnabledError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Wire transfers are currently not enabled.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

### `errors.WireAccountNotFoundError`

```typescript
const value: errors.WireAccountNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotFound",
        message: "Account or customer invalid.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

