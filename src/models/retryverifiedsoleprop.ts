/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { RFCDate } from "../types/rfcdate.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Retry Verification for Verified Business Customer (Sole Proprietorship)
 */
export type RetryVerifiedSoleProp = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string | undefined;
  type: string;
  dateOfBirth: RFCDate;
  ssn: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  businessClassification: string;
  businessType: string;
  businessName: string;
  ein: string;
};

/** @internal */
export const RetryVerifiedSoleProp$inboundSchema: z.ZodType<
  RetryVerifiedSoleProp,
  z.ZodTypeDef,
  unknown
> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  ipAddress: z.string().optional(),
  type: z.string(),
  dateOfBirth: z.string().transform(v => new RFCDate(v)),
  ssn: z.string(),
  address1: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  businessClassification: z.string(),
  businessType: z.string(),
  businessName: z.string(),
  ein: z.string(),
});

/** @internal */
export type RetryVerifiedSoleProp$Outbound = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string | undefined;
  type: string;
  dateOfBirth: string;
  ssn: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  businessClassification: string;
  businessType: string;
  businessName: string;
  ein: string;
};

/** @internal */
export const RetryVerifiedSoleProp$outboundSchema: z.ZodType<
  RetryVerifiedSoleProp$Outbound,
  z.ZodTypeDef,
  RetryVerifiedSoleProp
> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  ipAddress: z.string().optional(),
  type: z.string(),
  dateOfBirth: z.instanceof(RFCDate).transform(v => v.toString()),
  ssn: z.string(),
  address1: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  businessClassification: z.string(),
  businessType: z.string(),
  businessName: z.string(),
  ein: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetryVerifiedSoleProp$ {
  /** @deprecated use `RetryVerifiedSoleProp$inboundSchema` instead. */
  export const inboundSchema = RetryVerifiedSoleProp$inboundSchema;
  /** @deprecated use `RetryVerifiedSoleProp$outboundSchema` instead. */
  export const outboundSchema = RetryVerifiedSoleProp$outboundSchema;
  /** @deprecated use `RetryVerifiedSoleProp$Outbound` instead. */
  export type Outbound = RetryVerifiedSoleProp$Outbound;
}

export function retryVerifiedSolePropToJSON(
  retryVerifiedSoleProp: RetryVerifiedSoleProp,
): string {
  return JSON.stringify(
    RetryVerifiedSoleProp$outboundSchema.parse(retryVerifiedSoleProp),
  );
}

export function retryVerifiedSolePropFromJSON(
  jsonString: string,
): SafeParseResult<RetryVerifiedSoleProp, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetryVerifiedSoleProp$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetryVerifiedSoleProp' from JSON`,
  );
}
