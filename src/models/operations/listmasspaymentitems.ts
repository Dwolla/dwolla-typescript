/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type ListMassPaymentItemsRequest = {
  /**
   * Mass payment unique identifier
   */
  id: string;
  /**
   * How many results to return
   */
  limit?: string | undefined;
  /**
   * How many results to skip
   */
  offset?: string | undefined;
  /**
   * Filter by item status
   */
  status?: string | undefined;
};

export type ListMassPaymentItemsSelf = {
  href?: string | undefined;
};

export type ListMassPaymentItemsFirst = {
  href?: string | undefined;
};

export type ListMassPaymentItemsLast = {
  href?: string | undefined;
};

export type ListMassPaymentItemsLinks = {
  self?: ListMassPaymentItemsSelf | undefined;
  first?: ListMassPaymentItemsFirst | undefined;
  last?: ListMassPaymentItemsLast | undefined;
};

export type ListMassPaymentItemsEmbedded = {
  items?: Array<models.MassPaymentItem> | undefined;
};

/**
 * successful operation
 */
export type ListMassPaymentItemsResponse = {
  links?: ListMassPaymentItemsLinks | undefined;
  embedded?: ListMassPaymentItemsEmbedded | undefined;
  total?: number | undefined;
};

/** @internal */
export const ListMassPaymentItemsRequest$inboundSchema: z.ZodType<
  ListMassPaymentItemsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  limit: z.string().optional(),
  offset: z.string().optional(),
  status: z.string().optional(),
});

/** @internal */
export type ListMassPaymentItemsRequest$Outbound = {
  id: string;
  limit?: string | undefined;
  offset?: string | undefined;
  status?: string | undefined;
};

/** @internal */
export const ListMassPaymentItemsRequest$outboundSchema: z.ZodType<
  ListMassPaymentItemsRequest$Outbound,
  z.ZodTypeDef,
  ListMassPaymentItemsRequest
> = z.object({
  id: z.string(),
  limit: z.string().optional(),
  offset: z.string().optional(),
  status: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsRequest$ {
  /** @deprecated use `ListMassPaymentItemsRequest$inboundSchema` instead. */
  export const inboundSchema = ListMassPaymentItemsRequest$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsRequest$outboundSchema` instead. */
  export const outboundSchema = ListMassPaymentItemsRequest$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsRequest$Outbound` instead. */
  export type Outbound = ListMassPaymentItemsRequest$Outbound;
}

export function listMassPaymentItemsRequestToJSON(
  listMassPaymentItemsRequest: ListMassPaymentItemsRequest,
): string {
  return JSON.stringify(
    ListMassPaymentItemsRequest$outboundSchema.parse(
      listMassPaymentItemsRequest,
    ),
  );
}

export function listMassPaymentItemsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListMassPaymentItemsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMassPaymentItemsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMassPaymentItemsRequest' from JSON`,
  );
}

/** @internal */
export const ListMassPaymentItemsSelf$inboundSchema: z.ZodType<
  ListMassPaymentItemsSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
});

/** @internal */
export type ListMassPaymentItemsSelf$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const ListMassPaymentItemsSelf$outboundSchema: z.ZodType<
  ListMassPaymentItemsSelf$Outbound,
  z.ZodTypeDef,
  ListMassPaymentItemsSelf
> = z.object({
  href: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsSelf$ {
  /** @deprecated use `ListMassPaymentItemsSelf$inboundSchema` instead. */
  export const inboundSchema = ListMassPaymentItemsSelf$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsSelf$outboundSchema` instead. */
  export const outboundSchema = ListMassPaymentItemsSelf$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsSelf$Outbound` instead. */
  export type Outbound = ListMassPaymentItemsSelf$Outbound;
}

export function listMassPaymentItemsSelfToJSON(
  listMassPaymentItemsSelf: ListMassPaymentItemsSelf,
): string {
  return JSON.stringify(
    ListMassPaymentItemsSelf$outboundSchema.parse(listMassPaymentItemsSelf),
  );
}

export function listMassPaymentItemsSelfFromJSON(
  jsonString: string,
): SafeParseResult<ListMassPaymentItemsSelf, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMassPaymentItemsSelf$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMassPaymentItemsSelf' from JSON`,
  );
}

