import { Account } from './account';

export type ItemType = {
  id: string;
  account: Account;
  debts: number;
  credits: number;
}

class Item {
  private id: string;
  private account: Account;
  private debts: number;
  private credits: number;

  constructor ({ id, account, debts, credits }: ItemType) {
    this.id = id;
    this.account = account;
    this.debts = debts;
    this.credits = credits;
  }

  public getId() { return this.id; }
  public getAccount() { return this.account; }
  public getDebts() { return this.debts; }
  public getCredits() { return this.credits; }
  public getBalance() {
    if (this.account.getBalance() === 'deudor') {
      return Math.abs((this.debts - this.credits));
    } else {
      return Math.abs((this.credits - this.debts));
    }
  }
}

export default Item;