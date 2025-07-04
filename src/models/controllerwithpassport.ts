/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { RFCDate } from "../types/rfcdate.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  InternationalAddress,
  InternationalAddress$inboundSchema,
  InternationalAddress$Outbound,
  InternationalAddress$outboundSchema,
} from "./internationaladdress.js";
import {
  Passport,
  Passport$inboundSchema,
  Passport$Outbound,
  Passport$outboundSchema,
} from "./passport.js";

/**
 * Controller object with Passport
 */
export type ControllerWithPassport = {
  firstName: string;
  lastName: string;
  title: string;
  dateOfBirth: RFCDate;
  address: InternationalAddress;
  passport: Passport;
};

/** @internal */
export const ControllerWithPassport$inboundSchema: z.ZodType<
  ControllerWithPassport,
  z.ZodTypeDef,
  unknown
> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  title: z.string(),
  dateOfBirth: z.string().transform(v => new RFCDate(v)),
  address: InternationalAddress$inboundSchema,
  passport: Passport$inboundSchema,
});

/** @internal */
export type ControllerWithPassport$Outbound = {
  firstName: string;
  lastName: string;
  title: string;
  dateOfBirth: string;
  address: InternationalAddress$Outbound;
  passport: Passport$Outbound;
};

/** @internal */
export const ControllerWithPassport$outboundSchema: z.ZodType<
  ControllerWithPassport$Outbound,
  z.ZodTypeDef,
  ControllerWithPassport
> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  title: z.string(),
  dateOfBirth: z.instanceof(RFCDate).transform(v => v.toString()),
  address: InternationalAddress$outboundSchema,
  passport: Passport$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ControllerWithPassport$ {
  /** @deprecated use `ControllerWithPassport$inboundSchema` instead. */
  export const inboundSchema = ControllerWithPassport$inboundSchema;
  /** @deprecated use `ControllerWithPassport$outboundSchema` instead. */
  export const outboundSchema = ControllerWithPassport$outboundSchema;
  /** @deprecated use `ControllerWithPassport$Outbound` instead. */
  export type Outbound = ControllerWithPassport$Outbound;
}

export function controllerWithPassportToJSON(
  controllerWithPassport: ControllerWithPassport,
): string {
  return JSON.stringify(
    ControllerWithPassport$outboundSchema.parse(controllerWithPassport),
  );
}

export function controllerWithPassportFromJSON(
  jsonString: string,
): SafeParseResult<ControllerWithPassport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ControllerWithPassport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ControllerWithPassport' from JSON`,
  );
}
