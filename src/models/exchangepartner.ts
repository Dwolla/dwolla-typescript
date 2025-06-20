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

export type ExchangePartner = {
  links?: { [k: string]: HalLink } | undefined;
  id?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  created?: Date | undefined;
};

/** @internal */
export const ExchangePartner$inboundSchema: z.ZodType<
  ExchangePartner,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.record(HalLink$inboundSchema).optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type ExchangePartner$Outbound = {
  _links?: { [k: string]: HalLink$Outbound } | undefined;
  id?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  created?: string | undefined;
};

/** @internal */
export const ExchangePartner$outboundSchema: z.ZodType<
  ExchangePartner$Outbound,
  z.ZodTypeDef,
  ExchangePartner
> = z.object({
  links: z.record(HalLink$outboundSchema).optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExchangePartner$ {
  /** @deprecated use `ExchangePartner$inboundSchema` instead. */
  export const inboundSchema = ExchangePartner$inboundSchema;
  /** @deprecated use `ExchangePartner$outboundSchema` instead. */
  export const outboundSchema = ExchangePartner$outboundSchema;
  /** @deprecated use `ExchangePartner$Outbound` instead. */
  export type Outbound = ExchangePartner$Outbound;
}

export function exchangePartnerToJSON(
  exchangePartner: ExchangePartner,
): string {
  return JSON.stringify(ExchangePartner$outboundSchema.parse(exchangePartner));
}

export function exchangePartnerFromJSON(
  jsonString: string,
): SafeParseResult<ExchangePartner, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExchangePartner$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExchangePartner' from JSON`,
  );
}
