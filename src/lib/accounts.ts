import Account from '../models/account';

// Activo

// Activo Corriente

// Caja y Banco

const caja = new Account({
  name: 'Caja',
  balance: 'deudor'
});

const bancoCuentaCorriente = new Account({
  name: 'Banco Cuenta Corriente',
  balance: 'deudor'
});

const valoresADepositar = new Account({
  name: 'Valores a depositar',
  balance: 'deudor'
});

const bancoCajaDeAhorro = new Account({
  name: 'Banco Caja de Ahorro',
  balance: 'deudor'
});

// Créditos por Ventas

const deudoresPorVenta = new Account({
  name: 'Deudores por Venta',
  balance: 'deudor'
});

const documentosACobrar = new Account({
  name: 'Documentos a cobrar',
  balance: 'deudor'
});

const tarjetaDeCreditoACobrar = new Account({
  name: 'Tarjeta de Crédito a cobrar',
  balance: 'deudor'
});

// Otros créditos

const deudoresVarios = new Account({
  name: 'Deudores varios',
  balance: 'deudor'
});

const socioCuentaAporte = new Account({
  name: 'Socio Cuenta Aporte',
  balance: 'deudor'
});

const motivoACobrar = new Account({
  name: 'Motivo a cobrar',
  balance: 'deudor'
});

// Bienes de cambio

const mercaderias = new Account({
  name: 'Mercaderías',
  balance: 'deudor'
});

// Activo No Corriente

const mueblesYUtiles = new Account({
  name: 'Muebles y Útiles',
  balance: 'deudor'
});

const equipamientoDeComputacion = new Account({
  name: 'Equipamiento De Computación',
  balance: 'deudor'
});

const herramientas = new Account({
  name: 'Herramientas',
  balance: 'deudor'
});

const maquinarias = new Account({
  name: 'Maquinarias',
  balance: 'deudor'
});

const instalaciones = new Account({
  name: 'Instalaciones',
  balance: 'deudor'
});

const rodados = new Account({
  name: 'Rodados',
  balance: 'deudor'
});

const inmuebles = new Account({
  name: 'Inmuebles',
  balance: 'deudor'
});

const terrenos = new Account({
  name: 'Terrenos',
  balance: 'deudor'
});

// Bienes Intangibles

const llaveDeNegocio = new Account({
  name: 'Llave de Negocio',
  balance: 'deudor'
});

// Cargos Diferidos

const gastosDeOrganizacion = new Account({
  name: 'Gastos de Organización',
  balance: 'deudor'
});

export const cuentasDeActivo = {
  caja,
  bancoCuentaCorriente,
  valoresADepositar,
  bancoCajaDeAhorro,
  deudoresPorVenta,
  documentosACobrar,
  tarjetaDeCreditoACobrar,
  deudoresVarios,
  socioCuentaAporte,
  motivoACobrar,
  mercaderias,
  mueblesYUtiles,
  equipamientoDeComputacion,
  herramientas,
  maquinarias,
  instalaciones,
  rodados,
  terrenos,
  inmuebles,
  llaveDeNegocio,
  gastosDeOrganizacion
};

// Pasivo

// Pasivo Corriente

// Deudas comerciales

const proveedores = new Account({
  name: 'Proveedores',
  balance: 'acreedor'
});

const acreedoresVarios = new Account({
  name: 'Acreedores Varios',
  balance: 'acreedor'
});

const documentosAPagar = new Account({
  name: 'Documentos a Pagar',
  balance: 'acreedor'
});

// Deudas fiscales

const impuestosAPagar = new Account({
  name: 'Impuestos a pagar',
  balance: 'acreedor'
});

// Deudas sociales

const sueldosAPagar = new Account({
  name: 'Sueldos a pagar',
  balance: 'acreedor'
});

// Otras deudas

const motivoAPagar = new Account({
  name: 'Motivo a Pagar',
  balance: 'acreedor'
});

// Pasivo No Corriente

// Deudas financieras

const prendasAPagar = new Account({
  name: 'Prendas a Pagar',
  balance: 'acreedor'
});

const hipotecasAPagar = new Account({
  name: 'Hipotecas a pagar',
  balance: 'acreedor'
});

export const cuentasDePasivo = {
  proveedores,
  acreedoresVarios,
  documentosAPagar,
  impuestosAPagar,
  sueldosAPagar,
  motivoAPagar,
  prendasAPagar,
  hipotecasAPagar
};

// Patrimonio Neto

const capitalSocial = new Account({
  name: 'Capital Social',
  balance: 'acreedor'
});

const resultadosDelEjercicio = new Account({
  name: 'Resultados del Ejercicio',
  balance: 'acreedor'
});

export const cuentasDePatrimonioNeto = {
  capitalSocial,
  resultadosDelEjercicio
};