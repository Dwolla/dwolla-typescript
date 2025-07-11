/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DwollaError } from "./dwollaerror.js";

export type ExpiredKbaSessionErrorData = {
  code: string;
  message: string;
};

export class ExpiredKbaSessionError extends DwollaError {
  code: string;

  /** The original data that was passed to this error instance. */
  data$: ExpiredKbaSessionErrorData;

  constructor(
    err: ExpiredKbaSessionErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;

    this.name = "ExpiredKbaSessionError";
  }
}

/** @internal */
export const ExpiredKbaSessionError$inboundSchema: z.ZodType<
  ExpiredKbaSessionError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new ExpiredKbaSessionError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ExpiredKbaSessionError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const ExpiredKbaSessionError$outboundSchema: z.ZodType<
  ExpiredKbaSessionError$Outbound,
  z.ZodTypeDef,
  ExpiredKbaSessionError
> = z.instanceof(ExpiredKbaSessionError)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.string(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExpiredKbaSessionError$ {
  /** @deprecated use `ExpiredKbaSessionError$inboundSchema` instead. */
  export const inboundSchema = ExpiredKbaSessionError$inboundSchema;
  /** @deprecated use `ExpiredKbaSessionError$outboundSchema` instead. */
  export const outboundSchema = ExpiredKbaSessionError$outboundSchema;
  /** @deprecated use `ExpiredKbaSessionError$Outbound` instead. */
  export type Outbound = ExpiredKbaSessionError$Outbound;
}
