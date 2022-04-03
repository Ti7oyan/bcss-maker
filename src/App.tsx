import { useEffect, useState } from 'react';
import { AppShell, Button, Modal } from '@mantine/core';
import toast, { Toaster } from 'react-hot-toast';

// Components
import AddItems from './components/AddItems';
import HeaderComponent from './components/HeaderComponent';
import ItemGroup from './components/ItemGroup';
import BCSSComponent from './components/BCSSComponent';

// Library
import Item, { ItemType } from './models/item';
import BCSS from './models/bcss';

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [bcss, setBcss] = useState<BCSS>();
  const [openedAddItems, setOpenedAddItems] = useState<boolean>(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items')!);
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

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
    toast((t) => (
      <div className='flex'>
        <p className='text-sm'>¿Seguro/a que quieres borrar todas las cuentas?</p>
        <span className='flex'>
          <Button
            variant="light"
            className="border-green-500 mx-2"
            color="green"
            onClick={() => {
              setItems([]);
              toast.dismiss(t.id);
            }}
          >
            Si
          </Button>
          <Button
            variant="light"
            className="border-red-500"
            color="red"
            onClick={() => {
              toast.dismiss(t.id);
            }}
          >
            No
          </Button>
        </span>
      </div>
    ));
  }

  function createBCSS() {
    if (items.length >= 1) {
      const newBCSS = new BCSS(items);
      setBcss(newBCSS);
    } else {
      toast.error('No agregaste cuentas que utilizar.');
    }
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
            {Array.isArray(items) && items.length > 0 ? (
              <ItemGroup items={items} deleteItem={deleteItem} />
            ) : (
              <p className="p-2">No agregaste ninguna cuenta.</p>
            )}
          </div>
          {items.length >= 1 
            ? (
              <Button
                className="m-4 transition duration-150 hover:bg-red-500 hover:text-white"
                color="red"
                variant="outline"
                onClick={() => resetItems()}
              >
                Borrar todas las cuentas
              </Button>
            )
            : null}
        </section>

        <section>
          <h3 className="section-title">¿Todo listo?</h3>
          <Button
            variant="outline"
            className="m-auto w-max"
            onClick={() => {
              createBCSS();
            }}
          >
            Crear BCSS
          </Button>
        </section>

        {bcss ? <BCSSComponent BCSS={bcss} /> : null}
      </main>
    </AppShell>
  );
};

export default App;
