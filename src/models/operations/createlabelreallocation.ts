/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type From = {
  href?: string | undefined;
};

export type To = {
  href?: string | undefined;
};

export type CreateLabelReallocationLinks = {
  from?: From | undefined;
  to?: To | undefined;
};

export type CreateLabelReallocationAmount = {
  currency?: string | undefined;
  value?: string | undefined;
};

/**
 * Parameters to create a label reallocation
 */
export type CreateLabelReallocationRequest = {
  links: CreateLabelReallocationLinks;
  amount: CreateLabelReallocationAmount;
};

export type CreateLabelReallocationResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const From$inboundSchema: z.ZodType<From, z.ZodTypeDef, unknown> = z
  .object({
    href: z.string().optional(),
  });

/** @internal */
export type From$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const From$outboundSchema: z.ZodType<From$Outbound, z.ZodTypeDef, From> =
  z.object({
    href: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace From$ {
  /** @deprecated use `From$inboundSchema` instead. */
  export const inboundSchema = From$inboundSchema;
  /** @deprecated use `From$outboundSchema` instead. */
  export const outboundSchema = From$outboundSchema;
  /** @deprecated use `From$Outbound` instead. */
  export type Outbound = From$Outbound;
}

export function fromToJSON(from: From): string {
  return JSON.stringify(From$outboundSchema.parse(from));
}

export function fromFromJSON(
  jsonString: string,
): SafeParseResult<From, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => From$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'From' from JSON`,
  );
}

/** @internal */
export const To$inboundSchema: z.ZodType<To, z.ZodTypeDef, unknown> = z.object({
  href: z.string().optional(),
});

/** @internal */
export type To$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const To$outboundSchema: z.ZodType<To$Outbound, z.ZodTypeDef, To> = z
  .object({
    href: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace To$ {
  /** @deprecated use `To$inboundSchema` instead. */
  export const inboundSchema = To$inboundSchema;
  /** @deprecated use `To$outboundSchema` instead. */
  export const outboundSchema = To$outboundSchema;
  /** @deprecated use `To$Outbound` instead. */
  export type Outbound = To$Outbound;
}

export function toToJSON(to: To): string {
  return JSON.stringify(To$outboundSchema.parse(to));
}

export function toFromJSON(
  jsonString: string,
): SafeParseResult<To, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => To$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'To' from JSON`,
  );
}

/** @internal */
export const CreateLabelReallocationLinks$inboundSchema: z.ZodType<
  CreateLabelReallocationLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  from: z.lazy(() => From$inboundSchema).optional(),
  to: z.lazy(() => To$inboundSchema).optional(),
});

/** @internal */
export type CreateLabelReallocationLinks$Outbound = {
  from?: From$Outbound | undefined;
  to?: To$Outbound | undefined;
};

/** @internal */
export const CreateLabelReallocationLinks$outboundSchema: z.ZodType<
  CreateLabelReallocationLinks$Outbound,
  z.ZodTypeDef,
  CreateLabelReallocationLinks
> = z.object({
  from: z.lazy(() => From$outboundSchema).optional(),
  to: z.lazy(() => To$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLabelReallocationLinks$ {
  /** @deprecated use `CreateLabelReallocationLinks$inboundSchema` instead. */
  export const inboundSchema = CreateLabelReallocationLinks$inboundSchema;
  /** @deprecated use `CreateLabelReallocationLinks$outboundSchema` instead. */
  export const outboundSchema = CreateLabelReallocationLinks$outboundSchema;
  /** @deprecated use `CreateLabelReallocationLinks$Outbound` instead. */
  export type Outbound = CreateLabelReallocationLinks$Outbound;
}

export function createLabelReallocationLinksToJSON(
  createLabelReallocationLinks: CreateLabelReallocationLinks,
): string {
  return JSON.stringify(
    CreateLabelReallocationLinks$outboundSchema.parse(
      createLabelReallocationLinks,
    ),
  );
}

export function createLabelReallocationLinksFromJSON(
  jsonString: string,
): SafeParseResult<CreateLabelReallocationLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLabelReallocationLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLabelReallocationLinks' from JSON`,
  );
}

/** @internal */
export const CreateLabelReallocationAmount$inboundSchema: z.ZodType<
  CreateLabelReallocationAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  currency: z.string().optional(),
  value: z.string().optional(),
});

