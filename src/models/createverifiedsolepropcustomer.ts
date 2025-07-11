/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Create a Verified Business customer (Sole Proprietorship)
 */
export type CreateVerifiedSolePropCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string | undefined;
  phone?: string | undefined;
  correlationId?: string | undefined;
  type?: "business" | undefined;
  address1: string;
  address2?: string | undefined;
  city: string;
  state: string;
  postalCode: string;
  ssn: string;
  dateOfBirth: string;
  businessClassification: string;
  businessName: string;
  doingBusinessAs?: string | undefined;
  ein?: string | undefined;
  website?: string | undefined;
  businessType?: "soleProprietorship" | undefined;
};

/** @internal */
export const CreateVerifiedSolePropCustomer$inboundSchema: z.ZodType<
  CreateVerifiedSolePropCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  ipAddress: z.string().optional(),
  phone: z.string().optional(),
  correlationId: z.string().optional(),
  type: z.literal("business").default("business").optional(),
  address1: z.string(),
  address2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  ssn: z.string(),
  dateOfBirth: z.string(),
  businessClassification: z.string(),
  businessName: z.string(),
  doingBusinessAs: z.string().optional(),
  ein: z.string().optional(),
  website: z.string().optional(),
  businessType: z.literal("soleProprietorship").default("soleProprietorship")
    .optional(),
});

/** @internal */
export type CreateVerifiedSolePropCustomer$Outbound = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string | undefined;
  phone?: string | undefined;
  correlationId?: string | undefined;
  type: "business";
  address1: string;
  address2?: string | undefined;
  city: string;
  state: string;
  postalCode: string;
  ssn: string;
  dateOfBirth: string;
  businessClassification: string;
  businessName: string;
  doingBusinessAs?: string | undefined;
  ein?: string | undefined;
  website?: string | undefined;
  businessType: "soleProprietorship";
};

/** @internal */
export const CreateVerifiedSolePropCustomer$outboundSchema: z.ZodType<
  CreateVerifiedSolePropCustomer$Outbound,
  z.ZodTypeDef,
  CreateVerifiedSolePropCustomer
> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  ipAddress: z.string().optional(),
  phone: z.string().optional(),
  correlationId: z.string().optional(),
  type: z.literal("business").default("business" as const),
  address1: z.string(),
  address2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  ssn: z.string(),
  dateOfBirth: z.string(),
  businessClassification: z.string(),
  businessName: z.string(),
  doingBusinessAs: z.string().optional(),
  ein: z.string().optional(),
  website: z.string().optional(),
  businessType: z.literal("soleProprietorship").default(
    "soleProprietorship" as const,
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVerifiedSolePropCustomer$ {
  /** @deprecated use `CreateVerifiedSolePropCustomer$inboundSchema` instead. */
  export const inboundSchema = CreateVerifiedSolePropCustomer$inboundSchema;
  /** @deprecated use `CreateVerifiedSolePropCustomer$outboundSchema` instead. */
  export const outboundSchema = CreateVerifiedSolePropCustomer$outboundSchema;
  /** @deprecated use `CreateVerifiedSolePropCustomer$Outbound` instead. */
  export type Outbound = CreateVerifiedSolePropCustomer$Outbound;
}

export function createVerifiedSolePropCustomerToJSON(
  createVerifiedSolePropCustomer: CreateVerifiedSolePropCustomer,
): string {
  return JSON.stringify(
    CreateVerifiedSolePropCustomer$outboundSchema.parse(
      createVerifiedSolePropCustomer,
    ),
  );
}

export function createVerifiedSolePropCustomerFromJSON(
  jsonString: string,
): SafeParseResult<CreateVerifiedSolePropCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateVerifiedSolePropCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateVerifiedSolePropCustomer' from JSON`,
  );
}
