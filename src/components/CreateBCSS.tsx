import Item from '../models/item';
import { Box, Table } from '@mantine/core';

type TotalsType = {
  totals: {
    sums: {
      debts: number,
      credits: number,
    },
    activo: number,
    pasivo: number,
    patrimonioNeto: number,
    perdida: number,
    ganancia: number
  }
}

const getSums = (items: Item[]) => {
  let [debts, credits] = [0, 0];
  const totalDebts = items.forEach((item) => debts += item.debts);
  const totalCredits = items.forEach((item) => credits += item.credits);

  return {
    debts,
    credits
  };
};

const getTotals = (items: Item[]) => {
  const totals = {
    sums: getSums(items),
    activo: getGroupTotal('activo', items),
    pasivo: getGroupTotal('pasivo', items),
    patrimonioNeto: getGroupTotal('patrimonio neto', items),
    perdida: getGroupTotal('pérdida', items),
    ganancia: getGroupTotal('ganancia', items)
  };

  return totals;
};

const getGroupTotal = (group: string, items: Item[]) => {
  let balanceGroup = 0;
  const groupAccounts = items.filter((item) => item.account.group === group);
  const totalGroup = groupAccounts.forEach((item) => balanceGroup += item.total ?? '-');

  return balanceGroup;
};

const getResult = (perdida: number, ganancia: number) => {
  return Math.abs(ganancia - perdida);
};

const Subtotal = ({ totals }: TotalsType) => {
  return (
    <tr>
      <td>SUBTOTAL</td>
      <td>{totals.sums.debts}</td>
      <td>{totals.sums.credits}</td>
      <td>{totals.activo + totals.perdida}</td>
      <td>{totals.pasivo + totals.patrimonioNeto + totals.ganancia}</td>
      <td>{totals.activo}</td>
      <td>{totals.pasivo + totals.patrimonioNeto}</td>
      <td>{totals.perdida}</td>
      <td>{totals.ganancia}</td>
    </tr>
  );
};

const Results = ({ totals }: TotalsType) => {
  const [perdida, ganancia] = [totals.perdida, totals.ganancia];
  const result = getResult(perdida, ganancia);

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

const Total = ({ totals }: TotalsType) => {
  const [perdida, ganancia] = [totals.perdida, totals.ganancia];
  const result = getResult(totals.perdida, totals.ganancia);

  let finalResult: {
    activo?: number,
    pasivo?: number,
    patrimonioNeto?: number,
    pasivoPatrimonioNeto?: number;
    perdida?: number,
    ganancia?: number
  } = {
    activo: totals.activo,
    pasivo: totals.pasivo,
    patrimonioNeto: totals.patrimonioNeto,
    pasivoPatrimonioNeto: totals.pasivo + totals.patrimonioNeto,
    perdida: totals.perdida,
    ganancia: totals.ganancia
  };

  if (ganancia >= perdida) {
    finalResult = {
      activo: totals.activo,
      pasivoPatrimonioNeto: totals.pasivo + totals.patrimonioNeto + result,
      perdida: perdida + result,
      ganancia: totals.ganancia
    };
  } else {
    finalResult = {
      activo: totals.activo + result,
      pasivoPatrimonioNeto: totals.pasivo + totals.patrimonioNeto,
      perdida: totals.perdida,
      ganancia: ganancia + result
    };
  }

  return (
    <tr>
      <td>TOTAL</td>
      <td>{totals.sums.debts}</td>
      <td>{totals.sums.credits}</td>
      <td>{totals.activo + totals.perdida}</td>
      <td>{totals.pasivo + totals.patrimonioNeto + totals.ganancia}</td>
      <td>{finalResult.activo}</td>
      <td>{finalResult.pasivoPatrimonioNeto}</td>
      <td>{finalResult.perdida}</td>
      <td>{finalResult.ganancia}</td>
    </tr>
  );
};

type CreateBCSSType = { 
  items: Item[]
}

const CreateBCSS = ({ items }: CreateBCSSType) => {
  const totals = getTotals(items);

  const rows = items.map((item) => (
    <tr className='table-columns' key={item.id}>
      <td>{item.account.name}</td>
      <td>{item.debts}</td>
      <td>{item.credits}</td>
      <td>{item.account.balance === 'deudor' ? item.total : '-'}</td>
      <td>{item.account.balance === 'acreedor' ? item.total : '-'}</td>
      <td>{item.account.group === 'activo' ? item.total : '-'}</td>
      <td>{item.account.group === 'pasivo' || item.account.group === 'patrimonio neto' ? item.total : '-'}</td>
      <td>{item.account.group === 'pérdida' ? item.total : '-'}</td>
      <td>{item.account.group === 'ganancia' ? item.total : '-'}</td>
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
          <Subtotal totals={totals} />
          <Results totals={totals} />
          <Total totals={totals} />
        </tbody>
      </Table>
    </Box>
  );
};

export default CreateBCSS;