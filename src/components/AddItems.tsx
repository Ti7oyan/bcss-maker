// Libraries
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Select, NumberInput, Button } from '@mantine/core';
import { v4 as uuid } from 'uuid';

// Own Lib
import { cuentasContables } from '../lib/accounts';
import { ItemType } from '../models/item';
import Account from '../models/account';
import toast from 'react-hot-toast';

const accounts = cuentasContables.map((account: Account) => {
  return { value: account.value, label: account.name, group: account.heading };
});
type AddItemsType = {
  createItem: ({ account, debtorSum, creditorSum}: ItemType) => void;
  displayModal: Dispatch<SetStateAction<boolean>>
}

const AddItems = ({ createItem, displayModal }: AddItemsType) => {
  const [selectAccount, setSelectAccount] = useState<string | null>('');
  const [debtorTotal, setDebtorTotal] = useState<number | undefined>(0);
  const [creditorTotal, setCreditorTotal] = useState<number | undefined>(0);
  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    const finalAccount = cuentasContables.find((account) => account.value === selectAccount);
    setAccount(finalAccount);
  }, [selectAccount]);
  

  return (
    <div className='grid gap-y-4'>
      <Select
        label="Seleccioná una cuenta"
        value={selectAccount}
        placeholder="Elige una cuenta"
        onChange={setSelectAccount}
        data={accounts}
        clearable
        searchable
        required
      />
      <NumberInput
        defaultValue={0}
        min={0}
        max={999999}
        value={debtorTotal}
        onChange={setDebtorTotal}
        placeholder={'Ej.: 2500'}
        label='Total del debe'
        description='La suma de todos los valores del debe.'
        required
        hideControls
      />
      <NumberInput
        defaultValue={0}
        min={0}
        max={999999}
        value={creditorTotal}
        onChange={setCreditorTotal}
        placeholder={'Ej.: 1200'}
        label='Total del haber'
        description='La suma de todos los valores del haber.'
        required
        hideControls
      />
      <Button
        color="blue"
        onClick={() => {
          if (selectAccount != '') {
            if (debtorTotal != 0 || creditorTotal != 0) {
              createItem({ id: uuid(), account: account, debtorSum: debtorTotal ?? 0, creditorSum: creditorTotal ?? 0 });
              displayModal(false);
            } else toast.error('No pusiste ningún valor.');
          } else toast.error('No escogiste una cuenta.');
        }}
        className='border-blue-200'
        variant='light'
      >
        Agregar
      </Button>
    </div>
  );
};

export default AddItems;