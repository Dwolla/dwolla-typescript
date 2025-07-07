#!/bin/bash

# Dwolla TypeScript SDK Test Runner
# This script runs custom tests and survives SDK regeneration

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Dwolla TypeScript SDK Test Runner${NC}"
echo "=================================================="

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install npm first.${NC}"
    exit 1
fi

# Function to check if SDK is built
check_sdk_built() {
    if [ ! -d "dist" ]; then
        echo -e "${YELLOW}⚠️  SDK not built yet. Building now...${NC}"
        npm run build
        if [ $? -ne 0 ]; then
            echo -e "${RED}❌ Failed to build SDK. Please check the build errors.${NC}"
            exit 1
        fi
    fi
}

# Function to check if dependencies are installed
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}⚠️  Dependencies not installed. Installing now...${NC}"
        npm install
        if [ $? -ne 0 ]; then
            echo -e "${RED}❌ Failed to install dependencies. Please check the installation errors.${NC}"
            exit 1
        fi
    fi
}

# Function to check if test env file exists
check_test_env() {
    if [ ! -f "tests/sandbox/sandbox.env" ]; then
        echo -e "${YELLOW}⚠️  Test environment file not found.${NC}"
        echo "Please create tests/sandbox/sandbox.env with your Dwolla sandbox credentials."
        echo "You can copy from tests/sandbox/sandbox.env.example if it exists."
        exit 1
    fi
}

# Function to run core tests
run_core_tests() {
    echo -e "${GREEN}🧪 Running core operation tests...${NC}"
    npx tsx tests/scripts/test-core-operations.ts
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Core tests completed successfully!${NC}"
    else
        echo -e "${RED}❌ Core tests failed. Please check the output above.${NC}"
        exit 1
    fi
}

# Function to show help
show_help() {
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  core, -c, --core       Run core operation tests (default)"
    echo "  build, -b, --build     Build SDK only"
    echo "  setup, -s, --setup     Setup test environment"
    echo "  help, -h, --help       Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                     # Run core tests"
    echo "  $0 core                # Run core tests"
    echo "  $0 build               # Build SDK only"
    echo "  $0 setup               # Setup test environment"
}

# Function to setup test environment
setup_test_env() {
    echo -e "${GREEN}🔧 Setting up test environment...${NC}"
    
    # Create sandbox directory if it doesn't exist
    mkdir -p tests/sandbox
    
    # Create example env file if it doesn't exist
    if [ ! -f "tests/sandbox/sandbox.env.example" ]; then
        cat > tests/sandbox/sandbox.env.example << EOF
# Dwolla Sandbox Credentials
# Get these from your Dwolla sandbox account
DWOLLA_CLIENT_ID=your_client_id_here
DWOLLA_CLIENT_SECRET=your_client_secret_here
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
EOF
        echo -e "${GREEN}✅ Created tests/sandbox/sandbox.env.example${NC}"
    fi
    
    # Create actual env file if it doesn't exist
    if [ ! -f "tests/sandbox/sandbox.env" ]; then
        cp tests/sandbox/sandbox.env.example tests/sandbox/sandbox.env
        echo -e "${YELLOW}⚠️  Created tests/sandbox/sandbox.env - please edit with your actual credentials${NC}"
    fi
    
    echo -e "${GREEN}✅ Test environment setup complete!${NC}"
}

# Main execution
main() {
    case "${1:-core}" in
        core|-c|--core)
            check_dependencies
            check_sdk_built
            check_test_env
            run_core_tests
            ;;
        build|-b|--build)
            check_dependencies
            echo -e "${GREEN}🏗️  Building SDK...${NC}"
            npm run build
            echo -e "${GREEN}✅ SDK build complete!${NC}"
            ;;
        setup|-s|--setup)
            setup_test_env
            ;;
        help|-h|--help)
            show_help
            ;;
        *)
            echo -e "${RED}❌ Unknown option: $1${NC}"
            show_help
            exit 1
            ;;
    esac
}

main "$@" 