/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as models from "../index.js";
import { DwollaError } from "./dwollaerror.js";

export type FacilitatorFeeSumTooLargeErrorData = {
  code: string;
  message: string;
  embedded?: models.FacilitatorFeeSumTooLargeErrorEmbedded | undefined;
};

export class FacilitatorFeeSumTooLargeError extends DwollaError {
  code: string;
  embedded?: models.FacilitatorFeeSumTooLargeErrorEmbedded | undefined;

  /** The original data that was passed to this error instance. */
  data$: FacilitatorFeeSumTooLargeErrorData;

  constructor(
    err: FacilitatorFeeSumTooLargeErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.embedded != null) this.embedded = err.embedded;

    this.name = "FacilitatorFeeSumTooLargeError";
  }
}

/** @internal */
export const FacilitatorFeeSumTooLargeError$inboundSchema: z.ZodType<
  FacilitatorFeeSumTooLargeError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
  _embedded: z.lazy(() =>
    models.FacilitatorFeeSumTooLargeErrorEmbedded$inboundSchema
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_embedded": "embedded",
    });

    return new FacilitatorFeeSumTooLargeError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type FacilitatorFeeSumTooLargeError$Outbound = {
  code: string;
  message: string;
  _embedded?:
    | models.FacilitatorFeeSumTooLargeErrorEmbedded$Outbound
    | undefined;
};

/** @internal */
export const FacilitatorFeeSumTooLargeError$outboundSchema: z.ZodType<
  FacilitatorFeeSumTooLargeError$Outbound,
  z.ZodTypeDef,
  FacilitatorFeeSumTooLargeError
> = z.instanceof(FacilitatorFeeSumTooLargeError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: z.string(),
      message: z.string(),
      embedded: z.lazy(() =>
        models.FacilitatorFeeSumTooLargeErrorEmbedded$outboundSchema
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
export namespace FacilitatorFeeSumTooLargeError$ {
  /** @deprecated use `FacilitatorFeeSumTooLargeError$inboundSchema` instead. */
  export const inboundSchema = FacilitatorFeeSumTooLargeError$inboundSchema;
  /** @deprecated use `FacilitatorFeeSumTooLargeError$outboundSchema` instead. */
  export const outboundSchema = FacilitatorFeeSumTooLargeError$outboundSchema;
  /** @deprecated use `FacilitatorFeeSumTooLargeError$Outbound` instead. */
  export type Outbound = FacilitatorFeeSumTooLargeError$Outbound;
}
