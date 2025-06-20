/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type InternationalAddress = {
  address1: string;
  address2?: string | undefined;
  address3?: string | undefined;
  city: string;
  postalCode?: string | undefined;
  country: string;
  stateProvinceRegion: string;
};

/** @internal */
export const InternationalAddress$inboundSchema: z.ZodType<
  InternationalAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  address1: z.string(),
  address2: z.string().optional(),
  address3: z.string().optional(),
  city: z.string(),
  postalCode: z.string().optional(),
  country: z.string(),
  stateProvinceRegion: z.string(),
});

/** @internal */
export type InternationalAddress$Outbound = {
  address1: string;
  address2?: string | undefined;
  address3?: string | undefined;
  city: string;
  postalCode?: string | undefined;
  country: string;
  stateProvinceRegion: string;
};

/** @internal */
export const InternationalAddress$outboundSchema: z.ZodType<
  InternationalAddress$Outbound,
  z.ZodTypeDef,
  InternationalAddress
> = z.object({
  address1: z.string(),
  address2: z.string().optional(),
  address3: z.string().optional(),
  city: z.string(),
  postalCode: z.string().optional(),
  country: z.string(),
  stateProvinceRegion: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternationalAddress$ {
  /** @deprecated use `InternationalAddress$inboundSchema` instead. */
  export const inboundSchema = InternationalAddress$inboundSchema;
  /** @deprecated use `InternationalAddress$outboundSchema` instead. */
  export const outboundSchema = InternationalAddress$outboundSchema;
  /** @deprecated use `InternationalAddress$Outbound` instead. */
  export type Outbound = InternationalAddress$Outbound;
}

export function internationalAddressToJSON(
  internationalAddress: InternationalAddress,
): string {
  return JSON.stringify(
    InternationalAddress$outboundSchema.parse(internationalAddress),
  );
}

export function internationalAddressFromJSON(
  jsonString: string,
): SafeParseResult<InternationalAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InternationalAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InternationalAddress' from JSON`,
  );
}
