/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DwollaError } from "./dwollaerror.js";

/**
 * not found
 */
export type ListFundingSourcesNotFoundDwollaV1HalJSONErrorData = {
  code?: string | undefined;
  message?: string | undefined;
};

/**
 * not found
 */
export class ListFundingSourcesNotFoundDwollaV1HalJSONError
  extends DwollaError
{
  code?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListFundingSourcesNotFoundDwollaV1HalJSONErrorData;

  constructor(
    err: ListFundingSourcesNotFoundDwollaV1HalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.code != null) this.code = err.code;

    this.name = "ListFundingSourcesNotFoundDwollaV1HalJSONError";
  }
}

/**
 * forbidden
 */
export type ListFundingSourcesForbiddenDwollaV1HalJSONErrorData = {
  code?: string | undefined;
  message?: string | undefined;
};

/**
 * forbidden
 */
export class ListFundingSourcesForbiddenDwollaV1HalJSONError
  extends DwollaError
{
  code?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListFundingSourcesForbiddenDwollaV1HalJSONErrorData;

  constructor(
    err: ListFundingSourcesForbiddenDwollaV1HalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.code != null) this.code = err.code;

    this.name = "ListFundingSourcesForbiddenDwollaV1HalJSONError";
  }
}

/** @internal */
export const ListFundingSourcesNotFoundDwollaV1HalJSONError$inboundSchema:
  z.ZodType<
    ListFundingSourcesNotFoundDwollaV1HalJSONError,
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
      return new ListFundingSourcesNotFoundDwollaV1HalJSONError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type ListFundingSourcesNotFoundDwollaV1HalJSONError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ListFundingSourcesNotFoundDwollaV1HalJSONError$outboundSchema:
  z.ZodType<
    ListFundingSourcesNotFoundDwollaV1HalJSONError$Outbound,
    z.ZodTypeDef,
    ListFundingSourcesNotFoundDwollaV1HalJSONError
  > = z.instanceof(ListFundingSourcesNotFoundDwollaV1HalJSONError)
    .transform(v => v.data$)
    .pipe(z.object({
      code: z.string().optional(),
      message: z.string().optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFundingSourcesNotFoundDwollaV1HalJSONError$ {
  /** @deprecated use `ListFundingSourcesNotFoundDwollaV1HalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    ListFundingSourcesNotFoundDwollaV1HalJSONError$inboundSchema;
  /** @deprecated use `ListFundingSourcesNotFoundDwollaV1HalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    ListFundingSourcesNotFoundDwollaV1HalJSONError$outboundSchema;
  /** @deprecated use `ListFundingSourcesNotFoundDwollaV1HalJSONError$Outbound` instead. */
  export type Outbound =
    ListFundingSourcesNotFoundDwollaV1HalJSONError$Outbound;
}

/** @internal */
export const ListFundingSourcesForbiddenDwollaV1HalJSONError$inboundSchema:
  z.ZodType<
    ListFundingSourcesForbiddenDwollaV1HalJSONError,
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
      return new ListFundingSourcesForbiddenDwollaV1HalJSONError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type ListFundingSourcesForbiddenDwollaV1HalJSONError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ListFundingSourcesForbiddenDwollaV1HalJSONError$outboundSchema:
  z.ZodType<
    ListFundingSourcesForbiddenDwollaV1HalJSONError$Outbound,
    z.ZodTypeDef,
    ListFundingSourcesForbiddenDwollaV1HalJSONError
  > = z.instanceof(ListFundingSourcesForbiddenDwollaV1HalJSONError)
    .transform(v => v.data$)
    .pipe(z.object({
      code: z.string().optional(),
      message: z.string().optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFundingSourcesForbiddenDwollaV1HalJSONError$ {
  /** @deprecated use `ListFundingSourcesForbiddenDwollaV1HalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    ListFundingSourcesForbiddenDwollaV1HalJSONError$inboundSchema;
  /** @deprecated use `ListFundingSourcesForbiddenDwollaV1HalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    ListFundingSourcesForbiddenDwollaV1HalJSONError$outboundSchema;
  /** @deprecated use `ListFundingSourcesForbiddenDwollaV1HalJSONError$Outbound` instead. */
  export type Outbound =
    ListFundingSourcesForbiddenDwollaV1HalJSONError$Outbound;
}
