export type AccountType = {
  name: string;
  balance: 'deudor' | 'acreedor';
}

class Account {
  name: string;
  balance: 'deudor' | 'acreedor';

  constructor ({ name, balance }: AccountType) {
    this.name = name;
    this.balance = balance;
  }
}

export default Account;
