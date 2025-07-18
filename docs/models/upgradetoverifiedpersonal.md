# UpgradeToVerifiedPersonal

Upgrade Unverified Customer to Verified Personal Customer

## Example Usage

```typescript
import { UpgradeToVerifiedPersonal } from "dwolla/models";

let value: UpgradeToVerifiedPersonal = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@email.net",
  ipAddress: "10.10.10.10",
  type: "personal",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  dateOfBirth: "1970-01-01",
  ssn: "1234",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `firstName`        | *string*           | :heavy_check_mark: | N/A                | John               |
| `lastName`         | *string*           | :heavy_check_mark: | N/A                | Doe                |
| `email`            | *string*           | :heavy_check_mark: | N/A                | johndoe@email.net  |
| `ipAddress`        | *string*           | :heavy_minus_sign: | N/A                | 10.10.10.10        |
| `type`             | *string*           | :heavy_check_mark: | N/A                | personal           |
| `address1`         | *string*           | :heavy_check_mark: | N/A                | 99-99 33rd St      |
| `city`             | *string*           | :heavy_check_mark: | N/A                | Some City          |
| `state`            | *string*           | :heavy_check_mark: | N/A                | NY                 |
| `postalCode`       | *string*           | :heavy_check_mark: | N/A                | 11101              |
| `dateOfBirth`      | *string*           | :heavy_check_mark: | N/A                | 1970-01-01         |
| `ssn`              | *string*           | :heavy_check_mark: | N/A                | 1234               |