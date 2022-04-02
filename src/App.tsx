import { useEffect, useState } from 'react';
import { AppShell, Button, Modal } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

// Components
import AddItems from './components/AddItems';
import HeaderComponent from './components/HeaderComponent';

// Library
import Item, { ItemType } from './models/item';
import CreateBCSS from './components/CreateBCSS';
import ItemGroup from './components/ItemGroup';

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [bcssItems, setBcssItems] = useState<Item[]>([]);
  const [openedAddItems, setOpenedAddItems] = useState<boolean>(false);

  useEffect(() => {
    console.log(localStorage.getItem('items'));
  }, []);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items')!);
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  function createItem({ id, account, debts, credits, total }: ItemType) {
    const newItem = new Item({
      id: id,
      account: account,
      debts: debts,
      credits: credits,
      total: total
    });

    setItems([...items, newItem]);
  }

  function deleteItem(id: string) {
    const newItems = items.filter((item) => item.id != id);

    setItems(newItems);
  }

  function resetItems() {
    setItems([]);
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
          <div>
            { Array.isArray(items) && items.length > 0
              ? <ItemGroup items={items} deleteItem={deleteItem} />
              : <p className='p-2'>No agregaste ninguna cuenta.</p>
            }
          </div>
          { items.length >= 1 ? <Button className='transition duration-150 hover:bg-red-500 hover:text-white' color='red' variant='outline' onClick={() => resetItems()}>Borrar todas las cuentas</Button> : null}
        </section>

        <section>
          <h3 className="section-title">¿Todo listo?</h3>
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
