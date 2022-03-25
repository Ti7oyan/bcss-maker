import { activo } from './lib/groups';
import { caja } from './lib/accounts';

const App = () => {
  return (
    <div>
      <h1>{activo.name}</h1>
      <p>{activo.headings[0].accounts[0].balance}</p>
      <p>{caja.balance}</p>
    </div>
  );
};

export default App;
