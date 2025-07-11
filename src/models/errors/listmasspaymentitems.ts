/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DwollaError } from "./dwollaerror.js";

/**
 * Mass payment not found
 */
export type ListMassPaymentItemsNotFoundDwollaV1HalJSONErrorData = {
  code?: string | undefined;
  message?: string | undefined;
};

/**
 * Mass payment not found
 */
export class ListMassPaymentItemsNotFoundDwollaV1HalJSONError
  extends DwollaError
{
  code?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListMassPaymentItemsNotFoundDwollaV1HalJSONErrorData;

  constructor(
    err: ListMassPaymentItemsNotFoundDwollaV1HalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.code != null) this.code = err.code;

    this.name = "ListMassPaymentItemsNotFoundDwollaV1HalJSONError";
  }
}

/**
 * Not authorized to list mass payment items
 */
export type ListMassPaymentItemsForbiddenDwollaV1HalJSONErrorData = {
  code?: string | undefined;
  message?: string | undefined;
};

/**
 * Not authorized to list mass payment items
 */
export class ListMassPaymentItemsForbiddenDwollaV1HalJSONError
  extends DwollaError
{
  code?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListMassPaymentItemsForbiddenDwollaV1HalJSONErrorData;

  constructor(
    err: ListMassPaymentItemsForbiddenDwollaV1HalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.code != null) this.code = err.code;

    this.name = "ListMassPaymentItemsForbiddenDwollaV1HalJSONError";
  }
}

/** @internal */
export const ListMassPaymentItemsNotFoundDwollaV1HalJSONError$inboundSchema:
  z.ZodType<
    ListMassPaymentItemsNotFoundDwollaV1HalJSONError,
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
      return new ListMassPaymentItemsNotFoundDwollaV1HalJSONError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type ListMassPaymentItemsNotFoundDwollaV1HalJSONError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ListMassPaymentItemsNotFoundDwollaV1HalJSONError$outboundSchema:
  z.ZodType<
    ListMassPaymentItemsNotFoundDwollaV1HalJSONError$Outbound,
    z.ZodTypeDef,
    ListMassPaymentItemsNotFoundDwollaV1HalJSONError
  > = z.instanceof(ListMassPaymentItemsNotFoundDwollaV1HalJSONError)
    .transform(v => v.data$)
    .pipe(z.object({
      code: z.string().optional(),
      message: z.string().optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsNotFoundDwollaV1HalJSONError$ {
  /** @deprecated use `ListMassPaymentItemsNotFoundDwollaV1HalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    ListMassPaymentItemsNotFoundDwollaV1HalJSONError$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsNotFoundDwollaV1HalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    ListMassPaymentItemsNotFoundDwollaV1HalJSONError$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsNotFoundDwollaV1HalJSONError$Outbound` instead. */
  export type Outbound =
    ListMassPaymentItemsNotFoundDwollaV1HalJSONError$Outbound;
}

/** @internal */
export const ListMassPaymentItemsForbiddenDwollaV1HalJSONError$inboundSchema:
  z.ZodType<
    ListMassPaymentItemsForbiddenDwollaV1HalJSONError,
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
      return new ListMassPaymentItemsForbiddenDwollaV1HalJSONError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type ListMassPaymentItemsForbiddenDwollaV1HalJSONError$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ListMassPaymentItemsForbiddenDwollaV1HalJSONError$outboundSchema:
  z.ZodType<
    ListMassPaymentItemsForbiddenDwollaV1HalJSONError$Outbound,
    z.ZodTypeDef,
    ListMassPaymentItemsForbiddenDwollaV1HalJSONError
  > = z.instanceof(ListMassPaymentItemsForbiddenDwollaV1HalJSONError)
    .transform(v => v.data$)
    .pipe(z.object({
      code: z.string().optional(),
      message: z.string().optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsForbiddenDwollaV1HalJSONError$ {
  /** @deprecated use `ListMassPaymentItemsForbiddenDwollaV1HalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    ListMassPaymentItemsForbiddenDwollaV1HalJSONError$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsForbiddenDwollaV1HalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    ListMassPaymentItemsForbiddenDwollaV1HalJSONError$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsForbiddenDwollaV1HalJSONError$Outbound` instead. */
  export type Outbound =
    ListMassPaymentItemsForbiddenDwollaV1HalJSONError$Outbound;
}
