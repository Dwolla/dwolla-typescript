import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/__tests__/**/*.test.ts"],
    // Increased timeouts for API calls
    testTimeout: 30000,
    hookTimeout: 30000,
    // Run tests sequentially to avoid API rate limiting
    fileParallelism: false,
    // Only run one test at a time
    maxConcurrency: 1,
  },
});

