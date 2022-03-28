import { useEffect, useState } from 'react';

// import { Item } from './models/item';

// Library
import Groups from './lib/groups';
// import Headings from './lib/headings';

// Components
import AddItems, { showAddItems, hideAddItems } from './components/AddItems/AddItems';

const App = () => {
  // const [items, setItems] = useState<Item[] | null>(null);

  const [addItemsDisplay, setAddItemsDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (addItemsDisplay) {
      showAddItems();
    } else hideAddItems();
  }, [addItemsDisplay]);

  return (
    <main style={{margin: '1em'}}>
      <button onClick={() => setAddItemsDisplay(true)}>Ok</button>
      <AddItems groups={Groups} setDisplay={setAddItemsDisplay} />
    </main>
  );
};

export default App;
