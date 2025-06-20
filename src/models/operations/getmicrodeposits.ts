/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetMicroDepositsRequest = {
  /**
   * The ID of the FS that previously had micro-deposits initiated
   */
  id: string;
};

export type Failure = {
  code?: string | undefined;
  description?: string | undefined;
};

/**
 * successful operation
 */
export type GetMicroDepositsResponse = {
  links?: { [k: string]: models.HalLink } | undefined;
  created?: Date | undefined;
  status?: string | undefined;
  failure?: Failure | undefined;
};

/** @internal */
export const GetMicroDepositsRequest$inboundSchema: z.ZodType<
  GetMicroDepositsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetMicroDepositsRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetMicroDepositsRequest$outboundSchema: z.ZodType<
  GetMicroDepositsRequest$Outbound,
  z.ZodTypeDef,
  GetMicroDepositsRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMicroDepositsRequest$ {
  /** @deprecated use `GetMicroDepositsRequest$inboundSchema` instead. */
  export const inboundSchema = GetMicroDepositsRequest$inboundSchema;
  /** @deprecated use `GetMicroDepositsRequest$outboundSchema` instead. */
  export const outboundSchema = GetMicroDepositsRequest$outboundSchema;
  /** @deprecated use `GetMicroDepositsRequest$Outbound` instead. */
  export type Outbound = GetMicroDepositsRequest$Outbound;
}

export function getMicroDepositsRequestToJSON(
  getMicroDepositsRequest: GetMicroDepositsRequest,
): string {
  return JSON.stringify(
    GetMicroDepositsRequest$outboundSchema.parse(getMicroDepositsRequest),
  );
}

export function getMicroDepositsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMicroDepositsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMicroDepositsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMicroDepositsRequest' from JSON`,
  );
}

/** @internal */
export const Failure$inboundSchema: z.ZodType<Failure, z.ZodTypeDef, unknown> =
  z.object({
    code: z.string().optional(),
    description: z.string().optional(),
  });

/** @internal */
export type Failure$Outbound = {
  code?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const Failure$outboundSchema: z.ZodType<
  Failure$Outbound,
  z.ZodTypeDef,
  Failure
> = z.object({
  code: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Failure$ {
  /** @deprecated use `Failure$inboundSchema` instead. */
  export const inboundSchema = Failure$inboundSchema;
  /** @deprecated use `Failure$outboundSchema` instead. */
  export const outboundSchema = Failure$outboundSchema;
  /** @deprecated use `Failure$Outbound` instead. */
  export type Outbound = Failure$Outbound;
}

export function failureToJSON(failure: Failure): string {
  return JSON.stringify(Failure$outboundSchema.parse(failure));
}

export function failureFromJSON(
  jsonString: string,
): SafeParseResult<Failure, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Failure$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Failure' from JSON`,
  );
}

/** @internal */
export const GetMicroDepositsResponse$inboundSchema: z.ZodType<
  GetMicroDepositsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.record(models.HalLink$inboundSchema).optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  status: z.string().optional(),
  failure: z.lazy(() => Failure$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type GetMicroDepositsResponse$Outbound = {
  _links?: { [k: string]: models.HalLink$Outbound } | undefined;
  created?: string | undefined;
  status?: string | undefined;
  failure?: Failure$Outbound | undefined;
};

/** @internal */
export const GetMicroDepositsResponse$outboundSchema: z.ZodType<
  GetMicroDepositsResponse$Outbound,
  z.ZodTypeDef,
  GetMicroDepositsResponse
> = z.object({
  links: z.record(models.HalLink$outboundSchema).optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  status: z.string().optional(),
  failure: z.lazy(() => Failure$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMicroDepositsResponse$ {
  /** @deprecated use `GetMicroDepositsResponse$inboundSchema` instead. */
  export const inboundSchema = GetMicroDepositsResponse$inboundSchema;
  /** @deprecated use `GetMicroDepositsResponse$outboundSchema` instead. */
  export const outboundSchema = GetMicroDepositsResponse$outboundSchema;
  /** @deprecated use `GetMicroDepositsResponse$Outbound` instead. */
  export type Outbound = GetMicroDepositsResponse$Outbound;
}

export function getMicroDepositsResponseToJSON(
  getMicroDepositsResponse: GetMicroDepositsResponse,
): string {
  return JSON.stringify(
    GetMicroDepositsResponse$outboundSchema.parse(getMicroDepositsResponse),
  );
}

export function getMicroDepositsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetMicroDepositsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMicroDepositsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMicroDepositsResponse' from JSON`,
  );
}
