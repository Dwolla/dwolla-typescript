import { expect, test } from "vitest";
import { Dwolla } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Events List Events", async () => {
  const testHttpClient = createTestHTTPClient("listEvents");

  const dwolla = new Dwolla({
    serverURL: "https://api-sandbox.dwolla.com",
    httpClient: testHttpClient,
    security: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "value",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "value",
    },
  });

  const result = await dwolla.events.list({
    limit: 25,
    offset: 0,
  });

  expect(result).toBeDefined();
  expect(result.links).toBeDefined();
  expect(result.embedded).toBeDefined();
  expect(Array.isArray(result.embedded?.events ?? [])).toBe(true);

  if ((result.embedded?.events?.length ?? 0) > 0) {
    const firstEvent = result.embedded!.events![0]!;
    expect(firstEvent.id).toBeDefined();
    expect(firstEvent.topic).toBeDefined();
    expect(firstEvent.created).toBeInstanceOf(Date);
    expect(firstEvent.links).toBeDefined();
  }
});

test("Events Get Event", async () => {
  const testHttpClient = createTestHTTPClient("getEvent");

  const dwolla = new Dwolla({
    serverURL: "https://api-sandbox.dwolla.com",
    httpClient: testHttpClient,
    security: {
      clientID: process.env["DWOLLA_CLIENT_ID"] ?? "value",
      clientSecret: process.env["DWOLLA_CLIENT_SECRET"] ?? "value",
    },
  });

  const result = await dwolla.events.get({
    id: "<id>",
  });

  expect(result).toBeDefined();
  expect(result.id).toBeDefined();
  expect(result.topic).toBeDefined();
  expect(result.created).toBeInstanceOf(Date);
  expect(result.links).toBeDefined();
  expect(result.links?.["self"]).toBeDefined();
});
