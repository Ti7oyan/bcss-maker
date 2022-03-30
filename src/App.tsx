import { useState } from 'react';
import { Modal } from '@mantine/core';

// import { Item } from './models/item';

// Components
import AddItems from './components/AddItems';

const App = () => {
  const [openedAddItems, setOpenedAddItems] = useState<boolean>(false);

  return (
    <main style={{margin: '1em'}}>
      <Modal
        opened={openedAddItems}
        withCloseButton={false}
        onClose={() => setOpenedAddItems(false)}
        title="Agregá una cuenta"
        centered
      >
        <AddItems />
      </Modal>
      <button className='border-2 p-2' onClick={() => setOpenedAddItems(true)}>Agregar cuenta</button>
    </main>
  );
};

export default App;
