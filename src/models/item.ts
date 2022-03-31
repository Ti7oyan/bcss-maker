import Account from './account';

export type ItemType = {
  id: string;
  account: Account;
  debtorSum: number;
  creditorSum: number;
}

export class Item {
  public id: string;
  public account: Account;
  public debtorSum: number;
  public creditorSum: number;

  constructor ({ id, account, debtorSum, creditorSum }: ItemType) {
    this.id = id;
    this.account = account;
    this.debtorSum = debtorSum;
    this.creditorSum = creditorSum;
  }

  public get balance() {
    if (this.account.balance === 'deudor') return this.debtorSum - this.creditorSum;
    else if (this.account.balance === 'acreedor') return this.creditorSum - this.debtorSum;
  }
}