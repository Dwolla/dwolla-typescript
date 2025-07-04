/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Parameters for certifying beneficial ownership for a Customer
 */
export type CertifyBeneficialOwnershipForCustomerRequestBody = {
  status: string;
};

export type CertifyBeneficialOwnershipForCustomerRequest = {
  /**
   * Customer unique identifier
   */
  id: string;
  /**
   * Parameters for certifying beneficial ownership for a Customer
   */
  requestBody: CertifyBeneficialOwnershipForCustomerRequestBody;
};

/** @internal */
export const CertifyBeneficialOwnershipForCustomerRequestBody$inboundSchema:
  z.ZodType<
    CertifyBeneficialOwnershipForCustomerRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status: z.string(),
  });

/** @internal */
export type CertifyBeneficialOwnershipForCustomerRequestBody$Outbound = {
  status: string;
};

/** @internal */
export const CertifyBeneficialOwnershipForCustomerRequestBody$outboundSchema:
  z.ZodType<
    CertifyBeneficialOwnershipForCustomerRequestBody$Outbound,
    z.ZodTypeDef,
    CertifyBeneficialOwnershipForCustomerRequestBody
  > = z.object({
    status: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CertifyBeneficialOwnershipForCustomerRequestBody$ {
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CertifyBeneficialOwnershipForCustomerRequestBody$inboundSchema;
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CertifyBeneficialOwnershipForCustomerRequestBody$outboundSchema;
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerRequestBody$Outbound` instead. */
  export type Outbound =
    CertifyBeneficialOwnershipForCustomerRequestBody$Outbound;
}

export function certifyBeneficialOwnershipForCustomerRequestBodyToJSON(
  certifyBeneficialOwnershipForCustomerRequestBody:
    CertifyBeneficialOwnershipForCustomerRequestBody,
): string {
  return JSON.stringify(
    CertifyBeneficialOwnershipForCustomerRequestBody$outboundSchema.parse(
      certifyBeneficialOwnershipForCustomerRequestBody,
    ),
  );
}

export function certifyBeneficialOwnershipForCustomerRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  CertifyBeneficialOwnershipForCustomerRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CertifyBeneficialOwnershipForCustomerRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CertifyBeneficialOwnershipForCustomerRequestBody' from JSON`,
  );
}

/** @internal */
export const CertifyBeneficialOwnershipForCustomerRequest$inboundSchema:
  z.ZodType<
    CertifyBeneficialOwnershipForCustomerRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string(),
    RequestBody: z.lazy(() =>
      CertifyBeneficialOwnershipForCustomerRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type CertifyBeneficialOwnershipForCustomerRequest$Outbound = {
  id: string;
  RequestBody: CertifyBeneficialOwnershipForCustomerRequestBody$Outbound;
};

/** @internal */
export const CertifyBeneficialOwnershipForCustomerRequest$outboundSchema:
  z.ZodType<
    CertifyBeneficialOwnershipForCustomerRequest$Outbound,
    z.ZodTypeDef,
    CertifyBeneficialOwnershipForCustomerRequest
  > = z.object({
    id: z.string(),
    requestBody: z.lazy(() =>
      CertifyBeneficialOwnershipForCustomerRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CertifyBeneficialOwnershipForCustomerRequest$ {
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerRequest$inboundSchema` instead. */
  export const inboundSchema =
    CertifyBeneficialOwnershipForCustomerRequest$inboundSchema;
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerRequest$outboundSchema` instead. */
  export const outboundSchema =
    CertifyBeneficialOwnershipForCustomerRequest$outboundSchema;
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerRequest$Outbound` instead. */
  export type Outbound = CertifyBeneficialOwnershipForCustomerRequest$Outbound;
}

export function certifyBeneficialOwnershipForCustomerRequestToJSON(
  certifyBeneficialOwnershipForCustomerRequest:
    CertifyBeneficialOwnershipForCustomerRequest,
): string {
  return JSON.stringify(
    CertifyBeneficialOwnershipForCustomerRequest$outboundSchema.parse(
      certifyBeneficialOwnershipForCustomerRequest,
    ),
  );
}

export function certifyBeneficialOwnershipForCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  CertifyBeneficialOwnershipForCustomerRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CertifyBeneficialOwnershipForCustomerRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CertifyBeneficialOwnershipForCustomerRequest' from JSON`,
  );
}