/** @internal */
export const ListMassPaymentItemsFirst$inboundSchema: z.ZodType<
  ListMassPaymentItemsFirst,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
});

/** @internal */
export type ListMassPaymentItemsFirst$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const ListMassPaymentItemsFirst$outboundSchema: z.ZodType<
  ListMassPaymentItemsFirst$Outbound,
  z.ZodTypeDef,
  ListMassPaymentItemsFirst
> = z.object({
  href: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsFirst$ {
  /** @deprecated use `ListMassPaymentItemsFirst$inboundSchema` instead. */
  export const inboundSchema = ListMassPaymentItemsFirst$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsFirst$outboundSchema` instead. */
  export const outboundSchema = ListMassPaymentItemsFirst$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsFirst$Outbound` instead. */
  export type Outbound = ListMassPaymentItemsFirst$Outbound;
}

export function listMassPaymentItemsFirstToJSON(
  listMassPaymentItemsFirst: ListMassPaymentItemsFirst,
): string {
  return JSON.stringify(
    ListMassPaymentItemsFirst$outboundSchema.parse(listMassPaymentItemsFirst),
  );
}

export function listMassPaymentItemsFirstFromJSON(
  jsonString: string,
): SafeParseResult<ListMassPaymentItemsFirst, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMassPaymentItemsFirst$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMassPaymentItemsFirst' from JSON`,
  );
}

/** @internal */
export const ListMassPaymentItemsLast$inboundSchema: z.ZodType<
  ListMassPaymentItemsLast,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
});

/** @internal */
export type ListMassPaymentItemsLast$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const ListMassPaymentItemsLast$outboundSchema: z.ZodType<
  ListMassPaymentItemsLast$Outbound,
  z.ZodTypeDef,
  ListMassPaymentItemsLast
> = z.object({
  href: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsLast$ {
  /** @deprecated use `ListMassPaymentItemsLast$inboundSchema` instead. */
  export const inboundSchema = ListMassPaymentItemsLast$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsLast$outboundSchema` instead. */
  export const outboundSchema = ListMassPaymentItemsLast$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsLast$Outbound` instead. */
  export type Outbound = ListMassPaymentItemsLast$Outbound;
}

export function listMassPaymentItemsLastToJSON(
  listMassPaymentItemsLast: ListMassPaymentItemsLast,
): string {
  return JSON.stringify(
    ListMassPaymentItemsLast$outboundSchema.parse(listMassPaymentItemsLast),
  );
}

export function listMassPaymentItemsLastFromJSON(
  jsonString: string,
): SafeParseResult<ListMassPaymentItemsLast, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMassPaymentItemsLast$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMassPaymentItemsLast' from JSON`,
  );
}

/** @internal */
export const ListMassPaymentItemsLinks$inboundSchema: z.ZodType<
  ListMassPaymentItemsLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => ListMassPaymentItemsSelf$inboundSchema).optional(),
  first: z.lazy(() => ListMassPaymentItemsFirst$inboundSchema).optional(),
  last: z.lazy(() => ListMassPaymentItemsLast$inboundSchema).optional(),
});

/** @internal */
export type ListMassPaymentItemsLinks$Outbound = {
  self?: ListMassPaymentItemsSelf$Outbound | undefined;
  first?: ListMassPaymentItemsFirst$Outbound | undefined;
  last?: ListMassPaymentItemsLast$Outbound | undefined;
};

/** @internal */
export const ListMassPaymentItemsLinks$outboundSchema: z.ZodType<
  ListMassPaymentItemsLinks$Outbound,
  z.ZodTypeDef,
  ListMassPaymentItemsLinks
> = z.object({
  self: z.lazy(() => ListMassPaymentItemsSelf$outboundSchema).optional(),
  first: z.lazy(() => ListMassPaymentItemsFirst$outboundSchema).optional(),
  last: z.lazy(() => ListMassPaymentItemsLast$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsLinks$ {
  /** @deprecated use `ListMassPaymentItemsLinks$inboundSchema` instead. */
  export const inboundSchema = ListMassPaymentItemsLinks$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsLinks$outboundSchema` instead. */
  export const outboundSchema = ListMassPaymentItemsLinks$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsLinks$Outbound` instead. */
  export type Outbound = ListMassPaymentItemsLinks$Outbound;
}

export function listMassPaymentItemsLinksToJSON(
  listMassPaymentItemsLinks: ListMassPaymentItemsLinks,
): string {
  return JSON.stringify(
    ListMassPaymentItemsLinks$outboundSchema.parse(listMassPaymentItemsLinks),
  );
}

export function listMassPaymentItemsLinksFromJSON(
  jsonString: string,
): SafeParseResult<ListMassPaymentItemsLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMassPaymentItemsLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMassPaymentItemsLinks' from JSON`,
  );
}

/** @internal */
export const ListMassPaymentItemsEmbedded$inboundSchema: z.ZodType<
  ListMassPaymentItemsEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(models.MassPaymentItem$inboundSchema).optional(),
});

