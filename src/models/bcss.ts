import Item from './item';

function calculateSums(items: Item[]) {
  const debts = items.reduce((previousValue, item) => previousValue + item.debts, 0);
  const credits = items.reduce((previousValue, item) => previousValue + item.credits, 0);

  return { debts, credits };
}

function calculateGroup(items: Item[], group: string) {
  const groupAccounts = items.filter((item) => item.account.group === group);
  const groupTotal = groupAccounts.reduce((previousValue, item) => previousValue + item.total, 0);

  return groupTotal;
}

const calculateResult = (profit: number, lost: number) => Math.abs(profit - lost);

function calculateTotals(items: Item[]) {
  return {
    sums: calculateSums(items),
    activo: calculateGroup(items, 'activo'),
    pasivo: calculateGroup(items, 'pasivo'),
    patrimonioNeto: calculateGroup(items, 'patrimonioNeto'),
    perdida: calculateGroup(items, 'pérdida'),
    ganancia: calculateGroup(items, 'ganancia')
  };
}

type TotalsType = {
  sums: {
    debts: number,
    credits: number,
  }
  activo: number,
  pasivo: number,
  patrimonioNeto: number,
  perdida: number,
  ganancia: number
}

export default class BCSS {
  public items: Item[];
  public totals: TotalsType;
  public result: number;

  constructor(items: Item[]) {
    this.items = items;
    this.totals = calculateTotals(items);
    this.result = calculateResult(this.totals.ganancia, this.totals.perdida);
  }
}