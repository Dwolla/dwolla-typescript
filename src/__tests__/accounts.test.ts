import { expect, test } from "vitest";
import { Dwolla } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Accounts Get Account", async () => {
  const testHttpClient = createTestHTTPClient("getAccount");

  const dwolla = new Dwolla({
    serverURL: "https://api-sandbox.dwolla.com",
    httpClient: testHttpClient,
    security: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "value",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "value",
    },
  });

  const result = await dwolla.accounts.get({
    id: "5e7cd80f-3a4a-451e-9cd6-a86fc571741f",
  });
  expect(result).toBeDefined();
  expect(result.id).toBeDefined();
  expect(result.name).toBeDefined();
  expect(result.email).toBeDefined();
  expect(result.links).toBeDefined();
  expect(result.address).toBeDefined();
  expect(result.address?.city).toBeDefined();
  expect(result.address?.state).toBeDefined();
  expect(result.address?.country).toBeDefined();
  expect(result.created).toBeInstanceOf(Date);
});
