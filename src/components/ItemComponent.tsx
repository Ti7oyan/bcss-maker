import { ActionIcon } from '@mantine/core';
import { Trash } from 'tabler-icons-react';
import Item from '../models/item';

type ItemComponentType = {
  item: Item;
  deleteItem: (id: string) => void;
}

const ItemComponent = ({ item, deleteItem }: ItemComponentType) => {
  return (
    <div className='flex justify-between items-center bg-white border-2 border-blue-400 p-2 rounded-xl'>
      <p className='md:text-lg text-blue-400 p-2 font-semibold underline underline-offset-1'>{item.getAccount().getName()}</p>
      <p className='p-2'>
        Debe:
        {' '}
        <b>{item.getDebts()}</b>
      </p>
      <p className='p-2'>
        Haber:
        {' '}
        <b>{item.getCredits()}</b>
      </p>
      <ActionIcon
        onClick={() => deleteItem(item.getId())}
        className='transition duration-150 m-2 hover:bg-red-900'
        variant="outline"
        color="red">
        <Trash />
      </ActionIcon>
    </div>
  );
};

export default ItemComponent;
