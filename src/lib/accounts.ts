import Account from '../models/account';

// Activo

// Activo Corriente

// Caja y Banco

const caja = new Account({
  name: 'Caja',
  value: 'CAJA',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

const bancoCuentaCorriente = new Account({
  name: 'Banco Cuenta Corriente',
  value: 'BANCO_CUENTA_CORRIENTE',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

const valoresADepositar = new Account({
  name: 'Valores a depositar',
  value: 'VALORES_DEPOSITAR',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

const bancoCajaDeAhorro = new Account({
  name: 'Banco Caja de Ahorro',
  value: 'BANCO_CAJA_AHORRO',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

// Créditos por Ventas

const deudoresPorVenta = new Account({
  name: 'Deudores por Venta',
  value: 'DEUDORES_POR_VENTA',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor'
});

const documentosACobrar = new Account({
  name: 'Documentos a cobrar',
  value: 'DOCUMENTOS_COBRAR',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor'
});

const tarjetaDeCreditoACobrar = new Account({
  name: 'Tarjeta de Crédito a cobrar',
  value: 'TARJETA_CREDITO_COBRAR',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor'
});

// Otros créditos

const deudoresVarios = new Account({
  name: 'Deudores varios',
  value: 'DEUDORES_VARIOS',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

const socioCuentaAporte = new Account({
  name: 'Socio Cuenta Aporte',
  value: 'SOCIO_CUENTA_APORTE',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

const motivoACobrar = new Account({
  name: 'Motivo a cobrar',
  value: 'MOTIVO_COBRAR',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

// Bienes de cambio

const mercaderias = new Account({
  name: 'Mercaderías',
  value: 'MERCADERIAS',
  heading: 'Bienes de Cambio',
  group: 'activo',
  balance: 'deudor'
});

// Activo No Corriente

// Bienes de Uso

const mueblesYUtiles = new Account({
  name: 'Muebles y Útiles',
  value: 'MUEBLES_UTILES',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const equipamientoDeComputacion = new Account({
  name: 'Equipamiento De Computación',
  value: 'EQUIPAMIENTO_COMPUTACION',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const herramientas = new Account({
  name: 'Herramientas',
  value: 'HERRAMIENTAS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const maquinarias = new Account({
  name: 'Maquinarias',
  value: 'MAQUINARIAS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const instalaciones = new Account({
  name: 'Instalaciones',
  value: 'INSTALACIONES',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const rodados = new Account({
  name: 'Rodados',
  value: 'RODADOS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const inmuebles = new Account({
  name: 'Inmuebles',
  value: 'INMUEBLES',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const terrenos = new Account({
  name: 'Terrenos',
  value: 'TERRENOS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

// Bienes Intangibles

const llaveDeNegocio = new Account({
  name: 'Llave de Negocio',
  value: 'LLAVE_NEGOCIO',
  heading: 'Bienes Intangibles',
  group: 'activo',
  balance: 'deudor'
});

// Cargos Diferidos

const gastosDeOrganizacion = new Account({
  name: 'Gastos de Organización',
  value: 'GASTOS_ORGANIZACION',
  heading: 'Cargos Diferidos',
  group: 'activo',
  balance: 'deudor'
});

// Pasivo

// Pasivo Corriente

// Deudas comerciales

const proveedores = new Account({
  name: 'Proveedores',
  value: 'PROVEEDORES',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

const acreedoresVarios = new Account({
  name: 'Acreedores Varios',
  value: 'ACREEDORES_VARIOS',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

const documentosAPagar = new Account({
  name: 'Documentos a Pagar',
  value: 'DOCUMENTOS_PAGAR',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Deudas fiscales

const impuestosAPagar = new Account({
  name: 'Impuestos a pagar',
  value: 'IMPUESTOS_PAGAR',
  heading: 'Deudas Fiscales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Deudas sociales

const sueldosAPagar = new Account({
  name: 'Sueldos a pagar',
  value: 'SUELDOS_PAGAR',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Otras deudas

const motivoAPagar = new Account({
  name: 'Motivo a Pagar',
  value: 'MOTIVO_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor'
});

// Pasivo No Corriente

// Deudas financieras

const prendasAPagar = new Account({
  name: 'Prendas a Pagar',
  value: 'PRENDAS_PAGAR',
  heading: 'Deudas Financieras',
  group: 'pasivo',
  balance: 'acreedor'
});

const hipotecasAPagar = new Account({
  name: 'Hipotecas a pagar',
  value: 'HIPOTECAS_PAGAR',
  heading: 'Deudas Financieras',
  group: 'pasivo',
  balance: 'acreedor'
});

// Patrimonio Neto

const capitalSocial = new Account({
  name: 'Capital Social',
  value: 'CAPITAL_SOCIAL',
  heading: 'Patrimonio Neto',
  group: 'patrimonio neto',
  balance: 'acreedor'
});

const resultadosDelEjercicio = new Account({
  name: 'Resultados del Ejercicio',
  value: 'RESULTADOS_EJERCICIO',
  heading: 'Patrimonio Neto',
  group: 'patrimonio neto',
  balance: 'acreedor'
});

export const cuentasContables = [
  // Activo
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
  gastosDeOrganizacion,

  // Pasivo
  proveedores,
  acreedoresVarios,
  documentosAPagar,
  impuestosAPagar,
  sueldosAPagar,
  motivoAPagar,
  prendasAPagar,
  hipotecasAPagar,

  // Patrimonio Neto
  capitalSocial,
  resultadosDelEjercicio
];