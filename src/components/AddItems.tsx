import { useEffect, useState } from 'react';
import { Select, NumberInput, Button } from '@mantine/core';

import { cuentasContables } from '../lib/accounts';
import Account from '../models/account';

const accounts = cuentasContables.map((account: Account) => {
  return { value: account.value, label: account.name, group: account.heading };
});

const AddItems = () => {
  const [selectedAccount, setSelectedAccount] = useState<string | null>('');
  const [debtorTotal, setDebtorTotal] = useState<number | undefined>(0);
  const [creditorTotal, setCreditorTotal] = useState<number | undefined>(0);

  return (
    <div className='grid gap-y-4'>
      <Select
        label="Seleccioná una cuenta"
        value={selectedAccount}
        placeholder="Elige una cuenta"
        onChange={setSelectedAccount}
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
      <Button color="blue">
        Agregar
      </Button>
    </div>
  );
};

export default AddItems;