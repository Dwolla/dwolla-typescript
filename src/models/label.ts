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

export type LabelAmount = {
  value?: string | undefined;
  currency?: string | undefined;
};

export type Label = {
  links?: { [k: string]: HalLink } | undefined;
  id?: string | undefined;
  created?: Date | undefined;
  amount?: LabelAmount | undefined;
};

/** @internal */
export const LabelAmount$inboundSchema: z.ZodType<
  LabelAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
  currency: z.string().optional(),
});

/** @internal */
export type LabelAmount$Outbound = {
  value?: string | undefined;
  currency?: string | undefined;
};

/** @internal */
export const LabelAmount$outboundSchema: z.ZodType<
  LabelAmount$Outbound,
  z.ZodTypeDef,
  LabelAmount
> = z.object({
  value: z.string().optional(),
  currency: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LabelAmount$ {
  /** @deprecated use `LabelAmount$inboundSchema` instead. */
  export const inboundSchema = LabelAmount$inboundSchema;
  /** @deprecated use `LabelAmount$outboundSchema` instead. */
  export const outboundSchema = LabelAmount$outboundSchema;
  /** @deprecated use `LabelAmount$Outbound` instead. */
  export type Outbound = LabelAmount$Outbound;
}

export function labelAmountToJSON(labelAmount: LabelAmount): string {
  return JSON.stringify(LabelAmount$outboundSchema.parse(labelAmount));
}

export function labelAmountFromJSON(
  jsonString: string,
): SafeParseResult<LabelAmount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LabelAmount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LabelAmount' from JSON`,
  );
}

/** @internal */
export const Label$inboundSchema: z.ZodType<Label, z.ZodTypeDef, unknown> = z
  .object({
    _links: z.record(HalLink$inboundSchema).optional(),
    id: z.string().optional(),
    created: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    amount: z.lazy(() => LabelAmount$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "_links": "links",
    });
  });

/** @internal */
export type Label$Outbound = {
  _links?: { [k: string]: HalLink$Outbound } | undefined;
  id?: string | undefined;
  created?: string | undefined;
  amount?: LabelAmount$Outbound | undefined;
};

/** @internal */
export const Label$outboundSchema: z.ZodType<
  Label$Outbound,
  z.ZodTypeDef,
  Label
> = z.object({
  links: z.record(HalLink$outboundSchema).optional(),
  id: z.string().optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  amount: z.lazy(() => LabelAmount$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Label$ {
  /** @deprecated use `Label$inboundSchema` instead. */
  export const inboundSchema = Label$inboundSchema;
  /** @deprecated use `Label$outboundSchema` instead. */
  export const outboundSchema = Label$outboundSchema;
  /** @deprecated use `Label$Outbound` instead. */
  export type Outbound = Label$Outbound;
}

export function labelToJSON(label: Label): string {
  return JSON.stringify(Label$outboundSchema.parse(label));
}

export function labelFromJSON(
  jsonString: string,
): SafeParseResult<Label, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Label$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Label' from JSON`,
  );
}
