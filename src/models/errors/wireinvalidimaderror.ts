/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as models from "../index.js";
import { DwollaError } from "./dwollaerror.js";

export type WireInvalidImadErrorData = {
  code: string;
  message: string;
  embedded?: models.WireInvalidImadErrorEmbedded | undefined;
};

export class WireInvalidImadError extends DwollaError {
  code: string;
  embedded?: models.WireInvalidImadErrorEmbedded | undefined;

  /** The original data that was passed to this error instance. */
  data$: WireInvalidImadErrorData;

  constructor(
    err: WireInvalidImadErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.embedded != null) this.embedded = err.embedded;

    this.name = "WireInvalidImadError";
  }
}

/** @internal */
export const WireInvalidImadError$inboundSchema: z.ZodType<
  WireInvalidImadError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
  _embedded: z.lazy(() => models.WireInvalidImadErrorEmbedded$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_embedded": "embedded",
    });

    return new WireInvalidImadError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type WireInvalidImadError$Outbound = {
  code: string;
  message: string;
  _embedded?: models.WireInvalidImadErrorEmbedded$Outbound | undefined;
};

/** @internal */
export const WireInvalidImadError$outboundSchema: z.ZodType<
  WireInvalidImadError$Outbound,
  z.ZodTypeDef,
  WireInvalidImadError
> = z.instanceof(WireInvalidImadError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: z.string(),
      message: z.string(),
      embedded: z.lazy(() => models.WireInvalidImadErrorEmbedded$outboundSchema)
        .optional(),
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
export namespace WireInvalidImadError$ {
  /** @deprecated use `WireInvalidImadError$inboundSchema` instead. */
  export const inboundSchema = WireInvalidImadError$inboundSchema;
  /** @deprecated use `WireInvalidImadError$outboundSchema` instead. */
  export const outboundSchema = WireInvalidImadError$outboundSchema;
  /** @deprecated use `WireInvalidImadError$Outbound` instead. */
  export type Outbound = WireInvalidImadError$Outbound;
}
