/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as models from "../index.js";
import { DwollaError } from "./dwollaerror.js";

export type FacilitatorFeeBelowMinimumErrorData = {
  code: string;
  message: string;
  embedded?: models.FacilitatorFeeBelowMinimumErrorEmbedded | undefined;
};

export class FacilitatorFeeBelowMinimumError extends DwollaError {
  code: string;
  embedded?: models.FacilitatorFeeBelowMinimumErrorEmbedded | undefined;

  /** The original data that was passed to this error instance. */
  data$: FacilitatorFeeBelowMinimumErrorData;

  constructor(
    err: FacilitatorFeeBelowMinimumErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.embedded != null) this.embedded = err.embedded;

    this.name = "FacilitatorFeeBelowMinimumError";
  }
}

/** @internal */
export const FacilitatorFeeBelowMinimumError$inboundSchema: z.ZodType<
  FacilitatorFeeBelowMinimumError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
  _embedded: z.lazy(() =>
    models.FacilitatorFeeBelowMinimumErrorEmbedded$inboundSchema
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_embedded": "embedded",
    });

    return new FacilitatorFeeBelowMinimumError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type FacilitatorFeeBelowMinimumError$Outbound = {
  code: string;
  message: string;
  _embedded?:
    | models.FacilitatorFeeBelowMinimumErrorEmbedded$Outbound
    | undefined;
};

/** @internal */
export const FacilitatorFeeBelowMinimumError$outboundSchema: z.ZodType<
  FacilitatorFeeBelowMinimumError$Outbound,
  z.ZodTypeDef,
  FacilitatorFeeBelowMinimumError
> = z.instanceof(FacilitatorFeeBelowMinimumError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: z.string(),
      message: z.string(),
      embedded: z.lazy(() =>
        models.FacilitatorFeeBelowMinimumErrorEmbedded$outboundSchema
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
export namespace FacilitatorFeeBelowMinimumError$ {
  /** @deprecated use `FacilitatorFeeBelowMinimumError$inboundSchema` instead. */
  export const inboundSchema = FacilitatorFeeBelowMinimumError$inboundSchema;
  /** @deprecated use `FacilitatorFeeBelowMinimumError$outboundSchema` instead. */
  export const outboundSchema = FacilitatorFeeBelowMinimumError$outboundSchema;
  /** @deprecated use `FacilitatorFeeBelowMinimumError$Outbound` instead. */
  export type Outbound = FacilitatorFeeBelowMinimumError$Outbound;
}
