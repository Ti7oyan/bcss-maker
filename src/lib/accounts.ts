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
  name: 'Banco cuenta corriente',
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
  name: 'Banco caja de ahorro',
  value: 'BANCO_CAJA_AHORRO',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

// Créditos por Ventas

const deudoresPorVenta = new Account({
  name: 'Deudores por venta',
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
  name: 'Tarjeta de crédito a cobrar',
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
  name: 'Socio cuenta aporte',
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
  name: 'Muebles y útiles',
  value: 'MUEBLES_UTILES',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const equipamientoDeComputacion = new Account({
  name: 'Equipamiento de computación',
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
  name: 'Llave de negocio',
  value: 'LLAVE_NEGOCIO',
  heading: 'Bienes Intangibles',
  group: 'activo',
  balance: 'deudor'
});

// Cargos Diferidos

const gastosDeOrganizacion = new Account({
  name: 'Gastos de organización',
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
  name: 'Acreedores varios',
  value: 'ACREEDORES_VARIOS',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

const documentosAPagar = new Account({
  name: 'Documentos a pagar',
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
  name: 'Motivo a pagar',
  value: 'MOTIVO_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor'
});

// Pasivo No Corriente

// Deudas financieras

const prendasAPagar = new Account({
  name: 'Prendas a pagar',
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
  name: 'Capital social',
  value: 'CAPITAL_SOCIAL',
  heading: 'Patrimonio Neto',
  group: 'patrimonio neto',
  balance: 'acreedor'
});

const resultadosDelEjercicio = new Account({
  name: 'Resultados del ejercicio',
  value: 'RESULTADOS_EJERCICIO',
  heading: 'Patrimonio Neto',
  group: 'patrimonio neto',
  balance: 'acreedor'
});

// Pérdidas

// Gastos de Administración

const gastosGenerales = new Account({
  name: 'Gastos generales',
  value: 'GASTOS_GENERALES',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const serviciosPagados = new Account({
  name: 'Servicios pagados',
  value: 'SERVICIOS_PAGADOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const gastosDeMantenimiento = new Account({
  name: 'Gastos de mantenimiento',
  value: 'GASTOS_MANTENIMIENTO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const gastosBancarios = new Account({
  name: 'Gastos bancarios',
  value: 'GASTOS_BANCARIOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const selladoBancario = new Account({
  name: 'Sellado bancario',
  value: 'SELLADO_BANCARIO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const comisionesBancarias = new Account({
  name: 'Comisiones bancarias',
  value: 'COMISIONES_BANCARIAS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const sueldosYJornales = new Account({
  name: 'Sueldos y jornales',
  value: 'SUELDOS_JORNALES',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const cargasSociales = new Account({
  name: 'Cargas sociales',
  value: 'CARGAS_SOCIALES',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const art = new Account({
  name: 'A.R.T.',
  value: 'ART',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const despido = new Account({
  name: 'Despido',
  value: 'DESPIDO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const quebrantoPorDespido = new Account({
  name: 'Quebranto por despido',
  value: 'QUEBRANTO_DESPIDO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const alquileresPagados = new Account({
  name: 'Alquileres pagados',
  value: 'ALQUILERES_PAGADOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const segurosPagados = new Account({
  name: 'Seguros pagados',
  value: 'SEGUROS_PAGADOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

// Gastos de comercialización

const fletes = new Account({
  name: 'Fletes',
  value: 'FLETES',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const impuestosPagados = new Account({
  name: 'Impuestos pagados',
  value: 'IMPUESTOS_PAGADOS',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const descuentosPerdidos = new Account({
  name: 'Descuentos perdidos',
  value: 'DESCUENTOS_PERDIDOS',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const gastosDePublicidad = new Account({
  name: 'Gastos de publicidad',
  value: 'GASTOS_PUBLICIDAD',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const comisionesPagadas = new Account({
  name: 'Comisiones pagadas',
  value: 'COMISIONES_PAGADAS',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const cuotaAutonoma = new Account({
  name: 'Cuota autónoma',
  value: 'CUOTA_AUTONOMA',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const cuotaMonotributo = new Account({
  name: 'Cuota monotributo',
  value: 'CUOTA_MONOTRIBUTO',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

// Gastos de financiación

const interesesPagados = new Account({
  name: 'Intereses pagados',
  value: 'INTERESES_PAGADOS',
  heading: 'Gastos de Financiación',
  group: 'pérdida',
  balance: 'deudor'
});

const interesesBancarios = new Account({
  name: 'Intereses bancarios',
  value: 'INTERESES_BANCARIOS',
  heading: 'Gastos de Financiación',
  group: 'pérdida',
  balance: 'deudor'
});

// Ganancia

const ventas = new Account({
  name: 'Ventas',
  value: 'VENTAS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'acreedor'
});

const interesesGanados = new Account({
  name: 'Intereses ganados',
  value: 'INTERESES_GANADOS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'acreedor'
});

const descuentosGanados = new Account({
  name: 'Descuentos ganados',
  value: 'DESCUENTOS_GANADOS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'acreedor'
});

const alquileresCobrados = new Account({
  name: 'Alquileres cobrados',
  value: 'ALQUILERES_COBRADOS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'deudor'
});

const comisionesCobradas = new Account({
  name: 'Comisiones cobradas',
  value: 'COMISIONES_COBRADAS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'deudor'
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
  resultadosDelEjercicio,

  // Pérdida
  gastosGenerales,
  serviciosPagados,
  gastosDeMantenimiento,
  gastosBancarios,
  selladoBancario,
  comisionesBancarias,
  sueldosYJornales,
  cargasSociales,
  art,
  despido,
  quebrantoPorDespido,
  alquileresPagados,
  segurosPagados,
  fletes,
  impuestosPagados,
  descuentosPerdidos,
  gastosDePublicidad,
  comisionesPagadas,
  cuotaAutonoma,
  cuotaMonotributo,
  interesesPagados,
  interesesBancarios,

  // Ganancia
  ventas,
  interesesGanados,
  descuentosGanados,
  alquileresCobrados,
  comisionesCobradas
];