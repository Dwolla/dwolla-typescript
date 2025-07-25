/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type WithdrawInvalidWireBeneficiaryLocalityErrorLinks = {};

export type WithdrawInvalidWireBeneficiaryLocalityErrorError = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  links?: WithdrawInvalidWireBeneficiaryLocalityErrorLinks | undefined;
};

export type WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded = {
  errors?: Array<WithdrawInvalidWireBeneficiaryLocalityErrorError> | undefined;
};

/** @internal */
export const WithdrawInvalidWireBeneficiaryLocalityErrorLinks$inboundSchema:
  z.ZodType<
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type WithdrawInvalidWireBeneficiaryLocalityErrorLinks$Outbound = {};

/** @internal */
export const WithdrawInvalidWireBeneficiaryLocalityErrorLinks$outboundSchema:
  z.ZodType<
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks$Outbound,
    z.ZodTypeDef,
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WithdrawInvalidWireBeneficiaryLocalityErrorLinks$ {
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorLinks$inboundSchema` instead. */
  export const inboundSchema =
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks$inboundSchema;
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorLinks$outboundSchema` instead. */
  export const outboundSchema =
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks$outboundSchema;
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorLinks$Outbound` instead. */
  export type Outbound =
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks$Outbound;
}

export function withdrawInvalidWireBeneficiaryLocalityErrorLinksToJSON(
  withdrawInvalidWireBeneficiaryLocalityErrorLinks:
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks,
): string {
  return JSON.stringify(
    WithdrawInvalidWireBeneficiaryLocalityErrorLinks$outboundSchema.parse(
      withdrawInvalidWireBeneficiaryLocalityErrorLinks,
    ),
  );
}

export function withdrawInvalidWireBeneficiaryLocalityErrorLinksFromJSON(
  jsonString: string,
): SafeParseResult<
  WithdrawInvalidWireBeneficiaryLocalityErrorLinks,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      WithdrawInvalidWireBeneficiaryLocalityErrorLinks$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'WithdrawInvalidWireBeneficiaryLocalityErrorLinks' from JSON`,
  );
}

/** @internal */
export const WithdrawInvalidWireBeneficiaryLocalityErrorError$inboundSchema:
  z.ZodType<
    WithdrawInvalidWireBeneficiaryLocalityErrorError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    code: z.string().optional(),
    message: z.string().optional(),
    path: z.string().optional(),
    _links: z.lazy(() =>
      WithdrawInvalidWireBeneficiaryLocalityErrorLinks$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "_links": "links",
    });
  });

/** @internal */
export type WithdrawInvalidWireBeneficiaryLocalityErrorError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
  path?: string | undefined;
  _links?:
    | WithdrawInvalidWireBeneficiaryLocalityErrorLinks$Outbound
    | undefined;
};

/** @internal */
export const WithdrawInvalidWireBeneficiaryLocalityErrorError$outboundSchema:
  z.ZodType<
    WithdrawInvalidWireBeneficiaryLocalityErrorError$Outbound,
    z.ZodTypeDef,
    WithdrawInvalidWireBeneficiaryLocalityErrorError
  > = z.object({
    code: z.string().optional(),
    message: z.string().optional(),
    path: z.string().optional(),
    links: z.lazy(() =>
      WithdrawInvalidWireBeneficiaryLocalityErrorLinks$outboundSchema
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
export namespace WithdrawInvalidWireBeneficiaryLocalityErrorError$ {
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorError$inboundSchema` instead. */
  export const inboundSchema =
    WithdrawInvalidWireBeneficiaryLocalityErrorError$inboundSchema;
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorError$outboundSchema` instead. */
  export const outboundSchema =
    WithdrawInvalidWireBeneficiaryLocalityErrorError$outboundSchema;
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorError$Outbound` instead. */
  export type Outbound =
    WithdrawInvalidWireBeneficiaryLocalityErrorError$Outbound;
}

export function withdrawInvalidWireBeneficiaryLocalityErrorErrorToJSON(
  withdrawInvalidWireBeneficiaryLocalityErrorError:
    WithdrawInvalidWireBeneficiaryLocalityErrorError,
): string {
  return JSON.stringify(
    WithdrawInvalidWireBeneficiaryLocalityErrorError$outboundSchema.parse(
      withdrawInvalidWireBeneficiaryLocalityErrorError,
    ),
  );
}

export function withdrawInvalidWireBeneficiaryLocalityErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<
  WithdrawInvalidWireBeneficiaryLocalityErrorError,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      WithdrawInvalidWireBeneficiaryLocalityErrorError$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'WithdrawInvalidWireBeneficiaryLocalityErrorError' from JSON`,
  );
}

/** @internal */
export const WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$inboundSchema:
  z.ZodType<
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded,
    z.ZodTypeDef,
    unknown
  > = z.object({
    errors: z.array(
      z.lazy(() =>
        WithdrawInvalidWireBeneficiaryLocalityErrorError$inboundSchema
      ),
    ).optional(),
  });

/** @internal */
export type WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$Outbound = {
  errors?:
    | Array<WithdrawInvalidWireBeneficiaryLocalityErrorError$Outbound>
    | undefined;
};

/** @internal */
export const WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$outboundSchema:
  z.ZodType<
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$Outbound,
    z.ZodTypeDef,
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded
  > = z.object({
    errors: z.array(
      z.lazy(() =>
        WithdrawInvalidWireBeneficiaryLocalityErrorError$outboundSchema
      ),
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$ {
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$inboundSchema` instead. */
  export const inboundSchema =
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$inboundSchema;
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$outboundSchema` instead. */
  export const outboundSchema =
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$outboundSchema;
  /** @deprecated use `WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$Outbound` instead. */
  export type Outbound =
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$Outbound;
}

export function withdrawInvalidWireBeneficiaryLocalityErrorEmbeddedToJSON(
  withdrawInvalidWireBeneficiaryLocalityErrorEmbedded:
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded,
): string {
  return JSON.stringify(
    WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$outboundSchema.parse(
      withdrawInvalidWireBeneficiaryLocalityErrorEmbedded,
    ),
  );
}

export function withdrawInvalidWireBeneficiaryLocalityErrorEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<
  WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded' from JSON`,
  );
}
