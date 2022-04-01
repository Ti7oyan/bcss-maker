import { useState } from 'react';
import { AppShell, Button, Modal } from '@mantine/core';

// Components
import AddItems from './components/AddItems';
import ItemComponent from './components/ItemComponent';
import HeaderComponent from './components/HeaderComponent';

// Library
import { Item, ItemType } from './models/item';
import { Toaster } from 'react-hot-toast';
import CreateBCSS from './components/CreateBCSS';

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [bcssItems, setBcssItems] = useState<Item[]>([]);
  const [openedAddItems, setOpenedAddItems] = useState<boolean>(false);

  function createItem({ id, account, debtorSum, creditorSum}: ItemType) {
    const newItem = new Item({
      id: id,
      account: account,
      debtorSum: debtorSum,
      creditorSum: creditorSum
    });

    setItems([...items, newItem]);
  }

  function deleteItem(id: string) {
    const newItems = items.filter((item) => item.id != id);

    setItems(newItems);
  }

  return (
    <AppShell header={<HeaderComponent />}>
      <Toaster />
      <main className="grid gap-y-16 text-center">
        <section>
          <h3 className="section-title">Añadí una cuenta</h3>
          <Modal
            opened={openedAddItems}
            onClose={() => setOpenedAddItems(false)}
            title="Agregá una cuenta"
            centered
          >
            <AddItems
              createItem={createItem}
              displayModal={setOpenedAddItems}
            />
          </Modal>
          <Button variant="outline" onClick={() => setOpenedAddItems(true)}>
            Agregar cuenta
          </Button>
        </section>

        <section>
          <h3 className="section-title">Verificá la información</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            {items.map((item) => (
              <ItemComponent
                key={item.id}
                id={item.id}
                account={item.account}
                debtorSum={item.debtorSum}
                creditorSum={item.creditorSum}
                deleteItem={deleteItem}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 className='section-title'>¿Todo listo?</h3>
          <Button
            variant="outline"
            className="m-auto w-max"
            onClick={() => {
              setBcssItems(items);
            }}
          >
            Crear BCSS
          </Button>
        </section>

        <CreateBCSS items={bcssItems} />
      </main>
    </AppShell>
  );
};

export default App;