/** @internal */
export type CreateLabelReallocationAmount$Outbound = {
  currency?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const CreateLabelReallocationAmount$outboundSchema: z.ZodType<
  CreateLabelReallocationAmount$Outbound,
  z.ZodTypeDef,
  CreateLabelReallocationAmount
> = z.object({
  currency: z.string().optional(),
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLabelReallocationAmount$ {
  /** @deprecated use `CreateLabelReallocationAmount$inboundSchema` instead. */
  export const inboundSchema = CreateLabelReallocationAmount$inboundSchema;
  /** @deprecated use `CreateLabelReallocationAmount$outboundSchema` instead. */
  export const outboundSchema = CreateLabelReallocationAmount$outboundSchema;
  /** @deprecated use `CreateLabelReallocationAmount$Outbound` instead. */
  export type Outbound = CreateLabelReallocationAmount$Outbound;
}

export function createLabelReallocationAmountToJSON(
  createLabelReallocationAmount: CreateLabelReallocationAmount,
): string {
  return JSON.stringify(
    CreateLabelReallocationAmount$outboundSchema.parse(
      createLabelReallocationAmount,
    ),
  );
}

export function createLabelReallocationAmountFromJSON(
  jsonString: string,
): SafeParseResult<CreateLabelReallocationAmount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLabelReallocationAmount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLabelReallocationAmount' from JSON`,
  );
}

/** @internal */
export const CreateLabelReallocationRequest$inboundSchema: z.ZodType<
  CreateLabelReallocationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.lazy(() => CreateLabelReallocationLinks$inboundSchema),
  amount: z.lazy(() => CreateLabelReallocationAmount$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type CreateLabelReallocationRequest$Outbound = {
  _links: CreateLabelReallocationLinks$Outbound;
  amount: CreateLabelReallocationAmount$Outbound;
};

/** @internal */
export const CreateLabelReallocationRequest$outboundSchema: z.ZodType<
  CreateLabelReallocationRequest$Outbound,
  z.ZodTypeDef,
  CreateLabelReallocationRequest
> = z.object({
  links: z.lazy(() => CreateLabelReallocationLinks$outboundSchema),
  amount: z.lazy(() => CreateLabelReallocationAmount$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLabelReallocationRequest$ {
  /** @deprecated use `CreateLabelReallocationRequest$inboundSchema` instead. */
  export const inboundSchema = CreateLabelReallocationRequest$inboundSchema;
  /** @deprecated use `CreateLabelReallocationRequest$outboundSchema` instead. */
  export const outboundSchema = CreateLabelReallocationRequest$outboundSchema;
  /** @deprecated use `CreateLabelReallocationRequest$Outbound` instead. */
  export type Outbound = CreateLabelReallocationRequest$Outbound;
}

export function createLabelReallocationRequestToJSON(
  createLabelReallocationRequest: CreateLabelReallocationRequest,
): string {
  return JSON.stringify(
    CreateLabelReallocationRequest$outboundSchema.parse(
      createLabelReallocationRequest,
    ),
  );
}

export function createLabelReallocationRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateLabelReallocationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLabelReallocationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLabelReallocationRequest' from JSON`,
  );
}

/** @internal */
export const CreateLabelReallocationResponse$inboundSchema: z.ZodType<
  CreateLabelReallocationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type CreateLabelReallocationResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const CreateLabelReallocationResponse$outboundSchema: z.ZodType<
  CreateLabelReallocationResponse$Outbound,
  z.ZodTypeDef,
  CreateLabelReallocationResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLabelReallocationResponse$ {
  /** @deprecated use `CreateLabelReallocationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateLabelReallocationResponse$inboundSchema;
  /** @deprecated use `CreateLabelReallocationResponse$outboundSchema` instead. */
  export const outboundSchema = CreateLabelReallocationResponse$outboundSchema;
  /** @deprecated use `CreateLabelReallocationResponse$Outbound` instead. */
  export type Outbound = CreateLabelReallocationResponse$Outbound;
}

export function createLabelReallocationResponseToJSON(
  createLabelReallocationResponse: CreateLabelReallocationResponse,
): string {
  return JSON.stringify(
    CreateLabelReallocationResponse$outboundSchema.parse(
      createLabelReallocationResponse,
    ),
  );
}

export function createLabelReallocationResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateLabelReallocationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLabelReallocationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLabelReallocationResponse' from JSON`,
  );
}
