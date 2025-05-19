# InitiateTransferBadRequestDwollaV1HalJSON

Bad Request


## Supported Types

### `models.SourceNotFoundError`

```typescript
const value: models.SourceNotFoundError = {
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

### `models.ReceiverNotFoundError`

```typescript
const value: models.ReceiverNotFoundError = {
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

### `models.InvalidSourceFundingSourceError`

```typescript
const value: models.InvalidSourceFundingSourceError = {
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

### `models.SenderRestrictedError`

```typescript
const value: models.SenderRestrictedError = {
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

### `models.ReceiverRestrictedError`

```typescript
const value: models.ReceiverRestrictedError = {
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

### `models.InvalidMetadataError`

```typescript
const value: models.InvalidMetadataError = {
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

### `models.OperationBlockedError`

```typescript
const value: models.OperationBlockedError = {
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

### `models.InvalidAmountLimitError`

```typescript
const value: models.InvalidAmountLimitError = {
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

### `models.CannotParseAmountError`

```typescript
const value: models.CannotParseAmountError = {
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

### `models.InsufficientFundsError`

```typescript
const value: models.InsufficientFundsError = {
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

### `models.FacilitatorFeeAccountNotFoundError`

```typescript
const value: models.FacilitatorFeeAccountNotFoundError = {
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

### `models.FacilitatorFeeSumTooLargeError`

```typescript
const value: models.FacilitatorFeeSumTooLargeError = {
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

### `models.FacilitatorFeeBelowMinimumError`

```typescript
const value: models.FacilitatorFeeBelowMinimumError = {
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

### `models.HighRiskError`

```typescript
const value: models.HighRiskError = {
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

### `models.IncompatibleHoldingsError`

```typescript
const value: models.IncompatibleHoldingsError = {
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

### `models.DirectAccountWithoutBankError`

```typescript
const value: models.DirectAccountWithoutBankError = {
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

### `models.SourceSameAsDestinationError`

```typescript
const value: models.SourceSameAsDestinationError = {
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

### `models.InvalidFacilitatorError`

```typescript
const value: models.InvalidFacilitatorError = {
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

### `models.InvalidFacilitatorFeeCollectFromError`

```typescript
const value: models.InvalidFacilitatorFeeCollectFromError = {
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

### `models.InvalidFacilitatorFeeCollectFromCombinationError`

```typescript
const value: models.InvalidFacilitatorFeeCollectFromCombinationError = {
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

### `models.InvalidDestinationFundingSourceError`

```typescript
const value: models.InvalidDestinationFundingSourceError = {
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

### `models.InvalidFacilitatorFeeAmountError`

```typescript
const value: models.InvalidFacilitatorFeeAmountError = {
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

### `models.WeeklyReceiveLimitReachedError`

```typescript
const value: models.WeeklyReceiveLimitReachedError = {
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

### `models.InvalidDestinationClearingTypeError`

```typescript
const value: models.InvalidDestinationClearingTypeError = {
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

### `models.InvalidAmountForDestinationClearingTypeError`

```typescript
const value: models.InvalidAmountForDestinationClearingTypeError = {
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

### `models.InvalidCorrelationIdError`

```typescript
const value: models.InvalidCorrelationIdError = {
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

### `models.SourceAddendaMaxLengthError`

```typescript
const value: models.SourceAddendaMaxLengthError = {
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

### `models.DestinationAddendaMaxLengthError`

```typescript
const value: models.DestinationAddendaMaxLengthError = {
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

### `models.AchAddendaEntriesNotEnabledForAccountError`

```typescript
const value: models.AchAddendaEntriesNotEnabledForAccountError = {
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

### `models.PointOfSaleAddendaEntriesNotEnabledForAccountError`

```typescript
const value: models.PointOfSaleAddendaEntriesNotEnabledForAccountError = {
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

### `models.IncompatibleAddendaEntriesError`

```typescript
const value: models.IncompatibleAddendaEntriesError = {
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

### `models.InvalidPointOfSaleAddendaIdentificationCodeError`

```typescript
const value: models.InvalidPointOfSaleAddendaIdentificationCodeError = {
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

### `models.InvalidPointOfSaleAddendaSerialNumberError`

```typescript
const value: models.InvalidPointOfSaleAddendaSerialNumberError = {
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

### `models.InvalidPointOfSaleAddendaDateError`

```typescript
const value: models.InvalidPointOfSaleAddendaDateError = {
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

### `models.InvalidPointOfSaleAddendaAddressError`

```typescript
const value: models.InvalidPointOfSaleAddendaAddressError = {
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

### `models.InvalidPointOfSaleAddendaCityError`

```typescript
const value: models.InvalidPointOfSaleAddendaCityError = {
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

### `models.InvalidPointOfSaleAddendaStateError`

```typescript
const value: models.InvalidPointOfSaleAddendaStateError = {
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

### `models.TransferExpiredForFeeError`

```typescript
const value: models.TransferExpiredForFeeError = {
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

### `models.InvalidFeeOdfiError`

```typescript
const value: models.InvalidFeeOdfiError = {
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

### `models.InvalidSourceBankAccountTypeError`

```typescript
const value: models.InvalidSourceBankAccountTypeError = {
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

### `models.InvalidDestinationBankAccountTypeError`

```typescript
const value: models.InvalidDestinationBankAccountTypeError = {
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

### `models.IncompatibleSourceAndDestinationTypesError`

```typescript
const value: models.IncompatibleSourceAndDestinationTypesError = {
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

### `models.IncompatibleSourceForRtpDestinationError`

```typescript
const value: models.IncompatibleSourceForRtpDestinationError = {
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

### `models.InvalidAmountForDestinationProcessingChannelError`

```typescript
const value: models.InvalidAmountForDestinationProcessingChannelError = {
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

### `models.RtpFacilitatorFeeNotSupportedError`

```typescript
const value: models.RtpFacilitatorFeeNotSupportedError = {
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

### `models.RtpUnverifiedSenderNotSupportedError`

```typescript
const value: models.RtpUnverifiedSenderNotSupportedError = {
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

### `models.RtpPersonalToPersonalNotSupportedError`

```typescript
const value: models.RtpPersonalToPersonalNotSupportedError = {
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

### `models.DestinationProcessingChannelNotSupportedError`

```typescript
const value: models.DestinationProcessingChannelNotSupportedError = {
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

### `models.DestinationRemittanceDataMaxLengthError`

```typescript
const value: models.DestinationRemittanceDataMaxLengthError = {
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

### `models.WithdrawInvalidAmountError`

```typescript
const value: models.WithdrawInvalidAmountError = {
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

### `models.WithdrawInvalidFundingSourceError`

```typescript
const value: models.WithdrawInvalidFundingSourceError = {
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

### `models.WithdrawAccountRestrictedError`

```typescript
const value: models.WithdrawAccountRestrictedError = {
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

### `models.WithdrawInvalidAmountForClearingTypeError`

```typescript
const value: models.WithdrawInvalidAmountForClearingTypeError = {
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

### `models.WithdrawInvalidWireBeneficiaryLocalityError`

```typescript
const value: models.WithdrawInvalidWireBeneficiaryLocalityError = {
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

### `models.WithdrawInvalidWireBeneficiaryRegionError`

```typescript
const value: models.WithdrawInvalidWireBeneficiaryRegionError = {
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

### `models.WithdrawInvalidWireBeneficiaryCountryError`

```typescript
const value: models.WithdrawInvalidWireBeneficiaryCountryError = {
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

### `models.WithdrawInvalidWireOriginatorToBeneficiaryError`

```typescript
const value: models.WithdrawInvalidWireOriginatorToBeneficiaryError = {
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

### `models.WithdrawProcessingChannelNotSupportedError`

```typescript
const value: models.WithdrawProcessingChannelNotSupportedError = {
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

### `models.WithdrawRtpUnverifiedSenderNotSupportedError`

```typescript
const value: models.WithdrawRtpUnverifiedSenderNotSupportedError = {
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

### `models.WithdrawRtpPersonalWithdrawalNotSupportedError`

```typescript
const value: models.WithdrawRtpPersonalWithdrawalNotSupportedError = {
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

### `models.DepositAccountRestrictedError`

```typescript
const value: models.DepositAccountRestrictedError = {
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

### `models.WireInvalidImadError`

```typescript
const value: models.WireInvalidImadError = {
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

### `models.WireAccountRestrictedError`

```typescript
const value: models.WireAccountRestrictedError = {
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

### `models.WireNotEnabledError`

```typescript
const value: models.WireNotEnabledError = {
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

### `models.WireAccountNotFoundError`

```typescript
const value: models.WireAccountNotFoundError = {
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

