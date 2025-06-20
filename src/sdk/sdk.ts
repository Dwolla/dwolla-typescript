/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Accounts } from "./accounts.js";
import { BeneficialOwners } from "./beneficialowners.js";
import { BusinessClassifications } from "./businessclassifications.js";
import { ClientTokens } from "./clienttokens.js";
import { Customers } from "./customers.js";
import { Documents } from "./documents.js";
import { Events } from "./events.js";
import { ExchangePartners } from "./exchangepartners.js";
import { Exchanges } from "./exchanges.js";
import { ExchangeSessions } from "./exchangesessions.js";
import { FundingSources } from "./fundingsources.js";
import { Kba } from "./kba.js";
import { Labels } from "./labels.js";
import { MassPayments } from "./masspayments.js";
import { Root } from "./root.js";
import { Tokens } from "./tokens.js";
import { Transfers } from "./transfers.js";
import { Webhooks } from "./webhooks.js";
import { WebhookSubscriptions } from "./webhooksubscriptions.js";

export class Dwolla extends ClientSDK {
  private _tokens?: Tokens;
  get tokens(): Tokens {
    return (this._tokens ??= new Tokens(this._options));
  }

  private _root?: Root;
  get root(): Root {
    return (this._root ??= new Root(this._options));
  }

  private _accounts?: Accounts;
  get accounts(): Accounts {
    return (this._accounts ??= new Accounts(this._options));
  }

  private _customers?: Customers;
  get customers(): Customers {
    return (this._customers ??= new Customers(this._options));
  }

  private _businessClassifications?: BusinessClassifications;
  get businessClassifications(): BusinessClassifications {
    return (this._businessClassifications ??= new BusinessClassifications(
      this._options,
    ));
  }

  private _beneficialOwners?: BeneficialOwners;
  get beneficialOwners(): BeneficialOwners {
    return (this._beneficialOwners ??= new BeneficialOwners(this._options));
  }

  private _documents?: Documents;
  get documents(): Documents {
    return (this._documents ??= new Documents(this._options));
  }

  private _kba?: Kba;
  get kba(): Kba {
    return (this._kba ??= new Kba(this._options));
  }

  private _fundingSources?: FundingSources;
  get fundingSources(): FundingSources {
    return (this._fundingSources ??= new FundingSources(this._options));
  }

  private _transfers?: Transfers;
  get transfers(): Transfers {
    return (this._transfers ??= new Transfers(this._options));
  }

  private _massPayments?: MassPayments;
  get massPayments(): MassPayments {
    return (this._massPayments ??= new MassPayments(this._options));
  }

  private _labels?: Labels;
  get labels(): Labels {
    return (this._labels ??= new Labels(this._options));
  }

  private _events?: Events;
  get events(): Events {
    return (this._events ??= new Events(this._options));
  }

  private _webhookSubscriptions?: WebhookSubscriptions;
  get webhookSubscriptions(): WebhookSubscriptions {
    return (this._webhookSubscriptions ??= new WebhookSubscriptions(
      this._options,
    ));
  }

  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this._options));
  }

  private _exchangePartners?: ExchangePartners;
  get exchangePartners(): ExchangePartners {
    return (this._exchangePartners ??= new ExchangePartners(this._options));
  }

  private _exchanges?: Exchanges;
  get exchanges(): Exchanges {
    return (this._exchanges ??= new Exchanges(this._options));
  }

  private _exchangeSessions?: ExchangeSessions;
  get exchangeSessions(): ExchangeSessions {
    return (this._exchangeSessions ??= new ExchangeSessions(this._options));
  }

  private _clientTokens?: ClientTokens;
  get clientTokens(): ClientTokens {
    return (this._clientTokens ??= new ClientTokens(this._options));
  }
}
