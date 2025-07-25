/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type CreateAccountFundingSourceExchange = {
  href?: string | undefined;
};

export type CreateAccountFundingSourceLinks = {
  exchange?: CreateAccountFundingSourceExchange | undefined;
};

export const CreateAccountFundingSourceBankAccountType = {
  Checking: "checking",
  Savings: "savings",
} as const;
export type CreateAccountFundingSourceBankAccountType = ClosedEnum<
  typeof CreateAccountFundingSourceBankAccountType
>;

export type CreateAccountFundingSource = {
  links?: CreateAccountFundingSourceLinks | undefined;
  name: string;
  bankAccountType: CreateAccountFundingSourceBankAccountType;
  accountNumber: string;
  routingNumber: string;
  channels?: Array<string> | undefined;
};

/** @internal */
export const CreateAccountFundingSourceExchange$inboundSchema: z.ZodType<
  CreateAccountFundingSourceExchange,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
});

/** @internal */
export type CreateAccountFundingSourceExchange$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const CreateAccountFundingSourceExchange$outboundSchema: z.ZodType<
  CreateAccountFundingSourceExchange$Outbound,
  z.ZodTypeDef,
  CreateAccountFundingSourceExchange
> = z.object({
  href: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountFundingSourceExchange$ {
  /** @deprecated use `CreateAccountFundingSourceExchange$inboundSchema` instead. */
  export const inboundSchema = CreateAccountFundingSourceExchange$inboundSchema;
  /** @deprecated use `CreateAccountFundingSourceExchange$outboundSchema` instead. */
  export const outboundSchema =
    CreateAccountFundingSourceExchange$outboundSchema;
  /** @deprecated use `CreateAccountFundingSourceExchange$Outbound` instead. */
  export type Outbound = CreateAccountFundingSourceExchange$Outbound;
}

export function createAccountFundingSourceExchangeToJSON(
  createAccountFundingSourceExchange: CreateAccountFundingSourceExchange,
): string {
  return JSON.stringify(
    CreateAccountFundingSourceExchange$outboundSchema.parse(
      createAccountFundingSourceExchange,
    ),
  );
}

export function createAccountFundingSourceExchangeFromJSON(
  jsonString: string,
): SafeParseResult<CreateAccountFundingSourceExchange, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateAccountFundingSourceExchange$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAccountFundingSourceExchange' from JSON`,
  );
}

/** @internal */
export const CreateAccountFundingSourceLinks$inboundSchema: z.ZodType<
  CreateAccountFundingSourceLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  exchange: z.lazy(() => CreateAccountFundingSourceExchange$inboundSchema)
    .optional(),
});

/** @internal */
export type CreateAccountFundingSourceLinks$Outbound = {
  exchange?: CreateAccountFundingSourceExchange$Outbound | undefined;
};

/** @internal */
export const CreateAccountFundingSourceLinks$outboundSchema: z.ZodType<
  CreateAccountFundingSourceLinks$Outbound,
  z.ZodTypeDef,
  CreateAccountFundingSourceLinks
> = z.object({
  exchange: z.lazy(() => CreateAccountFundingSourceExchange$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountFundingSourceLinks$ {
  /** @deprecated use `CreateAccountFundingSourceLinks$inboundSchema` instead. */
  export const inboundSchema = CreateAccountFundingSourceLinks$inboundSchema;
  /** @deprecated use `CreateAccountFundingSourceLinks$outboundSchema` instead. */
  export const outboundSchema = CreateAccountFundingSourceLinks$outboundSchema;
  /** @deprecated use `CreateAccountFundingSourceLinks$Outbound` instead. */
  export type Outbound = CreateAccountFundingSourceLinks$Outbound;
}

export function createAccountFundingSourceLinksToJSON(
  createAccountFundingSourceLinks: CreateAccountFundingSourceLinks,
): string {
  return JSON.stringify(
    CreateAccountFundingSourceLinks$outboundSchema.parse(
      createAccountFundingSourceLinks,
    ),
  );
}

export function createAccountFundingSourceLinksFromJSON(
  jsonString: string,
): SafeParseResult<CreateAccountFundingSourceLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAccountFundingSourceLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAccountFundingSourceLinks' from JSON`,
  );
}

/** @internal */
export const CreateAccountFundingSourceBankAccountType$inboundSchema:
  z.ZodNativeEnum<typeof CreateAccountFundingSourceBankAccountType> = z
    .nativeEnum(CreateAccountFundingSourceBankAccountType);

/** @internal */
export const CreateAccountFundingSourceBankAccountType$outboundSchema:
  z.ZodNativeEnum<typeof CreateAccountFundingSourceBankAccountType> =
    CreateAccountFundingSourceBankAccountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountFundingSourceBankAccountType$ {
  /** @deprecated use `CreateAccountFundingSourceBankAccountType$inboundSchema` instead. */
  export const inboundSchema =
    CreateAccountFundingSourceBankAccountType$inboundSchema;
  /** @deprecated use `CreateAccountFundingSourceBankAccountType$outboundSchema` instead. */
  export const outboundSchema =
    CreateAccountFundingSourceBankAccountType$outboundSchema;
}

/** @internal */
export const CreateAccountFundingSource$inboundSchema: z.ZodType<
  CreateAccountFundingSource,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.lazy(() => CreateAccountFundingSourceLinks$inboundSchema)
    .optional(),
  name: z.string(),
  bankAccountType: CreateAccountFundingSourceBankAccountType$inboundSchema,
  accountNumber: z.string(),
  routingNumber: z.string(),
  channels: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type CreateAccountFundingSource$Outbound = {
  _links?: CreateAccountFundingSourceLinks$Outbound | undefined;
  name: string;
  bankAccountType: string;
  accountNumber: string;
  routingNumber: string;
  channels?: Array<string> | undefined;
};

/** @internal */
export const CreateAccountFundingSource$outboundSchema: z.ZodType<
  CreateAccountFundingSource$Outbound,
  z.ZodTypeDef,
  CreateAccountFundingSource
> = z.object({
  links: z.lazy(() => CreateAccountFundingSourceLinks$outboundSchema)
    .optional(),
  name: z.string(),
  bankAccountType: CreateAccountFundingSourceBankAccountType$outboundSchema,
  accountNumber: z.string(),
  routingNumber: z.string(),
  channels: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountFundingSource$ {
  /** @deprecated use `CreateAccountFundingSource$inboundSchema` instead. */
  export const inboundSchema = CreateAccountFundingSource$inboundSchema;
  /** @deprecated use `CreateAccountFundingSource$outboundSchema` instead. */
  export const outboundSchema = CreateAccountFundingSource$outboundSchema;
  /** @deprecated use `CreateAccountFundingSource$Outbound` instead. */
  export type Outbound = CreateAccountFundingSource$Outbound;
}

export function createAccountFundingSourceToJSON(
  createAccountFundingSource: CreateAccountFundingSource,
): string {
  return JSON.stringify(
    CreateAccountFundingSource$outboundSchema.parse(createAccountFundingSource),
  );
}

export function createAccountFundingSourceFromJSON(
  jsonString: string,
): SafeParseResult<CreateAccountFundingSource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAccountFundingSource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAccountFundingSource' from JSON`,
  );
}
