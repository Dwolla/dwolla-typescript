/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DwollaError } from "./dwollaerror.js";

/**
 * not found
 */
export type GetFundingSourceBalanceDwollaV1HalJSONErrorData = {
  code?: string | undefined;
  message?: string | undefined;
};

/**
 * not found
 */
export class GetFundingSourceBalanceDwollaV1HalJSONError extends DwollaError {
  code?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetFundingSourceBalanceDwollaV1HalJSONErrorData;

  constructor(
    err: GetFundingSourceBalanceDwollaV1HalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.code != null) this.code = err.code;

    this.name = "GetFundingSourceBalanceDwollaV1HalJSONError";
  }
}

/** @internal */
export const GetFundingSourceBalanceDwollaV1HalJSONError$inboundSchema:
  z.ZodType<
    GetFundingSourceBalanceDwollaV1HalJSONError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    code: z.string().optional(),
    message: z.string().optional(),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
    .transform((v) => {
      return new GetFundingSourceBalanceDwollaV1HalJSONError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type GetFundingSourceBalanceDwollaV1HalJSONError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const GetFundingSourceBalanceDwollaV1HalJSONError$outboundSchema:
  z.ZodType<
    GetFundingSourceBalanceDwollaV1HalJSONError$Outbound,
    z.ZodTypeDef,
    GetFundingSourceBalanceDwollaV1HalJSONError
  > = z.instanceof(GetFundingSourceBalanceDwollaV1HalJSONError)
    .transform(v => v.data$)
    .pipe(z.object({
      code: z.string().optional(),
      message: z.string().optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFundingSourceBalanceDwollaV1HalJSONError$ {
  /** @deprecated use `GetFundingSourceBalanceDwollaV1HalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    GetFundingSourceBalanceDwollaV1HalJSONError$inboundSchema;
  /** @deprecated use `GetFundingSourceBalanceDwollaV1HalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    GetFundingSourceBalanceDwollaV1HalJSONError$outboundSchema;
  /** @deprecated use `GetFundingSourceBalanceDwollaV1HalJSONError$Outbound` instead. */
  export type Outbound = GetFundingSourceBalanceDwollaV1HalJSONError$Outbound;
}
