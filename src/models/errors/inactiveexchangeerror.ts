/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DwollaError } from "./dwollaerror.js";

export type InactiveExchangeErrorData = {
  code: string;
  message: string;
};

export class InactiveExchangeError extends DwollaError {
  code: string;

  /** The original data that was passed to this error instance. */
  data$: InactiveExchangeErrorData;

  constructor(
    err: InactiveExchangeErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;

    this.name = "InactiveExchangeError";
  }
}

/** @internal */
export const InactiveExchangeError$inboundSchema: z.ZodType<
  InactiveExchangeError,
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
    return new InactiveExchangeError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type InactiveExchangeError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const InactiveExchangeError$outboundSchema: z.ZodType<
  InactiveExchangeError$Outbound,
  z.ZodTypeDef,
  InactiveExchangeError
> = z.instanceof(InactiveExchangeError)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.string(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InactiveExchangeError$ {
  /** @deprecated use `InactiveExchangeError$inboundSchema` instead. */
  export const inboundSchema = InactiveExchangeError$inboundSchema;
  /** @deprecated use `InactiveExchangeError$outboundSchema` instead. */
  export const outboundSchema = InactiveExchangeError$outboundSchema;
  /** @deprecated use `InactiveExchangeError$Outbound` instead. */
  export type Outbound = InactiveExchangeError$Outbound;
}
