/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * Parameters for creating a beneficial owner
 */
export type CreateBeneficialOwnerForCustomerRequestBody =
  | models.CreateUSBeneficialOwner
  | models.CreateInternationalBeneficialOwner;

export type CreateBeneficialOwnerForCustomerRequest = {
  /**
   * Customer ID for which to create a Beneficial Owner
   */
  id: string;
  /**
   * Parameters for creating a beneficial owner
   */
  requestBody:
    | models.CreateUSBeneficialOwner
    | models.CreateInternationalBeneficialOwner;
};

export type CreateBeneficialOwnerForCustomerResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const CreateBeneficialOwnerForCustomerRequestBody$inboundSchema:
  z.ZodType<
    CreateBeneficialOwnerForCustomerRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.union([
    models.CreateUSBeneficialOwner$inboundSchema,
    models.CreateInternationalBeneficialOwner$inboundSchema,
  ]);

/** @internal */
export type CreateBeneficialOwnerForCustomerRequestBody$Outbound =
  | models.CreateUSBeneficialOwner$Outbound
  | models.CreateInternationalBeneficialOwner$Outbound;

/** @internal */
export const CreateBeneficialOwnerForCustomerRequestBody$outboundSchema:
  z.ZodType<
    CreateBeneficialOwnerForCustomerRequestBody$Outbound,
    z.ZodTypeDef,
    CreateBeneficialOwnerForCustomerRequestBody
  > = z.union([
    models.CreateUSBeneficialOwner$outboundSchema,
    models.CreateInternationalBeneficialOwner$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBeneficialOwnerForCustomerRequestBody$ {
  /** @deprecated use `CreateBeneficialOwnerForCustomerRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateBeneficialOwnerForCustomerRequestBody$inboundSchema;
  /** @deprecated use `CreateBeneficialOwnerForCustomerRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateBeneficialOwnerForCustomerRequestBody$outboundSchema;
  /** @deprecated use `CreateBeneficialOwnerForCustomerRequestBody$Outbound` instead. */
  export type Outbound = CreateBeneficialOwnerForCustomerRequestBody$Outbound;
}

export function createBeneficialOwnerForCustomerRequestBodyToJSON(
  createBeneficialOwnerForCustomerRequestBody:
    CreateBeneficialOwnerForCustomerRequestBody,
): string {
  return JSON.stringify(
    CreateBeneficialOwnerForCustomerRequestBody$outboundSchema.parse(
      createBeneficialOwnerForCustomerRequestBody,
    ),
  );
}

export function createBeneficialOwnerForCustomerRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateBeneficialOwnerForCustomerRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBeneficialOwnerForCustomerRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateBeneficialOwnerForCustomerRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateBeneficialOwnerForCustomerRequest$inboundSchema: z.ZodType<
  CreateBeneficialOwnerForCustomerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  RequestBody: z.union([
    models.CreateUSBeneficialOwner$inboundSchema,
    models.CreateInternationalBeneficialOwner$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateBeneficialOwnerForCustomerRequest$Outbound = {
  id: string;
  RequestBody:
    | models.CreateUSBeneficialOwner$Outbound
    | models.CreateInternationalBeneficialOwner$Outbound;
};

/** @internal */
export const CreateBeneficialOwnerForCustomerRequest$outboundSchema: z.ZodType<
  CreateBeneficialOwnerForCustomerRequest$Outbound,
  z.ZodTypeDef,
  CreateBeneficialOwnerForCustomerRequest
> = z.object({
  id: z.string(),
  requestBody: z.union([
    models.CreateUSBeneficialOwner$outboundSchema,
    models.CreateInternationalBeneficialOwner$outboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBeneficialOwnerForCustomerRequest$ {
  /** @deprecated use `CreateBeneficialOwnerForCustomerRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateBeneficialOwnerForCustomerRequest$inboundSchema;
  /** @deprecated use `CreateBeneficialOwnerForCustomerRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateBeneficialOwnerForCustomerRequest$outboundSchema;
  /** @deprecated use `CreateBeneficialOwnerForCustomerRequest$Outbound` instead. */
  export type Outbound = CreateBeneficialOwnerForCustomerRequest$Outbound;
}

export function createBeneficialOwnerForCustomerRequestToJSON(
  createBeneficialOwnerForCustomerRequest:
    CreateBeneficialOwnerForCustomerRequest,
): string {
  return JSON.stringify(
    CreateBeneficialOwnerForCustomerRequest$outboundSchema.parse(
      createBeneficialOwnerForCustomerRequest,
    ),
  );
}

export function createBeneficialOwnerForCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateBeneficialOwnerForCustomerRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBeneficialOwnerForCustomerRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateBeneficialOwnerForCustomerRequest' from JSON`,
  );
}

/** @internal */
export const CreateBeneficialOwnerForCustomerResponse$inboundSchema: z.ZodType<
  CreateBeneficialOwnerForCustomerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type CreateBeneficialOwnerForCustomerResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const CreateBeneficialOwnerForCustomerResponse$outboundSchema: z.ZodType<
  CreateBeneficialOwnerForCustomerResponse$Outbound,
  z.ZodTypeDef,
  CreateBeneficialOwnerForCustomerResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBeneficialOwnerForCustomerResponse$ {
  /** @deprecated use `CreateBeneficialOwnerForCustomerResponse$inboundSchema` instead. */
  export const inboundSchema =
    CreateBeneficialOwnerForCustomerResponse$inboundSchema;
  /** @deprecated use `CreateBeneficialOwnerForCustomerResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateBeneficialOwnerForCustomerResponse$outboundSchema;
  /** @deprecated use `CreateBeneficialOwnerForCustomerResponse$Outbound` instead. */
  export type Outbound = CreateBeneficialOwnerForCustomerResponse$Outbound;
}

export function createBeneficialOwnerForCustomerResponseToJSON(
  createBeneficialOwnerForCustomerResponse:
    CreateBeneficialOwnerForCustomerResponse,
): string {
  return JSON.stringify(
    CreateBeneficialOwnerForCustomerResponse$outboundSchema.parse(
      createBeneficialOwnerForCustomerResponse,
    ),
  );
}

export function createBeneficialOwnerForCustomerResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateBeneficialOwnerForCustomerResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBeneficialOwnerForCustomerResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateBeneficialOwnerForCustomerResponse' from JSON`,
  );
}
