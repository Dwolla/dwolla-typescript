/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  Exchange,
  Exchange$inboundSchema,
  Exchange$Outbound,
  Exchange$outboundSchema,
} from "./exchange.js";
import {
  HalLink,
  HalLink$inboundSchema,
  HalLink$Outbound,
  HalLink$outboundSchema,
} from "./hallink.js";

export type ExchangesEmbedded = {
  exchanges?: Array<Exchange> | undefined;
};

export type Exchanges = {
  links?: { [k: string]: HalLink } | undefined;
  embedded?: ExchangesEmbedded | undefined;
  total?: number | undefined;
};

/** @internal */
export const ExchangesEmbedded$inboundSchema: z.ZodType<
  ExchangesEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  exchanges: z.array(Exchange$inboundSchema).optional(),
});

/** @internal */
export type ExchangesEmbedded$Outbound = {
  exchanges?: Array<Exchange$Outbound> | undefined;
};

/** @internal */
export const ExchangesEmbedded$outboundSchema: z.ZodType<
  ExchangesEmbedded$Outbound,
  z.ZodTypeDef,
  ExchangesEmbedded
> = z.object({
  exchanges: z.array(Exchange$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExchangesEmbedded$ {
  /** @deprecated use `ExchangesEmbedded$inboundSchema` instead. */
  export const inboundSchema = ExchangesEmbedded$inboundSchema;
  /** @deprecated use `ExchangesEmbedded$outboundSchema` instead. */
  export const outboundSchema = ExchangesEmbedded$outboundSchema;
  /** @deprecated use `ExchangesEmbedded$Outbound` instead. */
  export type Outbound = ExchangesEmbedded$Outbound;
}

export function exchangesEmbeddedToJSON(
  exchangesEmbedded: ExchangesEmbedded,
): string {
  return JSON.stringify(
    ExchangesEmbedded$outboundSchema.parse(exchangesEmbedded),
  );
}

export function exchangesEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<ExchangesEmbedded, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExchangesEmbedded$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExchangesEmbedded' from JSON`,
  );
}

/** @internal */
export const Exchanges$inboundSchema: z.ZodType<
  Exchanges,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.record(HalLink$inboundSchema).optional(),
  _embedded: z.lazy(() => ExchangesEmbedded$inboundSchema).optional(),
  total: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
    "_embedded": "embedded",
  });
});

/** @internal */
export type Exchanges$Outbound = {
  _links?: { [k: string]: HalLink$Outbound } | undefined;
  _embedded?: ExchangesEmbedded$Outbound | undefined;
  total?: number | undefined;
};

/** @internal */
export const Exchanges$outboundSchema: z.ZodType<
  Exchanges$Outbound,
  z.ZodTypeDef,
  Exchanges
> = z.object({
  links: z.record(HalLink$outboundSchema).optional(),
  embedded: z.lazy(() => ExchangesEmbedded$outboundSchema).optional(),
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
export namespace Exchanges$ {
  /** @deprecated use `Exchanges$inboundSchema` instead. */
  export const inboundSchema = Exchanges$inboundSchema;
  /** @deprecated use `Exchanges$outboundSchema` instead. */
  export const outboundSchema = Exchanges$outboundSchema;
  /** @deprecated use `Exchanges$Outbound` instead. */
  export type Outbound = Exchanges$Outbound;
}

export function exchangesToJSON(exchanges: Exchanges): string {
  return JSON.stringify(Exchanges$outboundSchema.parse(exchanges));
}

export function exchangesFromJSON(
  jsonString: string,
): SafeParseResult<Exchanges, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Exchanges$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Exchanges' from JSON`,
  );
}
