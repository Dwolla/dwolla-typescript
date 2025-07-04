/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DwollaError } from "./dwollaerror.js";

/**
 * forbidden
 */
export type CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONErrorData = {
  code?: string | undefined;
  message?: string | undefined;
};

/**
 * forbidden
 */
export class CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError
  extends DwollaError
{
  code?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONErrorData;

  constructor(
    err: CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.code != null) this.code = err.code;

    this.name = "CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError";
  }
}

/** @internal */
export const CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$inboundSchema:
  z.ZodType<
    CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError,
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
      return new CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$Outbound =
  {
    code?: string | undefined;
    message?: string | undefined;
  };

/** @internal */
export const CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$outboundSchema:
  z.ZodType<
    CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$Outbound,
    z.ZodTypeDef,
    CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError
  > = z.instanceof(CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError)
    .transform(v => v.data$)
    .pipe(z.object({
      code: z.string().optional(),
      message: z.string().optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$ {
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$inboundSchema;
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$outboundSchema;
  /** @deprecated use `CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$Outbound` instead. */
  export type Outbound =
    CertifyBeneficialOwnershipForCustomerDwollaV1HalJSONError$Outbound;
}
