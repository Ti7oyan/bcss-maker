// import Account from '../models/account';
import createAccount from '../models/account';

const dummyAccount = createAccount({
  name: 'Desarrollado por Ticiano Morvan',
  value: 'DUMMY_ACCOUNT',
  group: 'ganancia',
  heading: 'Cuentas de Resultado Positivo',
  balance: 'acreedor'
});

// Activo

// Activo Corriente

// Caja y Banco

const caja = createAccount({
  name: 'Caja',
  value: 'CAJA',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

const bancoCuentaCorriente = createAccount({
  name: 'Banco cuenta corriente',
  value: 'BANCO_CUENTA_CORRIENTE',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

const valoresADepositar = createAccount({
  name: 'Valores a depositar',
  value: 'VALORES_DEPOSITAR',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

const bancoCajaDeAhorro = createAccount({
  name: 'Banco caja de ahorro',
  value: 'BANCO_CAJA_AHORRO',
  heading: 'Caja y Banco',
  group: 'activo',
  balance: 'deudor'
});

// Créditos por Ventas

const deudoresPorVenta = createAccount({
  name: 'Deudores por venta',
  value: 'DEUDORES_POR_VENTA',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor'
});

const documentosACobrar = createAccount({
  name: 'Documentos a cobrar',
  value: 'DOCUMENTOS_COBRAR',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor'
});

const tarjetaDeCreditoACobrar = createAccount({
  name: 'Tarjeta de crédito a cobrar',
  value: 'TARJETA_CREDITO_COBRAR',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor'
});

// Otros créditos

const deudoresVarios = createAccount({
  name: 'Deudores varios',
  value: 'DEUDORES_VARIOS',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

const socioCuentaAporte = createAccount({
  name: 'Socio cuenta aporte',
  value: 'SOCIO_CUENTA_APORTE',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

const motivoACobrar = createAccount({
  name: 'Motivo a cobrar',
  value: 'MOTIVO_COBRAR',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

// Bienes de cambio

const mercaderias = createAccount({
  name: 'Mercaderías',
  value: 'MERCADERIAS',
  heading: 'Bienes de Cambio',
  group: 'activo',
  balance: 'deudor'
});

// Activo No Corriente

// Bienes de Uso

const mueblesYUtiles = createAccount({
  name: 'Muebles y útiles',
  value: 'MUEBLES_UTILES',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const equipamientoDeComputacion = createAccount({
  name: 'Equipamiento de computación',
  value: 'EQUIPAMIENTO_COMPUTACION',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const herramientas = createAccount({
  name: 'Herramientas',
  value: 'HERRAMIENTAS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const maquinarias = createAccount({
  name: 'Maquinarias',
  value: 'MAQUINARIAS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const instalaciones = createAccount({
  name: 'Instalaciones',
  value: 'INSTALACIONES',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const rodados = createAccount({
  name: 'Rodados',
  value: 'RODADOS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const inmuebles = createAccount({
  name: 'Inmuebles',
  value: 'INMUEBLES',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const terrenos = createAccount({
  name: 'Terrenos',
  value: 'TERRENOS',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

// Bienes Intangibles

const llaveDeNegocio = createAccount({
  name: 'Llave de negocio',
  value: 'LLAVE_NEGOCIO',
  heading: 'Bienes Intangibles',
  group: 'activo',
  balance: 'deudor'
});

// Cargos Diferidos

const gastosDeOrganizacion = createAccount({
  name: 'Gastos de organización',
  value: 'GASTOS_ORGANIZACION',
  heading: 'Cargos Diferidos',
  group: 'activo',
  balance: 'deudor'
});

// Pasivo

// Pasivo Corriente

// Deudas comerciales

const proveedores = createAccount({
  name: 'Proveedores',
  value: 'PROVEEDORES',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

const acreedoresVarios = createAccount({
  name: 'Acreedores varios',
  value: 'ACREEDORES_VARIOS',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

const documentosAPagar = createAccount({
  name: 'Documentos a pagar',
  value: 'DOCUMENTOS_PAGAR',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Deudas fiscales

const impuestosAPagar = createAccount({
  name: 'Impuestos a pagar',
  value: 'IMPUESTOS_PAGAR',
  heading: 'Deudas Fiscales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Deudas sociales

const sueldosAPagar = createAccount({
  name: 'Sueldos a pagar',
  value: 'SUELDOS_PAGAR',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Otras deudas

const motivoAPagar = createAccount({
  name: 'Motivo a pagar',
  value: 'MOTIVO_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor'
});

// Pasivo No Corriente

// Deudas financieras

const prendasAPagar = createAccount({
  name: 'Prendas a pagar',
  value: 'PRENDAS_PAGAR',
  heading: 'Deudas Financieras',
  group: 'pasivo',
  balance: 'acreedor'
});

const hipotecasAPagar = createAccount({
  name: 'Hipotecas a pagar',
  value: 'HIPOTECAS_PAGAR',
  heading: 'Deudas Financieras',
  group: 'pasivo',
  balance: 'acreedor'
});

// Patrimonio Neto

const capitalSocial = createAccount({
  name: 'Capital social',
  value: 'CAPITAL_SOCIAL',
  heading: 'Patrimonio Neto',
  group: 'patrimonio neto',
  balance: 'acreedor'
});

const resultadosDelEjercicio = createAccount({
  name: 'Resultados del ejercicio',
  value: 'RESULTADOS_EJERCICIO',
  heading: 'Patrimonio Neto',
  group: 'patrimonio neto',
  balance: 'acreedor'
});

// Pérdidas

// Gastos de Administración

const gastosGenerales = createAccount({
  name: 'Gastos generales',
  value: 'GASTOS_GENERALES',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const serviciosPagados = createAccount({
  name: 'Servicios pagados',
  value: 'SERVICIOS_PAGADOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const gastosDeMantenimiento = createAccount({
  name: 'Gastos de mantenimiento',
  value: 'GASTOS_MANTENIMIENTO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const gastosBancarios = createAccount({
  name: 'Gastos bancarios',
  value: 'GASTOS_BANCARIOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const selladoBancario = createAccount({
  name: 'Sellado bancario',
  value: 'SELLADO_BANCARIO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const comisionesBancarias = createAccount({
  name: 'Comisiones bancarias',
  value: 'COMISIONES_BANCARIAS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const sueldosYJornales = createAccount({
  name: 'Sueldos y jornales',
  value: 'SUELDOS_JORNALES',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const cargasSociales = createAccount({
  name: 'Cargas sociales',
  value: 'CARGAS_SOCIALES',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const art = createAccount({
  name: 'A.R.T.',
  value: 'ART',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const despido = createAccount({
  name: 'Despido',
  value: 'DESPIDO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const quebrantoPorDespido = createAccount({
  name: 'Quebranto por despido',
  value: 'QUEBRANTO_DESPIDO',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const alquileresPagados = createAccount({
  name: 'Alquileres pagados',
  value: 'ALQUILERES_PAGADOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

const segurosPagados = createAccount({
  name: 'Seguros pagados',
  value: 'SEGUROS_PAGADOS',
  heading: 'Gastos de Administración',
  group: 'pérdida',
  balance: 'deudor'
});

// Gastos de comercialización

const fletes = createAccount({
  name: 'Fletes',
  value: 'FLETES',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const impuestosPagados = createAccount({
  name: 'Impuestos pagados',
  value: 'IMPUESTOS_PAGADOS',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const descuentosPerdidos = createAccount({
  name: 'Descuentos perdidos',
  value: 'DESCUENTOS_PERDIDOS',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const gastosDePublicidad = createAccount({
  name: 'Gastos de publicidad',
  value: 'GASTOS_PUBLICIDAD',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const comisionesPagadas = createAccount({
  name: 'Comisiones pagadas',
  value: 'COMISIONES_PAGADAS',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const cuotaAutonoma = createAccount({
  name: 'Cuota autónoma',
  value: 'CUOTA_AUTONOMA',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

const cuotaMonotributo = createAccount({
  name: 'Cuota monotributo',
  value: 'CUOTA_MONOTRIBUTO',
  heading: 'Gastos de Comercialización',
  group: 'pérdida',
  balance: 'deudor'
});

// Gastos de financiación

const interesesPagados = createAccount({
  name: 'Intereses pagados',
  value: 'INTERESES_PAGADOS',
  heading: 'Gastos de Financiación',
  group: 'pérdida',
  balance: 'deudor'
});

const interesesBancarios = createAccount({
  name: 'Intereses bancarios',
  value: 'INTERESES_BANCARIOS',
  heading: 'Gastos de Financiación',
  group: 'pérdida',
  balance: 'deudor'
});

// Ganancia

const ventas = createAccount({
  name: 'Ventas',
  value: 'VENTAS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'acreedor'
});

const interesesGanados = createAccount({
  name: 'Intereses ganados',
  value: 'INTERESES_GANADOS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'acreedor'
});

const descuentosGanados = createAccount({
  name: 'Descuentos ganados',
  value: 'DESCUENTOS_GANADOS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'acreedor'
});

const alquileresCobrados = createAccount({
  name: 'Alquileres cobrados',
  value: 'ALQUILERES_COBRADOS',
  heading: 'Cuentas de Resultado Positivo',
  group: 'ganancia',
  balance: 'deudor'
});

const comisionesCobradas = createAccount({
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
  comisionesCobradas,

  dummyAccount
];