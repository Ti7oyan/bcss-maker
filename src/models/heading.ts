import Account from './account';

type HeadingType = {
  name: string;
  accounts: Account[];
}

class Heading {
  name: string;
  accounts: Account[];

  constructor ({ name, accounts }: HeadingType) {
    this.name = name;
    this.accounts = accounts;
  }
}

export default Heading;
