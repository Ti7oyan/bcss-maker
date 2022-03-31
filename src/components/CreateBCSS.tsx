import { Item } from '../models/item';
import { Box, Table } from '@mantine/core';

type CreateBCSSType = {
  items: Item[];
}

const getSums = (items: Item[]) => {
  let [debts, credits] = [0, 0];
  const totalDebts = items.forEach((item) => debts += item.debtorSum);
  const totalCredits = items.forEach((item) => credits += item.creditorSum);

  return {
    debts,
    credits
  };
};

const getGroupTotal = (group: string, items: Item[]) => {
  let balanceGroup = 0;
  const groupAccounts = items.filter((item) => item.account?.group === group);
  const totalGroup = groupAccounts.forEach((item) => balanceGroup += item.balance ?? 0);

  return balanceGroup;
};

const Subtotal = ({ items }: CreateBCSSType) => {
  const sums = getSums(items);
  const activo = getGroupTotal('activo',items);
  const pasivo = getGroupTotal('pasivo', items);
  const patrimonioNeto = getGroupTotal('patrimonio neto', items);
  const perdida = getGroupTotal('pérdida', items);
  const ganancia = getGroupTotal('ganancia', items);

  return (
    <tr>
      <td>SUBTOTAL</td>
      <td>{sums.debts}</td>
      <td>{sums.credits}</td>
      <td>{activo + perdida}</td>
      <td>{pasivo + patrimonioNeto + ganancia}</td>
      <td>{activo}</td>
      <td>{pasivo + patrimonioNeto}</td>
      <td>{perdida}</td>
      <td>{ganancia}</td>
    </tr>
  );
};

const Results = ({ items }: CreateBCSSType) => {
  const perdida = getGroupTotal('pérdida', items);
  const ganancia = getGroupTotal('ganancia', items);

  const result = ganancia - perdida;

  return (
    <tr>
      <td>RESULTADOS</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>{ ganancia <= perdida ? result : 0 }</td>
      <td>{ ganancia >= perdida ? result : 0 }</td>
      <td>{ ganancia >= perdida ? result : 0 }</td>
      <td>{ ganancia <= perdida ? result : 0 }</td>
    </tr>
  );
};

const Total = ({ items }: CreateBCSSType) => {
  const sums = getSums(items);
  const activo = getGroupTotal('activo',items);
  const pasivo = getGroupTotal('pasivo', items);
  const patrimonioNeto = getGroupTotal('patrimonio neto', items);
  const perdida = getGroupTotal('pérdida', items);
  const ganancia = getGroupTotal('ganancia', items);
  const result = ganancia - perdida;
  let finalResult: {
    activo?: number,
    pasivo?: number,
    patrimonioNeto?: number,
    pasivoPatrimonioNeto?: number;
    perdida?: number,
    ganancia?: number
  } = {
    activo: activo,
    pasivo: pasivo,
    patrimonioNeto: patrimonioNeto,
    pasivoPatrimonioNeto: pasivo + patrimonioNeto,
    perdida: perdida,
    ganancia: ganancia
  };

  if (ganancia >= perdida) {
    finalResult = {
      activo: activo,
      pasivoPatrimonioNeto: pasivo + patrimonioNeto + result,
      perdida: perdida + result,
      ganancia: ganancia
    };
  } else {
    finalResult = {
      activo: activo + result,
      pasivoPatrimonioNeto: pasivo + patrimonioNeto,
      perdida: perdida,
      ganancia: ganancia + result
    };
  }

  return (
    <tr>
      <td>TOTAL</td>
      <td>{sums.debts}</td>
      <td>{sums.credits}</td>
      <td>{activo + perdida}</td>
      <td>{pasivo + patrimonioNeto + ganancia}</td>
      <td>{finalResult.activo}</td>
      <td>{finalResult.pasivoPatrimonioNeto}</td>
      <td>{finalResult.perdida}</td>
      <td>{finalResult.ganancia}</td>
    </tr>
  );
};

const CreateBCSS = ({ items }: CreateBCSSType) => {
  const rows = items.map((item) => (
    <tr className='table-columns' key={item.id}>
      <td>{item.account?.name}</td>
      <td>{item.debtorSum}</td>
      <td>{item.creditorSum}</td>
      <td>{item.account?.balance === 'deudor' ? item.balance : '-'}</td>
      <td>{item.account?.balance === 'acreedor' ? item.balance : '-'}</td>
      <td>{item.account?.group === 'activo' ? item.balance : '-'}</td>
      <td>{item.account?.group === 'pasivo' || item.account?.group === 'patrimonio neto' ? item.balance : '-'}</td>
      <td>{item.account?.group === 'pérdida' ? item.balance : '-'}</td>
      <td>{item.account?.group === 'ganancia' ? item.balance : '-'}</td>
    </tr>
  ));

  return (
    <Box className='overflow-x-auto'>
      <Table className='border-2 border-gray-700' striped>
        <thead className='border-2 border-gray-700'>
          <tr className='table-columns'>
            <th>Cuenta</th>
            <th>Sumas Debe</th>
            <th>Sumas Haber</th>
            <th>Saldo Debe</th>
            <th>Saldo Haber</th>
            <th>Cuentas Activo</th>
            <th>Cuentas Pasivo y Pat. Neto</th>
            <th>Cuentas Pérdida</th>
            <th>Cuentas Ganancia</th>
          </tr>
        </thead>
        <tbody>
          {rows}
          <Subtotal items={items} />
          <Results items={items} />
          <Total items={items} />
        </tbody>
      </Table>
    </Box>
  );
};

export default CreateBCSS;