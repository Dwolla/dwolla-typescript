/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type CreatePlaidSecureExchangeExchangePartner = {
  href?: string | undefined;
};

export type CreatePlaidSecureExchangeLinks = {
  exchangePartner?: CreatePlaidSecureExchangeExchangePartner | undefined;
};

export type CreatePlaidSecureExchange = {
  links?: CreatePlaidSecureExchangeLinks | undefined;
  token?: string | undefined;
};

/** @internal */
export const CreatePlaidSecureExchangeExchangePartner$inboundSchema: z.ZodType<
  CreatePlaidSecureExchangeExchangePartner,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
});

/** @internal */
export type CreatePlaidSecureExchangeExchangePartner$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const CreatePlaidSecureExchangeExchangePartner$outboundSchema: z.ZodType<
  CreatePlaidSecureExchangeExchangePartner$Outbound,
  z.ZodTypeDef,
  CreatePlaidSecureExchangeExchangePartner
> = z.object({
  href: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaidSecureExchangeExchangePartner$ {
  /** @deprecated use `CreatePlaidSecureExchangeExchangePartner$inboundSchema` instead. */
  export const inboundSchema =
    CreatePlaidSecureExchangeExchangePartner$inboundSchema;
  /** @deprecated use `CreatePlaidSecureExchangeExchangePartner$outboundSchema` instead. */
  export const outboundSchema =
    CreatePlaidSecureExchangeExchangePartner$outboundSchema;
  /** @deprecated use `CreatePlaidSecureExchangeExchangePartner$Outbound` instead. */
  export type Outbound = CreatePlaidSecureExchangeExchangePartner$Outbound;
}

export function createPlaidSecureExchangeExchangePartnerToJSON(
  createPlaidSecureExchangeExchangePartner:
    CreatePlaidSecureExchangeExchangePartner,
): string {
  return JSON.stringify(
    CreatePlaidSecureExchangeExchangePartner$outboundSchema.parse(
      createPlaidSecureExchangeExchangePartner,
    ),
  );
}

export function createPlaidSecureExchangeExchangePartnerFromJSON(
  jsonString: string,
): SafeParseResult<
  CreatePlaidSecureExchangeExchangePartner,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreatePlaidSecureExchangeExchangePartner$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreatePlaidSecureExchangeExchangePartner' from JSON`,
  );
}

/** @internal */
export const CreatePlaidSecureExchangeLinks$inboundSchema: z.ZodType<
  CreatePlaidSecureExchangeLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  "exchange-partner": z.lazy(() =>
    CreatePlaidSecureExchangeExchangePartner$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "exchange-partner": "exchangePartner",
  });
});

/** @internal */
export type CreatePlaidSecureExchangeLinks$Outbound = {
  "exchange-partner"?:
    | CreatePlaidSecureExchangeExchangePartner$Outbound
    | undefined;
};

/** @internal */
export const CreatePlaidSecureExchangeLinks$outboundSchema: z.ZodType<
  CreatePlaidSecureExchangeLinks$Outbound,
  z.ZodTypeDef,
  CreatePlaidSecureExchangeLinks
> = z.object({
  exchangePartner: z.lazy(() =>
    CreatePlaidSecureExchangeExchangePartner$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    exchangePartner: "exchange-partner",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaidSecureExchangeLinks$ {
  /** @deprecated use `CreatePlaidSecureExchangeLinks$inboundSchema` instead. */
  export const inboundSchema = CreatePlaidSecureExchangeLinks$inboundSchema;
  /** @deprecated use `CreatePlaidSecureExchangeLinks$outboundSchema` instead. */
  export const outboundSchema = CreatePlaidSecureExchangeLinks$outboundSchema;
  /** @deprecated use `CreatePlaidSecureExchangeLinks$Outbound` instead. */
  export type Outbound = CreatePlaidSecureExchangeLinks$Outbound;
}

export function createPlaidSecureExchangeLinksToJSON(
  createPlaidSecureExchangeLinks: CreatePlaidSecureExchangeLinks,
): string {
  return JSON.stringify(
    CreatePlaidSecureExchangeLinks$outboundSchema.parse(
      createPlaidSecureExchangeLinks,
    ),
  );
}

export function createPlaidSecureExchangeLinksFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaidSecureExchangeLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaidSecureExchangeLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaidSecureExchangeLinks' from JSON`,
  );
}

/** @internal */
export const CreatePlaidSecureExchange$inboundSchema: z.ZodType<
  CreatePlaidSecureExchange,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.lazy(() => CreatePlaidSecureExchangeLinks$inboundSchema).optional(),
  token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type CreatePlaidSecureExchange$Outbound = {
  _links?: CreatePlaidSecureExchangeLinks$Outbound | undefined;
  token?: string | undefined;
};

/** @internal */
export const CreatePlaidSecureExchange$outboundSchema: z.ZodType<
  CreatePlaidSecureExchange$Outbound,
  z.ZodTypeDef,
  CreatePlaidSecureExchange
> = z.object({
  links: z.lazy(() => CreatePlaidSecureExchangeLinks$outboundSchema).optional(),
  token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaidSecureExchange$ {
  /** @deprecated use `CreatePlaidSecureExchange$inboundSchema` instead. */
  export const inboundSchema = CreatePlaidSecureExchange$inboundSchema;
  /** @deprecated use `CreatePlaidSecureExchange$outboundSchema` instead. */
  export const outboundSchema = CreatePlaidSecureExchange$outboundSchema;
  /** @deprecated use `CreatePlaidSecureExchange$Outbound` instead. */
  export type Outbound = CreatePlaidSecureExchange$Outbound;
}

export function createPlaidSecureExchangeToJSON(
  createPlaidSecureExchange: CreatePlaidSecureExchange,
): string {
  return JSON.stringify(
    CreatePlaidSecureExchange$outboundSchema.parse(createPlaidSecureExchange),
  );
}

export function createPlaidSecureExchangeFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaidSecureExchange, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaidSecureExchange$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaidSecureExchange' from JSON`,
  );
}
