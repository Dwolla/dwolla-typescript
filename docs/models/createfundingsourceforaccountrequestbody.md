# CreateFundingSourceForAccountRequestBody

## Example Usage

```typescript
import { CreateFundingSourceForAccountRequestBody } from "dwolla-typescript";

let value: CreateFundingSourceForAccountRequestBody = {
  name: "<value>",
  bankAccountType: "checking",
  accountNumber: "<value>",
  routingNumber: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                | [models.CreateFundingSourceForAccountRequestBodyLinks](../models/createfundingsourceforaccountrequestbodylinks.md)                     | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `bankAccountType`                                                                                                                      | [models.CreateFundingSourceForAccountRequestBodyBankAccountType](../models/createfundingsourceforaccountrequestbodybankaccounttype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `accountNumber`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `routingNumber`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `channels`                                                                                                                             | *string*[]                                                                                                                             | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |