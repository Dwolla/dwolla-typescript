/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * No request body is required for initiating micro-deposits.
 */
export type InitiateMicroDeposits = {};

/**
 * Optional request body for verifying micro-deposits.
 *
 * @remarks
 * - If omitted: Endpoint will initiate micro-deposits
 * - If provided: Must contain micro-deposit amounts for verification
 */
export type InitiateOrVerifyMicroDepositsRequestBody =
  | models.VerifyMicroDeposits
  | InitiateMicroDeposits;

export type InitiateOrVerifyMicroDepositsRequest = {
  /**
   * The ID of the FS to initiate or verify micro-deposit
   */
  id: string;
  /**
   * Optional request body for verifying micro-deposits.
   *
   * @remarks
   * - If omitted: Endpoint will initiate micro-deposits
   * - If provided: Must contain micro-deposit amounts for verification
   */
  requestBody?:
    | models.VerifyMicroDeposits
    | InitiateMicroDeposits
    | null
    | undefined;
};

export type InitiateOrVerifyMicroDepositsSelf = {
  href?: string | undefined;
  type?: string | undefined;
  resourceType?: string | undefined;
};

export type InitiateOrVerifyMicroDepositsLinks = {
  self?: InitiateOrVerifyMicroDepositsSelf | undefined;
};

/**
 * Response for microdeposits operations (initiation and verification)
 */
export type InitiateOrVerifyMicroDepositsResponseBody = {
  links?: InitiateOrVerifyMicroDepositsLinks | undefined;
};

export type InitiateOrVerifyMicroDepositsResponse = {
  headers: { [k: string]: Array<string> };
  result: InitiateOrVerifyMicroDepositsResponseBody;
};

/** @internal */
export const InitiateMicroDeposits$inboundSchema: z.ZodType<
  InitiateMicroDeposits,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type InitiateMicroDeposits$Outbound = {};

/** @internal */
export const InitiateMicroDeposits$outboundSchema: z.ZodType<
  InitiateMicroDeposits$Outbound,
  z.ZodTypeDef,
  InitiateMicroDeposits
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateMicroDeposits$ {
  /** @deprecated use `InitiateMicroDeposits$inboundSchema` instead. */
  export const inboundSchema = InitiateMicroDeposits$inboundSchema;
  /** @deprecated use `InitiateMicroDeposits$outboundSchema` instead. */
  export const outboundSchema = InitiateMicroDeposits$outboundSchema;
  /** @deprecated use `InitiateMicroDeposits$Outbound` instead. */
  export type Outbound = InitiateMicroDeposits$Outbound;
}

export function initiateMicroDepositsToJSON(
  initiateMicroDeposits: InitiateMicroDeposits,
): string {
  return JSON.stringify(
    InitiateMicroDeposits$outboundSchema.parse(initiateMicroDeposits),
  );
}

export function initiateMicroDepositsFromJSON(
  jsonString: string,
): SafeParseResult<InitiateMicroDeposits, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InitiateMicroDeposits$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateMicroDeposits' from JSON`,
  );
}

/** @internal */
export const InitiateOrVerifyMicroDepositsRequestBody$inboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  models.VerifyMicroDeposits$inboundSchema,
  z.lazy(() => InitiateMicroDeposits$inboundSchema),
]);

/** @internal */
export type InitiateOrVerifyMicroDepositsRequestBody$Outbound =
  | models.VerifyMicroDeposits$Outbound
  | InitiateMicroDeposits$Outbound;

/** @internal */
export const InitiateOrVerifyMicroDepositsRequestBody$outboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsRequestBody$Outbound,
  z.ZodTypeDef,
  InitiateOrVerifyMicroDepositsRequestBody
> = z.union([
  models.VerifyMicroDeposits$outboundSchema,
  z.lazy(() => InitiateMicroDeposits$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateOrVerifyMicroDepositsRequestBody$ {
  /** @deprecated use `InitiateOrVerifyMicroDepositsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    InitiateOrVerifyMicroDepositsRequestBody$inboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    InitiateOrVerifyMicroDepositsRequestBody$outboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsRequestBody$Outbound` instead. */
  export type Outbound = InitiateOrVerifyMicroDepositsRequestBody$Outbound;
}

export function initiateOrVerifyMicroDepositsRequestBodyToJSON(
  initiateOrVerifyMicroDepositsRequestBody:
    InitiateOrVerifyMicroDepositsRequestBody,
): string {
  return JSON.stringify(
    InitiateOrVerifyMicroDepositsRequestBody$outboundSchema.parse(
      initiateOrVerifyMicroDepositsRequestBody,
    ),
  );
}

export function initiateOrVerifyMicroDepositsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  InitiateOrVerifyMicroDepositsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateOrVerifyMicroDepositsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'InitiateOrVerifyMicroDepositsRequestBody' from JSON`,
  );
}

/** @internal */
export const InitiateOrVerifyMicroDepositsRequest$inboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  RequestBody: z.nullable(
    z.union([
      models.VerifyMicroDeposits$inboundSchema,
      z.lazy(() => InitiateMicroDeposits$inboundSchema),
    ]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type InitiateOrVerifyMicroDepositsRequest$Outbound = {
  id: string;
  RequestBody?:
    | models.VerifyMicroDeposits$Outbound
    | InitiateMicroDeposits$Outbound
    | null
    | undefined;
};

/** @internal */
export const InitiateOrVerifyMicroDepositsRequest$outboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsRequest$Outbound,
  z.ZodTypeDef,
  InitiateOrVerifyMicroDepositsRequest
> = z.object({
  id: z.string(),
  requestBody: z.nullable(
    z.union([
      models.VerifyMicroDeposits$outboundSchema,
      z.lazy(() => InitiateMicroDeposits$outboundSchema),
    ]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateOrVerifyMicroDepositsRequest$ {
  /** @deprecated use `InitiateOrVerifyMicroDepositsRequest$inboundSchema` instead. */
  export const inboundSchema =
    InitiateOrVerifyMicroDepositsRequest$inboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsRequest$outboundSchema` instead. */
  export const outboundSchema =
    InitiateOrVerifyMicroDepositsRequest$outboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsRequest$Outbound` instead. */
  export type Outbound = InitiateOrVerifyMicroDepositsRequest$Outbound;
}

export function initiateOrVerifyMicroDepositsRequestToJSON(
  initiateOrVerifyMicroDepositsRequest: InitiateOrVerifyMicroDepositsRequest,
): string {
  return JSON.stringify(
    InitiateOrVerifyMicroDepositsRequest$outboundSchema.parse(
      initiateOrVerifyMicroDepositsRequest,
    ),
  );
}

export function initiateOrVerifyMicroDepositsRequestFromJSON(
  jsonString: string,
): SafeParseResult<InitiateOrVerifyMicroDepositsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateOrVerifyMicroDepositsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateOrVerifyMicroDepositsRequest' from JSON`,
  );
}

/** @internal */
export const InitiateOrVerifyMicroDepositsSelf$inboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
  "resource-type": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "resource-type": "resourceType",
  });
});

/** @internal */
export type InitiateOrVerifyMicroDepositsSelf$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
  "resource-type"?: string | undefined;
};

/** @internal */
export const InitiateOrVerifyMicroDepositsSelf$outboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsSelf$Outbound,
  z.ZodTypeDef,
  InitiateOrVerifyMicroDepositsSelf
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
  resourceType: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    resourceType: "resource-type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateOrVerifyMicroDepositsSelf$ {
  /** @deprecated use `InitiateOrVerifyMicroDepositsSelf$inboundSchema` instead. */
  export const inboundSchema = InitiateOrVerifyMicroDepositsSelf$inboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsSelf$outboundSchema` instead. */
  export const outboundSchema =
    InitiateOrVerifyMicroDepositsSelf$outboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsSelf$Outbound` instead. */
  export type Outbound = InitiateOrVerifyMicroDepositsSelf$Outbound;
}

export function initiateOrVerifyMicroDepositsSelfToJSON(
  initiateOrVerifyMicroDepositsSelf: InitiateOrVerifyMicroDepositsSelf,
): string {
  return JSON.stringify(
    InitiateOrVerifyMicroDepositsSelf$outboundSchema.parse(
      initiateOrVerifyMicroDepositsSelf,
    ),
  );
}

export function initiateOrVerifyMicroDepositsSelfFromJSON(
  jsonString: string,
): SafeParseResult<InitiateOrVerifyMicroDepositsSelf, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InitiateOrVerifyMicroDepositsSelf$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateOrVerifyMicroDepositsSelf' from JSON`,
  );
}

/** @internal */
export const InitiateOrVerifyMicroDepositsLinks$inboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => InitiateOrVerifyMicroDepositsSelf$inboundSchema)
    .optional(),
});

/** @internal */
export type InitiateOrVerifyMicroDepositsLinks$Outbound = {
  self?: InitiateOrVerifyMicroDepositsSelf$Outbound | undefined;
};

/** @internal */
export const InitiateOrVerifyMicroDepositsLinks$outboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsLinks$Outbound,
  z.ZodTypeDef,
  InitiateOrVerifyMicroDepositsLinks
> = z.object({
  self: z.lazy(() => InitiateOrVerifyMicroDepositsSelf$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateOrVerifyMicroDepositsLinks$ {
  /** @deprecated use `InitiateOrVerifyMicroDepositsLinks$inboundSchema` instead. */
  export const inboundSchema = InitiateOrVerifyMicroDepositsLinks$inboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsLinks$outboundSchema` instead. */
  export const outboundSchema =
    InitiateOrVerifyMicroDepositsLinks$outboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsLinks$Outbound` instead. */
  export type Outbound = InitiateOrVerifyMicroDepositsLinks$Outbound;
}

export function initiateOrVerifyMicroDepositsLinksToJSON(
  initiateOrVerifyMicroDepositsLinks: InitiateOrVerifyMicroDepositsLinks,
): string {
  return JSON.stringify(
    InitiateOrVerifyMicroDepositsLinks$outboundSchema.parse(
      initiateOrVerifyMicroDepositsLinks,
    ),
  );
}

export function initiateOrVerifyMicroDepositsLinksFromJSON(
  jsonString: string,
): SafeParseResult<InitiateOrVerifyMicroDepositsLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateOrVerifyMicroDepositsLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateOrVerifyMicroDepositsLinks' from JSON`,
  );
}

/** @internal */
export const InitiateOrVerifyMicroDepositsResponseBody$inboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.lazy(() => InitiateOrVerifyMicroDepositsLinks$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type InitiateOrVerifyMicroDepositsResponseBody$Outbound = {
  _links?: InitiateOrVerifyMicroDepositsLinks$Outbound | undefined;
};

/** @internal */
export const InitiateOrVerifyMicroDepositsResponseBody$outboundSchema:
  z.ZodType<
    InitiateOrVerifyMicroDepositsResponseBody$Outbound,
    z.ZodTypeDef,
    InitiateOrVerifyMicroDepositsResponseBody
  > = z.object({
    links: z.lazy(() => InitiateOrVerifyMicroDepositsLinks$outboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      links: "_links",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateOrVerifyMicroDepositsResponseBody$ {
  /** @deprecated use `InitiateOrVerifyMicroDepositsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    InitiateOrVerifyMicroDepositsResponseBody$inboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    InitiateOrVerifyMicroDepositsResponseBody$outboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsResponseBody$Outbound` instead. */
  export type Outbound = InitiateOrVerifyMicroDepositsResponseBody$Outbound;
}

export function initiateOrVerifyMicroDepositsResponseBodyToJSON(
  initiateOrVerifyMicroDepositsResponseBody:
    InitiateOrVerifyMicroDepositsResponseBody,
): string {
  return JSON.stringify(
    InitiateOrVerifyMicroDepositsResponseBody$outboundSchema.parse(
      initiateOrVerifyMicroDepositsResponseBody,
    ),
  );
}

export function initiateOrVerifyMicroDepositsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  InitiateOrVerifyMicroDepositsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateOrVerifyMicroDepositsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'InitiateOrVerifyMicroDepositsResponseBody' from JSON`,
  );
}

/** @internal */
export const InitiateOrVerifyMicroDepositsResponse$inboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.lazy(() => InitiateOrVerifyMicroDepositsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type InitiateOrVerifyMicroDepositsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: InitiateOrVerifyMicroDepositsResponseBody$Outbound;
};

/** @internal */
export const InitiateOrVerifyMicroDepositsResponse$outboundSchema: z.ZodType<
  InitiateOrVerifyMicroDepositsResponse$Outbound,
  z.ZodTypeDef,
  InitiateOrVerifyMicroDepositsResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.lazy(() =>
    InitiateOrVerifyMicroDepositsResponseBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateOrVerifyMicroDepositsResponse$ {
  /** @deprecated use `InitiateOrVerifyMicroDepositsResponse$inboundSchema` instead. */
  export const inboundSchema =
    InitiateOrVerifyMicroDepositsResponse$inboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsResponse$outboundSchema` instead. */
  export const outboundSchema =
    InitiateOrVerifyMicroDepositsResponse$outboundSchema;
  /** @deprecated use `InitiateOrVerifyMicroDepositsResponse$Outbound` instead. */
  export type Outbound = InitiateOrVerifyMicroDepositsResponse$Outbound;
}

export function initiateOrVerifyMicroDepositsResponseToJSON(
  initiateOrVerifyMicroDepositsResponse: InitiateOrVerifyMicroDepositsResponse,
): string {
  return JSON.stringify(
    InitiateOrVerifyMicroDepositsResponse$outboundSchema.parse(
      initiateOrVerifyMicroDepositsResponse,
    ),
  );
}

export function initiateOrVerifyMicroDepositsResponseFromJSON(
  jsonString: string,
): SafeParseResult<InitiateOrVerifyMicroDepositsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateOrVerifyMicroDepositsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateOrVerifyMicroDepositsResponse' from JSON`,
  );
}
