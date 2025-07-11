/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DwollaError } from "./dwollaerror.js";

/**
 * Error response schema for 404 NotFound
 */
export type NotFoundErrorData = {
  code: string;
  message: string;
};

/**
 * Error response schema for 404 NotFound
 */
export class NotFoundError extends DwollaError {
  code: string;

  /** The original data that was passed to this error instance. */
  data$: NotFoundErrorData;

  constructor(
    err: NotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;

    this.name = "NotFoundError";
  }
}

/** @internal */
export const NotFoundError$inboundSchema: z.ZodType<
  NotFoundError,
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
    return new NotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type NotFoundError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const NotFoundError$outboundSchema: z.ZodType<
  NotFoundError$Outbound,
  z.ZodTypeDef,
  NotFoundError
> = z.instanceof(NotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.string(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundError$ {
  /** @deprecated use `NotFoundError$inboundSchema` instead. */
  export const inboundSchema = NotFoundError$inboundSchema;
  /** @deprecated use `NotFoundError$outboundSchema` instead. */
  export const outboundSchema = NotFoundError$outboundSchema;
  /** @deprecated use `NotFoundError$Outbound` instead. */
  export type Outbound = NotFoundError$Outbound;
}
