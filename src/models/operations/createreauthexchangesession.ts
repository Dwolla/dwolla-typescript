/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * Request body containing the redirect URL.
 *
 * @remarks
 * Required for:
 * - Visa exchange sessions
 * - Plaid mobile sessions
 * Not required for:
 * - Plaid web sessions
 */
export type CreateReAuthExchangeSessionRequestBody =
  | models.CreateReAuthExchangeSessionWithRedirect
  | models.CreateReAuthExchangeSessionForWeb;

export type CreateReAuthExchangeSessionRequest = {
  /**
   * Exchange's unique identifier
   */
  id: string;
  /**
   * Request body containing the redirect URL.
   *
   * @remarks
   * Required for:
   * - Visa exchange sessions
   * - Plaid mobile sessions
   * Not required for:
   * - Plaid web sessions
   */
  requestBody?:
    | models.CreateReAuthExchangeSessionWithRedirect
    | models.CreateReAuthExchangeSessionForWeb
    | undefined;
};

export type CreateReAuthExchangeSessionResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const CreateReAuthExchangeSessionRequestBody$inboundSchema: z.ZodType<
  CreateReAuthExchangeSessionRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  models.CreateReAuthExchangeSessionWithRedirect$inboundSchema,
  models.CreateReAuthExchangeSessionForWeb$inboundSchema,
]);

/** @internal */
export type CreateReAuthExchangeSessionRequestBody$Outbound =
  | models.CreateReAuthExchangeSessionWithRedirect$Outbound
  | models.CreateReAuthExchangeSessionForWeb$Outbound;

/** @internal */
export const CreateReAuthExchangeSessionRequestBody$outboundSchema: z.ZodType<
  CreateReAuthExchangeSessionRequestBody$Outbound,
  z.ZodTypeDef,
  CreateReAuthExchangeSessionRequestBody
> = z.union([
  models.CreateReAuthExchangeSessionWithRedirect$outboundSchema,
  models.CreateReAuthExchangeSessionForWeb$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateReAuthExchangeSessionRequestBody$ {
  /** @deprecated use `CreateReAuthExchangeSessionRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateReAuthExchangeSessionRequestBody$inboundSchema;
  /** @deprecated use `CreateReAuthExchangeSessionRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateReAuthExchangeSessionRequestBody$outboundSchema;
  /** @deprecated use `CreateReAuthExchangeSessionRequestBody$Outbound` instead. */
  export type Outbound = CreateReAuthExchangeSessionRequestBody$Outbound;
}

export function createReAuthExchangeSessionRequestBodyToJSON(
  createReAuthExchangeSessionRequestBody:
    CreateReAuthExchangeSessionRequestBody,
): string {
  return JSON.stringify(
    CreateReAuthExchangeSessionRequestBody$outboundSchema.parse(
      createReAuthExchangeSessionRequestBody,
    ),
  );
}

export function createReAuthExchangeSessionRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateReAuthExchangeSessionRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateReAuthExchangeSessionRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateReAuthExchangeSessionRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateReAuthExchangeSessionRequest$inboundSchema: z.ZodType<
  CreateReAuthExchangeSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  RequestBody: z.union([
    models.CreateReAuthExchangeSessionWithRedirect$inboundSchema,
    models.CreateReAuthExchangeSessionForWeb$inboundSchema,
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateReAuthExchangeSessionRequest$Outbound = {
  id: string;
  RequestBody?:
    | models.CreateReAuthExchangeSessionWithRedirect$Outbound
    | models.CreateReAuthExchangeSessionForWeb$Outbound
    | undefined;
};

/** @internal */
export const CreateReAuthExchangeSessionRequest$outboundSchema: z.ZodType<
  CreateReAuthExchangeSessionRequest$Outbound,
  z.ZodTypeDef,
  CreateReAuthExchangeSessionRequest
> = z.object({
  id: z.string(),
  requestBody: z.union([
    models.CreateReAuthExchangeSessionWithRedirect$outboundSchema,
    models.CreateReAuthExchangeSessionForWeb$outboundSchema,
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateReAuthExchangeSessionRequest$ {
  /** @deprecated use `CreateReAuthExchangeSessionRequest$inboundSchema` instead. */
  export const inboundSchema = CreateReAuthExchangeSessionRequest$inboundSchema;
  /** @deprecated use `CreateReAuthExchangeSessionRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateReAuthExchangeSessionRequest$outboundSchema;
  /** @deprecated use `CreateReAuthExchangeSessionRequest$Outbound` instead. */
  export type Outbound = CreateReAuthExchangeSessionRequest$Outbound;
}

export function createReAuthExchangeSessionRequestToJSON(
  createReAuthExchangeSessionRequest: CreateReAuthExchangeSessionRequest,
): string {
  return JSON.stringify(
    CreateReAuthExchangeSessionRequest$outboundSchema.parse(
      createReAuthExchangeSessionRequest,
    ),
  );
}

export function createReAuthExchangeSessionRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateReAuthExchangeSessionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateReAuthExchangeSessionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateReAuthExchangeSessionRequest' from JSON`,
  );
}

/** @internal */
export const CreateReAuthExchangeSessionResponse$inboundSchema: z.ZodType<
  CreateReAuthExchangeSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type CreateReAuthExchangeSessionResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const CreateReAuthExchangeSessionResponse$outboundSchema: z.ZodType<
  CreateReAuthExchangeSessionResponse$Outbound,
  z.ZodTypeDef,
  CreateReAuthExchangeSessionResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateReAuthExchangeSessionResponse$ {
  /** @deprecated use `CreateReAuthExchangeSessionResponse$inboundSchema` instead. */
  export const inboundSchema =
    CreateReAuthExchangeSessionResponse$inboundSchema;
  /** @deprecated use `CreateReAuthExchangeSessionResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateReAuthExchangeSessionResponse$outboundSchema;
  /** @deprecated use `CreateReAuthExchangeSessionResponse$Outbound` instead. */
  export type Outbound = CreateReAuthExchangeSessionResponse$Outbound;
}

export function createReAuthExchangeSessionResponseToJSON(
  createReAuthExchangeSessionResponse: CreateReAuthExchangeSessionResponse,
): string {
  return JSON.stringify(
    CreateReAuthExchangeSessionResponse$outboundSchema.parse(
      createReAuthExchangeSessionResponse,
    ),
  );
}

export function createReAuthExchangeSessionResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateReAuthExchangeSessionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateReAuthExchangeSessionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateReAuthExchangeSessionResponse' from JSON`,
  );
}
