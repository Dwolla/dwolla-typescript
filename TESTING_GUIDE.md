# 🧪 Dwolla SDK Testing Guide

Simple internal testing guide for the Dwolla TypeScript SDK.

## 🚀 Quick Start

```bash
# Setup test environment (creates sandbox.env template)
./run-tests.sh setup

# Edit tests/sandbox/sandbox.env with your Dwolla sandbox credentials
# Then run tests:
./run-tests.sh core
```

### Manual Alternative (if you prefer step-by-step)

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
   npx tsx tests/scripts/test-core-operations.ts
   ```

## 📋 Available Commands

The `run-tests.sh` script provides these commands:

- `./run-tests.sh` or `./run-tests.sh core` - Run core operation tests (default)
- `./run-tests.sh build` - Build SDK only
- `./run-tests.sh setup` - Setup test environment (creates sandbox.env template)
- `./run-tests.sh help` - Show help and usage examples

## 📋 What the test covers

The test validates core SDK functionality with real Dwolla API calls:

- **Personal Customer**: Create + retrieve + funding source
- **Business Customer**: Create + retrieve + funding source (if successful)
- **Beneficial Owners**: Create + list + status + certification (for business)
- **Microdeposits**: Initiate + verify workflow
- **Transfers**: Send funds between funding sources
- **List Operations**: Customer listing

## 🔧 Common Issues

| Issue                 | Solution                                                          |
| --------------------- | ----------------------------------------------------------------- |
| Missing credentials   | Run `./run-tests.sh setup` then edit `tests/sandbox/sandbox.env`  |
| SDK not built         | Run `./run-tests.sh build` or just `./run-tests.sh` (auto-builds) |
| Script not executable | Run `chmod +x run-tests.sh`                                       |

## 💡 Pro Tips

- **Quick test**: Just run `./run-tests.sh` - it handles everything automatically
- **First time setup**: Use `./run-tests.sh setup` to create the environment template
- **Troubleshooting**: Use `./run-tests.sh help` to see all available options
- **Clean start**: The script checks dependencies and builds the SDK if needed
