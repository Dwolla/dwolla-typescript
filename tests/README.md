# Dwolla TypeScript SDK Tests

This directory contains core tests for the Dwolla TypeScript SDK that persist across SDK regeneration.

## Quick Start

```bash
# Complete setup (first time)
make dev-setup

# Edit your credentials
nano tests/sandbox/sandbox.env

# Run tests
make test

# Run tests with debug output (shows raw API responses)
make test-debug

# See all available commands
make help
```

## Dependencies

The tests use their own `package.json` to avoid modifying the auto-generated SDK `package.json`. This ensures:

- ✅ Test dependencies don't interfere with SDK generation
- ✅ Tests survive SDK regeneration 
- ✅ Clean separation of concerns
- ✅ Easy dependency management

### Test Dependencies

- `@faker-js/faker` - Generate realistic test data
- `dotenv` - Load environment variables
- `tsx` - TypeScript execution environment

## Commands

Run `make help` to see all available commands, or use these common ones:

| Command | Description |
|---------|-------------|
| `make help` | Show all available commands |
| `make dev-setup` | Complete first-time setup |
| `make build` | Build the SDK |
| `make test` | Run all tests |
| `make test-debug` | Run tests with detailed debug output |
| `make setup-tests` | Setup test environment |
| `make clean` | Clean all build artifacts |

### Benefits of Makefile Approach

1. **Dependency Management**: Make only rebuilds what's needed
2. **Parallel Execution**: Can run multiple tasks simultaneously
3. **Error Handling**: Stops on first error
4. **Industry Standard**: Familiar to most developers
5. **Cross-platform**: Works on Unix-like systems
6. **Automatic Dependencies**: Handles complex dependency chains

## Test Structure

```
tests/
├── package.json          # Test-specific dependencies
├── scripts/
│   └── test-core-operations.ts  # Core API tests
├── sandbox/
│   ├── sandbox.env       # Your credentials (gitignored)
│   └── sandbox.env.example  # Template
└── README.md            # This file
```

## Environment Setup

1. Copy or create `tests/sandbox/sandbox.env`:
   ```bash
   DWOLLA_CLIENT_ID=your_client_id_here
   DWOLLA_CLIENT_SECRET=your_client_secret_here  
   DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
   ```

2. Get credentials from your [Dwolla Sandbox Account](https://developers.dwolla.com/)

## What Gets Tested

- ✅ **Customer Management**: Personal & business customer creation and retrieval
- ✅ **Funding Sources**: Bank account creation for both customer types
- ✅ **Microdeposits Flow**: Initiation and verification (for bank account testing)
- ✅ **Beneficial Owners**: Creation, listing, and ownership certification
- ✅ **Transfers**: Money movement between funding sources
- ✅ **List Operations**: Customer listing and pagination

### Standard Mode (`make test`):
- 🔧 **Visual Grouping**: Operations organized by section (Customer, Funding Sources, Transfers)
- ⏱️ **Performance Timing**: Individual operation timing + total execution time
- 📊 **Summary Metrics**: API calls made, resources created, known issues
- 🎯 **Clear Results**: Success rates and operation status

### Debug Mode (`make test-debug`):
Debug mode adds detailed information for troubleshooting SDK validation issues:

```bash
# Run with debug output
make test-debug

# Or manually set debug environment
DEBUG=true make test
```

#### Debug Output Includes:
- 🔍 **Raw API Responses**: See exactly what Dwolla returns for every operation
- 📊 **Error Details**: Complete error objects and status codes
- ⚠️ **Known Issues Tracking**: Distinguishes SDK validation issues from real API failures
- 🌐 **API Call Summary**: Which endpoints were called and how many times

## Regeneration Safe

This test setup is designed to survive SDK regeneration:

- Tests are in separate directory
- Dependencies are isolated
- No modifications to auto-generated files
- Version controlled test configurations