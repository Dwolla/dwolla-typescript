# 🧪 Dwolla SDK Testing Guide

Simple internal testing guide for the Dwolla TypeScript SDK.

## 🚀 Quick Start

1. **Setup credentials**:

   ```bash
   cp tests/sandbox/sandbox.env.example tests/sandbox/sandbox.env
   # Edit tests/sandbox/sandbox.env with your Dwolla sandbox credentials
   ```

2. **Build SDK**:

   ```bash
   npm run build
   ```

3. **Run tests**:
   ```bash
   npm run test:core
   ```

## 📋 What the test covers

The test validates core SDK functionality with real Dwolla API calls:

- **Personal Customer**: Create + retrieve + funding source
- **Business Customer**: Create + retrieve + funding source (if successful)
- **Beneficial Owners**: Create + list + status + certification (for business)
- **Microdeposits**: Initiate + verify workflow
- **Transfers**: Send funds between funding sources
- **List Operations**: Customer listing

## 🔧 Common Issues

| Issue                   | Solution                                       |
| ----------------------- | ---------------------------------------------- |
| Missing credentials     | Add real values to `tests/sandbox/sandbox.env` |
| SDK not built           | Run `npm run build`                            |
| Business customer fails | Expected - strict validation rules             |
| Microdeposits errors    | Expected - sandbox limitations                 |
