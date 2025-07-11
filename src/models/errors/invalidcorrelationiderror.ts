/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as models from "../index.js";
import { DwollaError } from "./dwollaerror.js";

export type InvalidCorrelationIdErrorData = {
  code: string;
  message: string;
  embedded?: models.InvalidCorrelationIdErrorEmbedded | undefined;
};

export class InvalidCorrelationIdError extends DwollaError {
  code: string;
  embedded?: models.InvalidCorrelationIdErrorEmbedded | undefined;

  /** The original data that was passed to this error instance. */
  data$: InvalidCorrelationIdErrorData;

  constructor(
    err: InvalidCorrelationIdErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.embedded != null) this.embedded = err.embedded;

    this.name = "InvalidCorrelationIdError";
  }
}

/** @internal */
export const InvalidCorrelationIdError$inboundSchema: z.ZodType<
  InvalidCorrelationIdError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
  _embedded: z.lazy(() =>
    models.InvalidCorrelationIdErrorEmbedded$inboundSchema
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_embedded": "embedded",
    });

    return new InvalidCorrelationIdError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type InvalidCorrelationIdError$Outbound = {
  code: string;
  message: string;
  _embedded?: models.InvalidCorrelationIdErrorEmbedded$Outbound | undefined;
};

/** @internal */
export const InvalidCorrelationIdError$outboundSchema: z.ZodType<
  InvalidCorrelationIdError$Outbound,
  z.ZodTypeDef,
  InvalidCorrelationIdError
> = z.instanceof(InvalidCorrelationIdError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: z.string(),
      message: z.string(),
      embedded: z.lazy(() =>
        models.InvalidCorrelationIdErrorEmbedded$outboundSchema
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
export namespace InvalidCorrelationIdError$ {
  /** @deprecated use `InvalidCorrelationIdError$inboundSchema` instead. */
  export const inboundSchema = InvalidCorrelationIdError$inboundSchema;
  /** @deprecated use `InvalidCorrelationIdError$outboundSchema` instead. */
  export const outboundSchema = InvalidCorrelationIdError$outboundSchema;
  /** @deprecated use `InvalidCorrelationIdError$Outbound` instead. */
  export type Outbound = InvalidCorrelationIdError$Outbound;
}
