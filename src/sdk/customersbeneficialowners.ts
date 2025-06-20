/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersBeneficialOwnersCreate } from "../funcs/customersBeneficialOwnersCreate.js";
import { customersBeneficialOwnersList } from "../funcs/customersBeneficialOwnersList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class CustomersBeneficialOwners extends ClientSDK {
  /**
   * List beneficial owners
   *
   * @remarks
   * Retrieve a list of beneficial owners that belong to a Customer
   */
  async list(
    request: operations.ListBeneficialOwnersForCustomerRequest,
    options?: RequestOptions,
  ): Promise<models.BeneficialOwners> {
    return unwrapAsync(customersBeneficialOwnersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create beneficial owner
   *
   * @remarks
   * Create beneficial owner which is a natural person who, directly or indirectly, owns 25% or more of the equity interests of the company.
   */
  async create(
    request: operations.CreateBeneficialOwnerForCustomerRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateBeneficialOwnerForCustomerResponse | undefined> {
    return unwrapAsync(customersBeneficialOwnersCreate(
      this,
      request,
      options,
    ));
  }
}
