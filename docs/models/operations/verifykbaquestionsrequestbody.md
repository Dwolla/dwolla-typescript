# VerifyKbaQuestionsRequestBody

Parameters for verifying KBA questions

## Example Usage

```typescript
import { VerifyKbaQuestionsRequestBody } from "dwolla-typescript/models/operations";

let value: VerifyKbaQuestionsRequestBody = {
  answers: [
    {
      questionId: "2355953375",
      answerId: "2687969335",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `answers`                                                                                    | [operations.VerifyKbaQuestionsAnswer](../../models/operations/verifykbaquestionsanswer.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |