# Question

## Example Usage

```typescript
import { Question } from "dwolla-typescript/models/operations";

let value: Question = {
  id: "2355953375",
  text: "In what county do you currently live?",
  answers: [
    {
      id: "2687969295",
      text: "Pulaski",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 2355953375                                                               |
| `text`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | In what county do you currently live?                                    |
| `answers`                                                                | [operations.QuestionAnswer](../../models/operations/questionanswer.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |