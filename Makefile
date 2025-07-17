# Dwolla TypeScript SDK - Makefile

.PHONY: help test test-integration test-debug test-integration-debug build clean setup

# Default target  
.DEFAULT_GOAL := help

help: ## Show available commands
	@echo "Dwolla TypeScript SDK Commands:"
	@echo "  make setup                 - First-time setup"
	@echo "  make test                  - Run tests (component mode, skip and continue)"
	@echo "  make test-integration      - Run tests (fail fast mode, stop on integration failures)"
	@echo "  make test-debug            - Run tests with debug output (component mode)"
	@echo "  make test-integration-debug - Run tests with debug output (fail fast mode)"
	@echo "  make build                 - Build SDK"
	@echo "  make clean                 - Clean build artifacts"

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

# Run tests (component mode - skip and continue)
test: build ## Run all tests in component mode (best for development)
	@if [ ! -f "tests/sandbox/sandbox.env" ]; then \
		echo "❌ Missing tests/sandbox/sandbox.env - run 'make setup' first"; \
		exit 1; \
	fi
	@echo "🔧 Running in COMPONENT MODE (fail_fast=false) - tests each component independently"
	cd tests && npm install && FAIL_FAST=false npm run test-core

# Run tests (integration mode - fail fast)  
test-integration: build ## Run tests in integration mode (best for CI/CD)
	@if [ ! -f "tests/sandbox/sandbox.env" ]; then \
		echo "❌ Missing tests/sandbox/sandbox.env - run 'make setup' first"; \
		exit 1; \
	fi
	@echo "⚡ Running in INTEGRATION MODE (fail_fast=true) - stops if transfer test impossible"
	cd tests && npm install && FAIL_FAST=true npm run test-core

# Run tests with debug output
test-debug: build ## Run tests with debug output (component mode)
	@if [ ! -f "tests/sandbox/sandbox.env" ]; then \
		echo "❌ Missing tests/sandbox/sandbox.env - run 'make setup' first"; \
		exit 1; \
	fi
	@echo "🔧 Running in COMPONENT MODE with DEBUG (fail_fast=false)"
	cd tests && npm install && DEBUG=true FAIL_FAST=false npm run test-core

# Run integration tests with debug output
test-integration-debug: build ## Run integration tests with debug output (fail fast mode)
	@if [ ! -f "tests/sandbox/sandbox.env" ]; then \
		echo "❌ Missing tests/sandbox/sandbox.env - run 'make setup' first"; \
		exit 1; \
	fi
	@echo "⚡ Running in INTEGRATION MODE with DEBUG (fail_fast=true)"
	cd tests && npm install && DEBUG=true FAIL_FAST=true npm run test-core

# Clean build artifacts
clean: ## Clean all build artifacts
	rm -rf dist/ node_modules/ tests/node_modules/ 