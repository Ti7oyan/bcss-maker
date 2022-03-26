import { caja } from './lib/accounts';
import { Item } from './models/item';

const App = () => {
  const cajaBCSS = new Item({
    account: caja,
    debtorSum: 2000,
    creditorSum: 1000
  });
  return (
    <div>
      <p>{cajaBCSS.account.name}</p>
      <p>{cajaBCSS.account.balance}</p>
      <p>{cajaBCSS.balance}</p>
    </div>
  );
};

export default App;
