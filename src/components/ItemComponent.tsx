import { ActionIcon } from '@mantine/core';
import { Trash } from 'tabler-icons-react';
import Account from '../models/account';

type ItemComponentType = {
  id: string,
  account?: Account,
  debtorSum: number,
  creditorSum: number,
  deleteItem: (id: string) => void;
}

const ItemComponent = ({ id, account, debtorSum, creditorSum, deleteItem }: ItemComponentType) => {
  return (
    <div className='flex justify-between items-center bg-white border-2 border-blue-400 p-2 rounded-xl'>
      <p className='md:text-lg text-blue-400 p-2 font-semibold underline underline-offset-1'>{account?.name}</p>
      <p className='p-2'>
        Debe:
        {' '}
        <b>{debtorSum}</b>
      </p>
      <p className='p-2'>
        Haber:
        {' '}
        <b>{creditorSum}</b>
      </p>
      <ActionIcon
        onClick={() => deleteItem(id)}
        className='transition duration-150 m-2 hover:bg-red-900'
        variant="outline"
        color="red">
        <Trash />
      </ActionIcon>
    </div>
  );
};

export default ItemComponent;