/** @internal */
export type ListMassPaymentItemsEmbedded$Outbound = {
  items?: Array<models.MassPaymentItem$Outbound> | undefined;
};

/** @internal */
export const ListMassPaymentItemsEmbedded$outboundSchema: z.ZodType<
  ListMassPaymentItemsEmbedded$Outbound,
  z.ZodTypeDef,
  ListMassPaymentItemsEmbedded
> = z.object({
  items: z.array(models.MassPaymentItem$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsEmbedded$ {
  /** @deprecated use `ListMassPaymentItemsEmbedded$inboundSchema` instead. */
  export const inboundSchema = ListMassPaymentItemsEmbedded$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsEmbedded$outboundSchema` instead. */
  export const outboundSchema = ListMassPaymentItemsEmbedded$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsEmbedded$Outbound` instead. */
  export type Outbound = ListMassPaymentItemsEmbedded$Outbound;
}

export function listMassPaymentItemsEmbeddedToJSON(
  listMassPaymentItemsEmbedded: ListMassPaymentItemsEmbedded,
): string {
  return JSON.stringify(
    ListMassPaymentItemsEmbedded$outboundSchema.parse(
      listMassPaymentItemsEmbedded,
    ),
  );
}

export function listMassPaymentItemsEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<ListMassPaymentItemsEmbedded, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMassPaymentItemsEmbedded$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMassPaymentItemsEmbedded' from JSON`,
  );
}

/** @internal */
export const ListMassPaymentItemsResponse$inboundSchema: z.ZodType<
  ListMassPaymentItemsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  _links: z.lazy(() => ListMassPaymentItemsLinks$inboundSchema).optional(),
  _embedded: z.lazy(() => ListMassPaymentItemsEmbedded$inboundSchema)
    .optional(),
  total: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
    "_embedded": "embedded",
  });
});

/** @internal */
export type ListMassPaymentItemsResponse$Outbound = {
  _links?: ListMassPaymentItemsLinks$Outbound | undefined;
  _embedded?: ListMassPaymentItemsEmbedded$Outbound | undefined;
  total?: number | undefined;
};

/** @internal */
export const ListMassPaymentItemsResponse$outboundSchema: z.ZodType<
  ListMassPaymentItemsResponse$Outbound,
  z.ZodTypeDef,
  ListMassPaymentItemsResponse
> = z.object({
  links: z.lazy(() => ListMassPaymentItemsLinks$outboundSchema).optional(),
  embedded: z.lazy(() => ListMassPaymentItemsEmbedded$outboundSchema)
    .optional(),
  total: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
    embedded: "_embedded",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMassPaymentItemsResponse$ {
  /** @deprecated use `ListMassPaymentItemsResponse$inboundSchema` instead. */
  export const inboundSchema = ListMassPaymentItemsResponse$inboundSchema;
  /** @deprecated use `ListMassPaymentItemsResponse$outboundSchema` instead. */
  export const outboundSchema = ListMassPaymentItemsResponse$outboundSchema;
  /** @deprecated use `ListMassPaymentItemsResponse$Outbound` instead. */
  export type Outbound = ListMassPaymentItemsResponse$Outbound;
}

export function listMassPaymentItemsResponseToJSON(
  listMassPaymentItemsResponse: ListMassPaymentItemsResponse,
): string {
  return JSON.stringify(
    ListMassPaymentItemsResponse$outboundSchema.parse(
      listMassPaymentItemsResponse,
    ),
  );
}

export function listMassPaymentItemsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListMassPaymentItemsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMassPaymentItemsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMassPaymentItemsResponse' from JSON`,
  );
}
