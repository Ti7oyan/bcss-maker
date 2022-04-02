import { ActionIcon } from '@mantine/core';
import { FaTrash } from 'react-icons/fa';
import Item from '../models/item';

export type ItemComponentType = {
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
        className='transition duration-150 m-2 hover:bg-red-500 hover:text-white'
        variant="outline"
        color="red">
        <FaTrash />
      </ActionIcon>
    </div>
  );
};

export default ItemComponent;
