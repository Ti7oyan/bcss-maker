import { Account } from './account';

export type ItemType = {
  id: string;
  account: Account;
  debts: number;
  credits: number;
  total: number;
}

export const getTotal = (account: Account, debts: number, credits: number) => {
  if (account.balance === 'deudor') {
    return Math.abs(debts - credits);
  }

  return Math.abs(credits - debts);
};

class Item {
  public id: string;
  public account: Account;
  public debts: number;
  public credits: number;
  public total: number;

  constructor ({ id, account, debts, credits, total }: ItemType) {
    this.id = id;
    this.account = account;
    this.debts = debts;
    this.credits = credits;
    this.total = total;
  }
}

export default Item;