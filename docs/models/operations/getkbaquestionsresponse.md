# GetKbaQuestionsResponse

successful operation

## Example Usage

```typescript
import { GetKbaQuestionsResponse } from "dwolla/models/operations";

let value: GetKbaQuestionsResponse = {
  links: {
    answer: {
      href: "https://api.dwolla.com/kba/62dac6f3-bf8f-4961-9af8-428de8ecd9a4",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "kba",
    },
  },
  id: "62dac6f3-bf8f-4961-9af8-428de8ecd9a4",
  questions: [
    {
      id: "2355953375",
      text: "In what county do you currently live?",
      answers: [],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `links`                                                                            | [operations.GetKbaQuestionsLinks](../../models/operations/getkbaquestionslinks.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 62dac6f3-bf8f-4961-9af8-428de8ecd9a4                                               |
| `questions`                                                                        | [operations.Question](../../models/operations/question.md)[]                       | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |