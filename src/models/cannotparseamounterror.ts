/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type CannotParseAmountErrorLinks = {};

export type CannotParseAmountErrorError = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  links?: CannotParseAmountErrorLinks | undefined;
};

export type CannotParseAmountErrorEmbedded = {
  errors?: Array<CannotParseAmountErrorError> | undefined;
};

/** @internal */
export const CannotParseAmountErrorLinks$inboundSchema: z.ZodType<
  CannotParseAmountErrorLinks,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CannotParseAmountErrorLinks$Outbound = {};

/** @internal */
export const CannotParseAmountErrorLinks$outboundSchema: z.ZodType<
  CannotParseAmountErrorLinks$Outbound,
  z.ZodTypeDef,
  CannotParseAmountErrorLinks
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CannotParseAmountErrorLinks$ {
  /** @deprecated use `CannotParseAmountErrorLinks$inboundSchema` instead. */
  export const inboundSchema = CannotParseAmountErrorLinks$inboundSchema;
  /** @deprecated use `CannotParseAmountErrorLinks$outboundSchema` instead. */
  export const outboundSchema = CannotParseAmountErrorLinks$outboundSchema;
  /** @deprecated use `CannotParseAmountErrorLinks$Outbound` instead. */
  export type Outbound = CannotParseAmountErrorLinks$Outbound;
}

export function cannotParseAmountErrorLinksToJSON(
  cannotParseAmountErrorLinks: CannotParseAmountErrorLinks,
): string {
  return JSON.stringify(
    CannotParseAmountErrorLinks$outboundSchema.parse(
      cannotParseAmountErrorLinks,
    ),
  );
}

export function cannotParseAmountErrorLinksFromJSON(
  jsonString: string,
): SafeParseResult<CannotParseAmountErrorLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CannotParseAmountErrorLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CannotParseAmountErrorLinks' from JSON`,
  );
}

/** @internal */
export const CannotParseAmountErrorError$inboundSchema: z.ZodType<
  CannotParseAmountErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string().optional(),
  message: z.string().optional(),
  path: z.string().optional(),
  _links: z.lazy(() => CannotParseAmountErrorLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type CannotParseAmountErrorError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  _links?: CannotParseAmountErrorLinks$Outbound | undefined;
};

/** @internal */
export const CannotParseAmountErrorError$outboundSchema: z.ZodType<
  CannotParseAmountErrorError$Outbound,
  z.ZodTypeDef,
  CannotParseAmountErrorError
> = z.object({
  code: z.string().optional(),
  message: z.string().optional(),
  path: z.string().optional(),
  links: z.lazy(() => CannotParseAmountErrorLinks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CannotParseAmountErrorError$ {
  /** @deprecated use `CannotParseAmountErrorError$inboundSchema` instead. */
  export const inboundSchema = CannotParseAmountErrorError$inboundSchema;
  /** @deprecated use `CannotParseAmountErrorError$outboundSchema` instead. */
  export const outboundSchema = CannotParseAmountErrorError$outboundSchema;
  /** @deprecated use `CannotParseAmountErrorError$Outbound` instead. */
  export type Outbound = CannotParseAmountErrorError$Outbound;
}

export function cannotParseAmountErrorErrorToJSON(
  cannotParseAmountErrorError: CannotParseAmountErrorError,
): string {
  return JSON.stringify(
    CannotParseAmountErrorError$outboundSchema.parse(
      cannotParseAmountErrorError,
    ),
  );
}

export function cannotParseAmountErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<CannotParseAmountErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CannotParseAmountErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CannotParseAmountErrorError' from JSON`,
  );
}

/** @internal */
export const CannotParseAmountErrorEmbedded$inboundSchema: z.ZodType<
  CannotParseAmountErrorEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => CannotParseAmountErrorError$inboundSchema))
    .optional(),
});

/** @internal */
export type CannotParseAmountErrorEmbedded$Outbound = {
  errors?: Array<CannotParseAmountErrorError$Outbound> | undefined;
};

/** @internal */
export const CannotParseAmountErrorEmbedded$outboundSchema: z.ZodType<
  CannotParseAmountErrorEmbedded$Outbound,
  z.ZodTypeDef,
  CannotParseAmountErrorEmbedded
> = z.object({
  errors: z.array(z.lazy(() => CannotParseAmountErrorError$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CannotParseAmountErrorEmbedded$ {
  /** @deprecated use `CannotParseAmountErrorEmbedded$inboundSchema` instead. */
  export const inboundSchema = CannotParseAmountErrorEmbedded$inboundSchema;
  /** @deprecated use `CannotParseAmountErrorEmbedded$outboundSchema` instead. */
  export const outboundSchema = CannotParseAmountErrorEmbedded$outboundSchema;
  /** @deprecated use `CannotParseAmountErrorEmbedded$Outbound` instead. */
  export type Outbound = CannotParseAmountErrorEmbedded$Outbound;
}

export function cannotParseAmountErrorEmbeddedToJSON(
  cannotParseAmountErrorEmbedded: CannotParseAmountErrorEmbedded,
): string {
  return JSON.stringify(
    CannotParseAmountErrorEmbedded$outboundSchema.parse(
      cannotParseAmountErrorEmbedded,
    ),
  );
}

export function cannotParseAmountErrorEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<CannotParseAmountErrorEmbedded, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CannotParseAmountErrorEmbedded$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CannotParseAmountErrorEmbedded' from JSON`,
  );
}
