/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type InvalidAmountForDestinationProcessingChannelErrorLinks = {};

export type InvalidAmountForDestinationProcessingChannelErrorError = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  links?: InvalidAmountForDestinationProcessingChannelErrorLinks | undefined;
};

export type InvalidAmountForDestinationProcessingChannelErrorEmbedded = {
  errors?:
    | Array<InvalidAmountForDestinationProcessingChannelErrorError>
    | undefined;
};

/** @internal */
export const InvalidAmountForDestinationProcessingChannelErrorLinks$inboundSchema:
  z.ZodType<
    InvalidAmountForDestinationProcessingChannelErrorLinks,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type InvalidAmountForDestinationProcessingChannelErrorLinks$Outbound =
  {};

/** @internal */
export const InvalidAmountForDestinationProcessingChannelErrorLinks$outboundSchema:
  z.ZodType<
    InvalidAmountForDestinationProcessingChannelErrorLinks$Outbound,
    z.ZodTypeDef,
    InvalidAmountForDestinationProcessingChannelErrorLinks
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidAmountForDestinationProcessingChannelErrorLinks$ {
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorLinks$inboundSchema` instead. */
  export const inboundSchema =
    InvalidAmountForDestinationProcessingChannelErrorLinks$inboundSchema;
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorLinks$outboundSchema` instead. */
  export const outboundSchema =
    InvalidAmountForDestinationProcessingChannelErrorLinks$outboundSchema;
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorLinks$Outbound` instead. */
  export type Outbound =
    InvalidAmountForDestinationProcessingChannelErrorLinks$Outbound;
}

export function invalidAmountForDestinationProcessingChannelErrorLinksToJSON(
  invalidAmountForDestinationProcessingChannelErrorLinks:
    InvalidAmountForDestinationProcessingChannelErrorLinks,
): string {
  return JSON.stringify(
    InvalidAmountForDestinationProcessingChannelErrorLinks$outboundSchema.parse(
      invalidAmountForDestinationProcessingChannelErrorLinks,
    ),
  );
}

export function invalidAmountForDestinationProcessingChannelErrorLinksFromJSON(
  jsonString: string,
): SafeParseResult<
  InvalidAmountForDestinationProcessingChannelErrorLinks,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InvalidAmountForDestinationProcessingChannelErrorLinks$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'InvalidAmountForDestinationProcessingChannelErrorLinks' from JSON`,
  );
}

/** @internal */
export const InvalidAmountForDestinationProcessingChannelErrorError$inboundSchema:
  z.ZodType<
    InvalidAmountForDestinationProcessingChannelErrorError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    code: z.string().optional(),
    message: z.string().optional(),
    path: z.string().optional(),
    _links: z.lazy(() =>
      InvalidAmountForDestinationProcessingChannelErrorLinks$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "_links": "links",
    });
  });

/** @internal */
export type InvalidAmountForDestinationProcessingChannelErrorError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  _links?:
    | InvalidAmountForDestinationProcessingChannelErrorLinks$Outbound
    | undefined;
};

/** @internal */
export const InvalidAmountForDestinationProcessingChannelErrorError$outboundSchema:
  z.ZodType<
    InvalidAmountForDestinationProcessingChannelErrorError$Outbound,
    z.ZodTypeDef,
    InvalidAmountForDestinationProcessingChannelErrorError
  > = z.object({
    code: z.string().optional(),
    message: z.string().optional(),
    path: z.string().optional(),
    links: z.lazy(() =>
      InvalidAmountForDestinationProcessingChannelErrorLinks$outboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      links: "_links",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidAmountForDestinationProcessingChannelErrorError$ {
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorError$inboundSchema` instead. */
  export const inboundSchema =
    InvalidAmountForDestinationProcessingChannelErrorError$inboundSchema;
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorError$outboundSchema` instead. */
  export const outboundSchema =
    InvalidAmountForDestinationProcessingChannelErrorError$outboundSchema;
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorError$Outbound` instead. */
  export type Outbound =
    InvalidAmountForDestinationProcessingChannelErrorError$Outbound;
}

export function invalidAmountForDestinationProcessingChannelErrorErrorToJSON(
  invalidAmountForDestinationProcessingChannelErrorError:
    InvalidAmountForDestinationProcessingChannelErrorError,
): string {
  return JSON.stringify(
    InvalidAmountForDestinationProcessingChannelErrorError$outboundSchema.parse(
      invalidAmountForDestinationProcessingChannelErrorError,
    ),
  );
}

export function invalidAmountForDestinationProcessingChannelErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<
  InvalidAmountForDestinationProcessingChannelErrorError,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InvalidAmountForDestinationProcessingChannelErrorError$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'InvalidAmountForDestinationProcessingChannelErrorError' from JSON`,
  );
}

/** @internal */
export const InvalidAmountForDestinationProcessingChannelErrorEmbedded$inboundSchema:
  z.ZodType<
    InvalidAmountForDestinationProcessingChannelErrorEmbedded,
    z.ZodTypeDef,
    unknown
  > = z.object({
    errors: z.array(
      z.lazy(() =>
        InvalidAmountForDestinationProcessingChannelErrorError$inboundSchema
      ),
    ).optional(),
  });

/** @internal */
export type InvalidAmountForDestinationProcessingChannelErrorEmbedded$Outbound =
  {
    errors?:
      | Array<InvalidAmountForDestinationProcessingChannelErrorError$Outbound>
      | undefined;
  };

/** @internal */
export const InvalidAmountForDestinationProcessingChannelErrorEmbedded$outboundSchema:
  z.ZodType<
    InvalidAmountForDestinationProcessingChannelErrorEmbedded$Outbound,
    z.ZodTypeDef,
    InvalidAmountForDestinationProcessingChannelErrorEmbedded
  > = z.object({
    errors: z.array(
      z.lazy(() =>
        InvalidAmountForDestinationProcessingChannelErrorError$outboundSchema
      ),
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidAmountForDestinationProcessingChannelErrorEmbedded$ {
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorEmbedded$inboundSchema` instead. */
  export const inboundSchema =
    InvalidAmountForDestinationProcessingChannelErrorEmbedded$inboundSchema;
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorEmbedded$outboundSchema` instead. */
  export const outboundSchema =
    InvalidAmountForDestinationProcessingChannelErrorEmbedded$outboundSchema;
  /** @deprecated use `InvalidAmountForDestinationProcessingChannelErrorEmbedded$Outbound` instead. */
  export type Outbound =
    InvalidAmountForDestinationProcessingChannelErrorEmbedded$Outbound;
}

export function invalidAmountForDestinationProcessingChannelErrorEmbeddedToJSON(
  invalidAmountForDestinationProcessingChannelErrorEmbedded:
    InvalidAmountForDestinationProcessingChannelErrorEmbedded,
): string {
  return JSON.stringify(
    InvalidAmountForDestinationProcessingChannelErrorEmbedded$outboundSchema
      .parse(invalidAmountForDestinationProcessingChannelErrorEmbedded),
  );
}

export function invalidAmountForDestinationProcessingChannelErrorEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<
  InvalidAmountForDestinationProcessingChannelErrorEmbedded,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InvalidAmountForDestinationProcessingChannelErrorEmbedded$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'InvalidAmountForDestinationProcessingChannelErrorEmbedded' from JSON`,
  );
}
