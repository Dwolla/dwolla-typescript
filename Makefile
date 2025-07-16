# Dwolla TypeScript SDK - Makefile

.PHONY: help test test-debug build clean setup

# Default target  
.DEFAULT_GOAL := help

help: ## Show available commands
	@echo "Dwolla TypeScript SDK Commands:"
	@echo "  make setup      - First-time setup"
	@echo "  make test       - Run tests"
	@echo "  make test-debug - Run tests with debug output"
	@echo "  make build      - Build SDK"
	@echo "  make clean      - Clean build artifacts"

# First-time setup
setup: ## Set up everything for first time
	npm install
	mkdir -p tests/sandbox
	@if [ ! -f "tests/sandbox/sandbox.env" ]; then \
		echo "# Dwolla Sandbox Credentials" > tests/sandbox/sandbox.env; \
		echo "DWOLLA_CLIENT_ID=your_client_id_here" >> tests/sandbox/sandbox.env; \
		echo "DWOLLA_CLIENT_SECRET=your_client_secret_here" >> tests/sandbox/sandbox.env; \
		echo "DWOLLA_BASE_URL=https://api-sandbox.dwolla.com" >> tests/sandbox/sandbox.env; \
		echo "✅ Created tests/sandbox/sandbox.env - edit with your credentials"; \
	fi
	cd tests && npm install
	npm run build
	@echo "🎉 Setup complete! Edit tests/sandbox/sandbox.env and run 'make test'"

# Build SDK
build: ## Build the SDK
	npm install
	npm run build

# Run tests
test: build ## Run all tests
	@if [ ! -f "tests/sandbox/sandbox.env" ]; then \
		echo "❌ Missing tests/sandbox/sandbox.env - run 'make setup' first"; \
		exit 1; \
	fi
	cd tests && npm install && npm run test-core

# Run tests with debug output
test-debug: build ## Run tests with debug output
	@if [ ! -f "tests/sandbox/sandbox.env" ]; then \
		echo "❌ Missing tests/sandbox/sandbox.env - run 'make setup' first"; \
		exit 1; \
	fi
	cd tests && npm install && DEBUG=true npm run test-core

# Clean build artifacts
clean: ## Clean all build artifacts
	rm -rf dist/ node_modules/ tests/node_modules/ 