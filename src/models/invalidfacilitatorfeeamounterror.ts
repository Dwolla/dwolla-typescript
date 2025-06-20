/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type InvalidFacilitatorFeeAmountErrorLinks = {};

export type InvalidFacilitatorFeeAmountErrorError = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  links?: InvalidFacilitatorFeeAmountErrorLinks | undefined;
};

export type InvalidFacilitatorFeeAmountErrorEmbedded = {
  errors?: Array<InvalidFacilitatorFeeAmountErrorError> | undefined;
};

/** @internal */
export const InvalidFacilitatorFeeAmountErrorLinks$inboundSchema: z.ZodType<
  InvalidFacilitatorFeeAmountErrorLinks,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type InvalidFacilitatorFeeAmountErrorLinks$Outbound = {};

/** @internal */
export const InvalidFacilitatorFeeAmountErrorLinks$outboundSchema: z.ZodType<
  InvalidFacilitatorFeeAmountErrorLinks$Outbound,
  z.ZodTypeDef,
  InvalidFacilitatorFeeAmountErrorLinks
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidFacilitatorFeeAmountErrorLinks$ {
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorLinks$inboundSchema` instead. */
  export const inboundSchema =
    InvalidFacilitatorFeeAmountErrorLinks$inboundSchema;
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorLinks$outboundSchema` instead. */
  export const outboundSchema =
    InvalidFacilitatorFeeAmountErrorLinks$outboundSchema;
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorLinks$Outbound` instead. */
  export type Outbound = InvalidFacilitatorFeeAmountErrorLinks$Outbound;
}

export function invalidFacilitatorFeeAmountErrorLinksToJSON(
  invalidFacilitatorFeeAmountErrorLinks: InvalidFacilitatorFeeAmountErrorLinks,
): string {
  return JSON.stringify(
    InvalidFacilitatorFeeAmountErrorLinks$outboundSchema.parse(
      invalidFacilitatorFeeAmountErrorLinks,
    ),
  );
}

export function invalidFacilitatorFeeAmountErrorLinksFromJSON(
  jsonString: string,
): SafeParseResult<InvalidFacilitatorFeeAmountErrorLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InvalidFacilitatorFeeAmountErrorLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvalidFacilitatorFeeAmountErrorLinks' from JSON`,
  );
}

/** @internal */
export const InvalidFacilitatorFeeAmountErrorError$inboundSchema: z.ZodType<
  InvalidFacilitatorFeeAmountErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string().optional(),
  message: z.string().optional(),
  path: z.string().optional(),
  _links: z.lazy(() => InvalidFacilitatorFeeAmountErrorLinks$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type InvalidFacilitatorFeeAmountErrorError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  _links?: InvalidFacilitatorFeeAmountErrorLinks$Outbound | undefined;
};

/** @internal */
export const InvalidFacilitatorFeeAmountErrorError$outboundSchema: z.ZodType<
  InvalidFacilitatorFeeAmountErrorError$Outbound,
  z.ZodTypeDef,
  InvalidFacilitatorFeeAmountErrorError
> = z.object({
  code: z.string().optional(),
  message: z.string().optional(),
  path: z.string().optional(),
  links: z.lazy(() => InvalidFacilitatorFeeAmountErrorLinks$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidFacilitatorFeeAmountErrorError$ {
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorError$inboundSchema` instead. */
  export const inboundSchema =
    InvalidFacilitatorFeeAmountErrorError$inboundSchema;
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorError$outboundSchema` instead. */
  export const outboundSchema =
    InvalidFacilitatorFeeAmountErrorError$outboundSchema;
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorError$Outbound` instead. */
  export type Outbound = InvalidFacilitatorFeeAmountErrorError$Outbound;
}

export function invalidFacilitatorFeeAmountErrorErrorToJSON(
  invalidFacilitatorFeeAmountErrorError: InvalidFacilitatorFeeAmountErrorError,
): string {
  return JSON.stringify(
    InvalidFacilitatorFeeAmountErrorError$outboundSchema.parse(
      invalidFacilitatorFeeAmountErrorError,
    ),
  );
}

export function invalidFacilitatorFeeAmountErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<InvalidFacilitatorFeeAmountErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InvalidFacilitatorFeeAmountErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvalidFacilitatorFeeAmountErrorError' from JSON`,
  );
}

/** @internal */
export const InvalidFacilitatorFeeAmountErrorEmbedded$inboundSchema: z.ZodType<
  InvalidFacilitatorFeeAmountErrorEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(
    z.lazy(() => InvalidFacilitatorFeeAmountErrorError$inboundSchema),
  ).optional(),
});

/** @internal */
export type InvalidFacilitatorFeeAmountErrorEmbedded$Outbound = {
  errors?: Array<InvalidFacilitatorFeeAmountErrorError$Outbound> | undefined;
};

/** @internal */
export const InvalidFacilitatorFeeAmountErrorEmbedded$outboundSchema: z.ZodType<
  InvalidFacilitatorFeeAmountErrorEmbedded$Outbound,
  z.ZodTypeDef,
  InvalidFacilitatorFeeAmountErrorEmbedded
> = z.object({
  errors: z.array(
    z.lazy(() => InvalidFacilitatorFeeAmountErrorError$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidFacilitatorFeeAmountErrorEmbedded$ {
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorEmbedded$inboundSchema` instead. */
  export const inboundSchema =
    InvalidFacilitatorFeeAmountErrorEmbedded$inboundSchema;
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorEmbedded$outboundSchema` instead. */
  export const outboundSchema =
    InvalidFacilitatorFeeAmountErrorEmbedded$outboundSchema;
  /** @deprecated use `InvalidFacilitatorFeeAmountErrorEmbedded$Outbound` instead. */
  export type Outbound = InvalidFacilitatorFeeAmountErrorEmbedded$Outbound;
}

export function invalidFacilitatorFeeAmountErrorEmbeddedToJSON(
  invalidFacilitatorFeeAmountErrorEmbedded:
    InvalidFacilitatorFeeAmountErrorEmbedded,
): string {
  return JSON.stringify(
    InvalidFacilitatorFeeAmountErrorEmbedded$outboundSchema.parse(
      invalidFacilitatorFeeAmountErrorEmbedded,
    ),
  );
}

export function invalidFacilitatorFeeAmountErrorEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<
  InvalidFacilitatorFeeAmountErrorEmbedded,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InvalidFacilitatorFeeAmountErrorEmbedded$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'InvalidFacilitatorFeeAmountErrorEmbedded' from JSON`,
  );
}
