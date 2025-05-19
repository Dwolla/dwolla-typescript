# VerifyKbaQuestionsRequest

## Example Usage

```typescript
import { VerifyKbaQuestionsRequest } from "dwolla-typescript/models/operations";

let value: VerifyKbaQuestionsRequest = {
  id: "<id>",
  requestBody: {
    answers: [
      {
        questionId: "2355953375",
        answerId: "2687969335",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The id of the KBA session to verify questions for.                                                   |
| `requestBody`                                                                                        | [operations.VerifyKbaQuestionsRequestBody](../../models/operations/verifykbaquestionsrequestbody.md) | :heavy_check_mark:                                                                                   | Parameters for verifying KBA questions                                                               |