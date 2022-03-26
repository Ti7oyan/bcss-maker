import Account from './account';

type ItemType = {
  account: Account;
  debtorSum: number;
  creditorSum: number;
}

export class Item {
  account: Account;
  debtorSum: number;
  creditorSum: number;

  constructor ({ account, debtorSum, creditorSum }: ItemType) {
    this.account = account;
    this.debtorSum = debtorSum;
    this.creditorSum = creditorSum;
  }

  public get balance() {
    if (this.debtorSum > this.creditorSum) return this.debtorSum - this.creditorSum;
    else if (this.creditorSum > this.debtorSum) return this.creditorSum - this.debtorSum;
    else return this.debtorSum - this.creditorSum;
  }
}