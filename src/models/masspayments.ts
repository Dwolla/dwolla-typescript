/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  HalLink,
  HalLink$inboundSchema,
  HalLink$Outbound,
  HalLink$outboundSchema,
} from "./hallink.js";
import {
  MassPayment,
  MassPayment$inboundSchema,
  MassPayment$Outbound,
  MassPayment$outboundSchema,
} from "./masspayment.js";

export type MassPaymentsEmbedded = {
  massPayments?: Array<MassPayment> | undefined;
};

export type MassPayments = {
  links?: { [k: string]: HalLink } | undefined;
  embedded?: MassPaymentsEmbedded | undefined;
  total?: number | undefined;
};

/** @internal */
export const MassPaymentsEmbedded$inboundSchema: z.ZodType<
  MassPaymentsEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  "mass-payments": z.array(MassPayment$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "mass-payments": "massPayments",
  });
});

/** @internal */
export type MassPaymentsEmbedded$Outbound = {
  "mass-payments"?: Array<MassPayment$Outbound> | undefined;
};

/** @internal */
export const MassPaymentsEmbedded$outboundSchema: z.ZodType<
  MassPaymentsEmbedded$Outbound,
  z.ZodTypeDef,
  MassPaymentsEmbedded
> = z.object({
  massPayments: z.array(MassPayment$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    massPayments: "mass-payments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MassPaymentsEmbedded$ {
  /** @deprecated use `MassPaymentsEmbedded$inboundSchema` instead. */
  export const inboundSchema = MassPaymentsEmbedded$inboundSchema;
  /** @deprecated use `MassPaymentsEmbedded$outboundSchema` instead. */
  export const outboundSchema = MassPaymentsEmbedded$outboundSchema;
  /** @deprecated use `MassPaymentsEmbedded$Outbound` instead. */
  export type Outbound = MassPaymentsEmbedded$Outbound;
}

export function massPaymentsEmbeddedToJSON(
  massPaymentsEmbedded: MassPaymentsEmbedded,
): string {
  return JSON.stringify(
    MassPaymentsEmbedded$outboundSchema.parse(massPaymentsEmbedded),
  );
}

export function massPaymentsEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<MassPaymentsEmbedded, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MassPaymentsEmbedded$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MassPaymentsEmbedded' from JSON`,
  );
}

/** @internal */
export const MassPayments$inboundSchema: z.ZodType<
  MassPayments,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.record(HalLink$inboundSchema).optional(),
  _embedded: z.lazy(() => MassPaymentsEmbedded$inboundSchema).optional(),
  total: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
    "_embedded": "embedded",
  });
});

/** @internal */
export type MassPayments$Outbound = {
  _links?: { [k: string]: HalLink$Outbound } | undefined;
  _embedded?: MassPaymentsEmbedded$Outbound | undefined;
  total?: number | undefined;
};

/** @internal */
export const MassPayments$outboundSchema: z.ZodType<
  MassPayments$Outbound,
  z.ZodTypeDef,
  MassPayments
> = z.object({
  links: z.record(HalLink$outboundSchema).optional(),
  embedded: z.lazy(() => MassPaymentsEmbedded$outboundSchema).optional(),
  total: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
    embedded: "_embedded",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MassPayments$ {
  /** @deprecated use `MassPayments$inboundSchema` instead. */
  export const inboundSchema = MassPayments$inboundSchema;
  /** @deprecated use `MassPayments$outboundSchema` instead. */
  export const outboundSchema = MassPayments$outboundSchema;
  /** @deprecated use `MassPayments$Outbound` instead. */
  export type Outbound = MassPayments$Outbound;
}

export function massPaymentsToJSON(massPayments: MassPayments): string {
  return JSON.stringify(MassPayments$outboundSchema.parse(massPayments));
}

export function massPaymentsFromJSON(
  jsonString: string,
): SafeParseResult<MassPayments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MassPayments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MassPayments' from JSON`,
  );
}
