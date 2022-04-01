export type AccountType = {
  name: string;
  value: string;
  heading: 'Caja y Banco' | 'Inversiones' | 'Créditos por Ventas' | 'Otros Créditos' | 'Bienes de Cambio' | 'Bienes de Uso' |
           'Bienes Intangibles' | 'Cargos Diferidos' | 'Deudas Comerciales' | 'Deudas Bancarias' | 'Deudas Fiscales' |
           'Deudas Previsionales/sociales' | 'Otras Deudas' |'Deudas Financieras' | 'Deudas Previsionales' | 'Pasivos Diferidos' | 'Patrimonio Neto' |
           'Gastos de Administración' | 'Gastos de Comercialización' | 'Gastos de Financiación' | 'Cuentas de Resultado Positivo'
  group: 'activo' | 'pasivo' | 'patrimonio neto' | 'pérdida' | 'ganancia';
  balance: 'deudor' | 'acreedor';
}

class Account {
  public name: string;
  public value: string;
  public heading: string;
  public group: string;
  public balance: string;

  constructor ({ name, value, heading, group, balance }: AccountType) {
    this.name = name;
    this.value = value;
    this.heading = heading;
    this.group = group;
    this.balance = balance;
  }
}

export default Account;
