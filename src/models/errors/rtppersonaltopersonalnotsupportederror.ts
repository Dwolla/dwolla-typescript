/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as models from "../index.js";
import { DwollaError } from "./dwollaerror.js";

export type RtpPersonalToPersonalNotSupportedErrorData = {
  code: string;
  message: string;
  embedded?: models.RtpPersonalToPersonalNotSupportedErrorEmbedded | undefined;
};

export class RtpPersonalToPersonalNotSupportedError extends DwollaError {
  code: string;
  embedded?: models.RtpPersonalToPersonalNotSupportedErrorEmbedded | undefined;

  /** The original data that was passed to this error instance. */
  data$: RtpPersonalToPersonalNotSupportedErrorData;

  constructor(
    err: RtpPersonalToPersonalNotSupportedErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.embedded != null) this.embedded = err.embedded;

    this.name = "RtpPersonalToPersonalNotSupportedError";
  }
}

/** @internal */
export const RtpPersonalToPersonalNotSupportedError$inboundSchema: z.ZodType<
  RtpPersonalToPersonalNotSupportedError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
  _embedded: z.lazy(() =>
    models.RtpPersonalToPersonalNotSupportedErrorEmbedded$inboundSchema
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_embedded": "embedded",
    });

    return new RtpPersonalToPersonalNotSupportedError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type RtpPersonalToPersonalNotSupportedError$Outbound = {
  code: string;
  message: string;
  _embedded?:
    | models.RtpPersonalToPersonalNotSupportedErrorEmbedded$Outbound
    | undefined;
};

/** @internal */
export const RtpPersonalToPersonalNotSupportedError$outboundSchema: z.ZodType<
  RtpPersonalToPersonalNotSupportedError$Outbound,
  z.ZodTypeDef,
  RtpPersonalToPersonalNotSupportedError
> = z.instanceof(RtpPersonalToPersonalNotSupportedError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: z.string(),
      message: z.string(),
      embedded: z.lazy(() =>
        models.RtpPersonalToPersonalNotSupportedErrorEmbedded$outboundSchema
      ).optional(),
    }).transform((v) => {
      return remap$(v, {
        embedded: "_embedded",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RtpPersonalToPersonalNotSupportedError$ {
  /** @deprecated use `RtpPersonalToPersonalNotSupportedError$inboundSchema` instead. */
  export const inboundSchema =
    RtpPersonalToPersonalNotSupportedError$inboundSchema;
  /** @deprecated use `RtpPersonalToPersonalNotSupportedError$outboundSchema` instead. */
  export const outboundSchema =
    RtpPersonalToPersonalNotSupportedError$outboundSchema;
  /** @deprecated use `RtpPersonalToPersonalNotSupportedError$Outbound` instead. */
  export type Outbound = RtpPersonalToPersonalNotSupportedError$Outbound;
}
