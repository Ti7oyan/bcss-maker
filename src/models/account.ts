type AccountType = {
  name: string;
  value: string;
  heading: 'Caja y Banco' | 'Inversiones' | 'Créditos por Ventas' | 'Otros Créditos' | 'Bienes de Cambio' | 'Bienes de Uso' |
           'Bienes Intangibles' | 'Cargos Diferidos' | 'Deudas Comerciales' | 'Deudas Bancarias' | 'Deudas Fiscales' |
           'Deudas Previsionales/sociales' | 'Otras Deudas' |'Deudas Financieras' | 'Deudas Previsionales' | 'Pasivos Diferidos' | 'Patrimonio Neto' |
           'Gastos de Administración' | 'Gastos de Comercialización' | 'Gastos de Financiación' | 'Cuentas de Resultado Positivo'
  group: 'activo' | 'pasivo' | 'patrimonio neto' | 'pérdida' | 'ganancia';
  balance: 'deudor' | 'acreedor';
}

export class Account {
  private name: string;
  private value: string;
  private heading: string;
  private group: string;
  private balance: string;

  constructor ({ name, value, heading, group, balance }: AccountType) {
    this.name = name;
    this.value = value;
    this.heading = heading;
    this.group = group;
    this.balance = balance;
  }

  public getName() { return this.name; }
  public getValue() { return this.value; }
  public getHeading() { return this.heading; }
  public getGroup() { return this.group; }
  public getBalance() { return this.balance; }
}

const createAccount = ({ name, value, heading, group, balance }: AccountType) => {
  return new Account ({
    name: name,
    value: value,
    heading: heading,
    group: group,
    balance: balance
  });
};

export default createAccount;
