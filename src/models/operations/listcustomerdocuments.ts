/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCustomerDocumentsRequest = {
  /**
   * customer unique identifier
   */
  id: string;
};

/** @internal */
export const ListCustomerDocumentsRequest$inboundSchema: z.ZodType<
  ListCustomerDocumentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type ListCustomerDocumentsRequest$Outbound = {
  id: string;
};

/** @internal */
export const ListCustomerDocumentsRequest$outboundSchema: z.ZodType<
  ListCustomerDocumentsRequest$Outbound,
  z.ZodTypeDef,
  ListCustomerDocumentsRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomerDocumentsRequest$ {
  /** @deprecated use `ListCustomerDocumentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCustomerDocumentsRequest$inboundSchema;
  /** @deprecated use `ListCustomerDocumentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListCustomerDocumentsRequest$outboundSchema;
  /** @deprecated use `ListCustomerDocumentsRequest$Outbound` instead. */
  export type Outbound = ListCustomerDocumentsRequest$Outbound;
}

export function listCustomerDocumentsRequestToJSON(
  listCustomerDocumentsRequest: ListCustomerDocumentsRequest,
): string {
  return JSON.stringify(
    ListCustomerDocumentsRequest$outboundSchema.parse(
      listCustomerDocumentsRequest,
    ),
  );
}

export function listCustomerDocumentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomerDocumentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomerDocumentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomerDocumentsRequest' from JSON`,
  );
}
