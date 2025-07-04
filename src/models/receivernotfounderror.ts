/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type ReceiverNotFoundErrorLinks = {};

export type ReceiverNotFoundErrorError = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  links?: ReceiverNotFoundErrorLinks | undefined;
};

export type ReceiverNotFoundErrorEmbedded = {
  errors?: Array<ReceiverNotFoundErrorError> | undefined;
};

/** @internal */
export const ReceiverNotFoundErrorLinks$inboundSchema: z.ZodType<
  ReceiverNotFoundErrorLinks,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ReceiverNotFoundErrorLinks$Outbound = {};

/** @internal */
export const ReceiverNotFoundErrorLinks$outboundSchema: z.ZodType<
  ReceiverNotFoundErrorLinks$Outbound,
  z.ZodTypeDef,
  ReceiverNotFoundErrorLinks
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReceiverNotFoundErrorLinks$ {
  /** @deprecated use `ReceiverNotFoundErrorLinks$inboundSchema` instead. */
  export const inboundSchema = ReceiverNotFoundErrorLinks$inboundSchema;
  /** @deprecated use `ReceiverNotFoundErrorLinks$outboundSchema` instead. */
  export const outboundSchema = ReceiverNotFoundErrorLinks$outboundSchema;
  /** @deprecated use `ReceiverNotFoundErrorLinks$Outbound` instead. */
  export type Outbound = ReceiverNotFoundErrorLinks$Outbound;
}

export function receiverNotFoundErrorLinksToJSON(
  receiverNotFoundErrorLinks: ReceiverNotFoundErrorLinks,
): string {
  return JSON.stringify(
    ReceiverNotFoundErrorLinks$outboundSchema.parse(receiverNotFoundErrorLinks),
  );
}

export function receiverNotFoundErrorLinksFromJSON(
  jsonString: string,
): SafeParseResult<ReceiverNotFoundErrorLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReceiverNotFoundErrorLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReceiverNotFoundErrorLinks' from JSON`,
  );
}

/** @internal */
export const ReceiverNotFoundErrorError$inboundSchema: z.ZodType<
  ReceiverNotFoundErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string().optional(),
  message: z.string().optional(),
  path: z.string().optional(),
  _links: z.lazy(() => ReceiverNotFoundErrorLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type ReceiverNotFoundErrorError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  _links?: ReceiverNotFoundErrorLinks$Outbound | undefined;
};

/** @internal */
export const ReceiverNotFoundErrorError$outboundSchema: z.ZodType<
  ReceiverNotFoundErrorError$Outbound,
  z.ZodTypeDef,
  ReceiverNotFoundErrorError
> = z.object({
  code: z.string().optional(),
  message: z.string().optional(),
  path: z.string().optional(),
  links: z.lazy(() => ReceiverNotFoundErrorLinks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReceiverNotFoundErrorError$ {
  /** @deprecated use `ReceiverNotFoundErrorError$inboundSchema` instead. */
  export const inboundSchema = ReceiverNotFoundErrorError$inboundSchema;
  /** @deprecated use `ReceiverNotFoundErrorError$outboundSchema` instead. */
  export const outboundSchema = ReceiverNotFoundErrorError$outboundSchema;
  /** @deprecated use `ReceiverNotFoundErrorError$Outbound` instead. */
  export type Outbound = ReceiverNotFoundErrorError$Outbound;
}

export function receiverNotFoundErrorErrorToJSON(
  receiverNotFoundErrorError: ReceiverNotFoundErrorError,
): string {
  return JSON.stringify(
    ReceiverNotFoundErrorError$outboundSchema.parse(receiverNotFoundErrorError),
  );
}

export function receiverNotFoundErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<ReceiverNotFoundErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReceiverNotFoundErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReceiverNotFoundErrorError' from JSON`,
  );
}

/** @internal */
export const ReceiverNotFoundErrorEmbedded$inboundSchema: z.ZodType<
  ReceiverNotFoundErrorEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => ReceiverNotFoundErrorError$inboundSchema))
    .optional(),
});

/** @internal */
export type ReceiverNotFoundErrorEmbedded$Outbound = {
  errors?: Array<ReceiverNotFoundErrorError$Outbound> | undefined;
};

/** @internal */
export const ReceiverNotFoundErrorEmbedded$outboundSchema: z.ZodType<
  ReceiverNotFoundErrorEmbedded$Outbound,
  z.ZodTypeDef,
  ReceiverNotFoundErrorEmbedded
> = z.object({
  errors: z.array(z.lazy(() => ReceiverNotFoundErrorError$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReceiverNotFoundErrorEmbedded$ {
  /** @deprecated use `ReceiverNotFoundErrorEmbedded$inboundSchema` instead. */
  export const inboundSchema = ReceiverNotFoundErrorEmbedded$inboundSchema;
  /** @deprecated use `ReceiverNotFoundErrorEmbedded$outboundSchema` instead. */
  export const outboundSchema = ReceiverNotFoundErrorEmbedded$outboundSchema;
  /** @deprecated use `ReceiverNotFoundErrorEmbedded$Outbound` instead. */
  export type Outbound = ReceiverNotFoundErrorEmbedded$Outbound;
}

export function receiverNotFoundErrorEmbeddedToJSON(
  receiverNotFoundErrorEmbedded: ReceiverNotFoundErrorEmbedded,
): string {
  return JSON.stringify(
    ReceiverNotFoundErrorEmbedded$outboundSchema.parse(
      receiverNotFoundErrorEmbedded,
    ),
  );
}

export function receiverNotFoundErrorEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<ReceiverNotFoundErrorEmbedded, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReceiverNotFoundErrorEmbedded$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReceiverNotFoundErrorEmbedded' from JSON`,
  );
}
