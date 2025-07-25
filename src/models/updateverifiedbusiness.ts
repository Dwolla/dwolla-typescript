/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Update Verified Business Customer Information (both Sole Proprietorship and Non-Sole Proprietorship)
 */
export type UpdateVerifiedBusiness = {
  email?: string | undefined;
  ipAddress?: string | undefined;
  address1?: string | undefined;
  address2?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  postalCode?: string | undefined;
  phone?: string | undefined;
  doingBusinessAs?: string | undefined;
  website?: string | undefined;
};

/** @internal */
export const UpdateVerifiedBusiness$inboundSchema: z.ZodType<
  UpdateVerifiedBusiness,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string().optional(),
  ipAddress: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  phone: z.string().optional(),
  doingBusinessAs: z.string().optional(),
  website: z.string().optional(),
});

/** @internal */
export type UpdateVerifiedBusiness$Outbound = {
  email?: string | undefined;
  ipAddress?: string | undefined;
  address1?: string | undefined;
  address2?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  postalCode?: string | undefined;
  phone?: string | undefined;
  doingBusinessAs?: string | undefined;
  website?: string | undefined;
};

/** @internal */
export const UpdateVerifiedBusiness$outboundSchema: z.ZodType<
  UpdateVerifiedBusiness$Outbound,
  z.ZodTypeDef,
  UpdateVerifiedBusiness
> = z.object({
  email: z.string().optional(),
  ipAddress: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  phone: z.string().optional(),
  doingBusinessAs: z.string().optional(),
  website: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateVerifiedBusiness$ {
  /** @deprecated use `UpdateVerifiedBusiness$inboundSchema` instead. */
  export const inboundSchema = UpdateVerifiedBusiness$inboundSchema;
  /** @deprecated use `UpdateVerifiedBusiness$outboundSchema` instead. */
  export const outboundSchema = UpdateVerifiedBusiness$outboundSchema;
  /** @deprecated use `UpdateVerifiedBusiness$Outbound` instead. */
  export type Outbound = UpdateVerifiedBusiness$Outbound;
}

export function updateVerifiedBusinessToJSON(
  updateVerifiedBusiness: UpdateVerifiedBusiness,
): string {
  return JSON.stringify(
    UpdateVerifiedBusiness$outboundSchema.parse(updateVerifiedBusiness),
  );
}

export function updateVerifiedBusinessFromJSON(
  jsonString: string,
): SafeParseResult<UpdateVerifiedBusiness, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateVerifiedBusiness$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateVerifiedBusiness' from JSON`,
  );
}
