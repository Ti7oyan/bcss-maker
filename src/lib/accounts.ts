import createAccount from '../models/account';

export const dummyAccount = createAccount({
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

const fondoFijo = createAccount({
  name: 'Fondo fijo',
  value: 'FONDO_FIJO',
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

// Inversiones

const bancoPlazoFijo = createAccount({
  name: 'Banco plazo fijo',
  value: 'BANCO_PLAZO_FIJO',
  heading: 'Inversiones',
  group: 'activo',
  balance: 'deudor'
});

const acciones = createAccount({
  name: 'Acciones',
  value: 'ACCIONES',
  heading: 'Inversiones',
  group: 'activo',
  balance: 'deudor'
});

const monedaExtranjera = createAccount({
  name: 'Moneda extranjera',
  value: 'MONEDA_EXTRANJERA',
  heading: 'Inversiones',
  group: 'activo',
  balance: 'deudor'
});

const titulosPublicos = createAccount({
  name: 'Títulos públicos',
  value: 'TITULOS_PUBLICOS',
  heading: 'Inversiones',
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

const deudoresMorosos = createAccount({
  name: 'Deudores morosos',
  value: 'DEUDORES_MOROSOS',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor',
});

const deudoresEnGestionJudicial = createAccount({
  name: 'Deudores en gestión judicial',
  value: 'DEUDORES_GESTION_JUDICIAL',
  heading: 'Créditos por Ventas',
  group: 'activo',
  balance: 'deudor',
});

// Otros créditos

const deudoresVarios = createAccount({
  name: 'Deudores varios',
  value: 'DEUDORES_VARIOS',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

const deudoresHipotecarios = createAccount({
  name: 'Deudores hipotecarios',
  value: 'DEUDORES_HIPOTECARIOS',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
});

const deudoresPrendarios = createAccount({
  name: 'Deudores prendarios',
  value: 'DEUDORES_PRENDARIOS',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
});

const socioCuentaAporte = createAccount({
  name: 'Socio cuenta aporte',
  value: 'SOCIO_CUENTA_APORTE',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor'
});

const accionistas = createAccount({
  name: 'Accionistas',
  value: 'ACCIONISTAS',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
});

const saldoIvaDeudor = createAccount({
  name: 'Saldo IVA (D)',
  value: 'SALDO_IVA_DEUDOR',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
});

const comisionesACobrar = createAccount({
  name: 'Comisiones a cobrar',
  value: 'COMISIONES_COBRAR',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
});

const alquileresACobrar = createAccount({
  name: 'Alquileres a cobrar',
  value: 'ALQUILERES_COBRAR',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
});

const segurosACobrar = createAccount({
  name: 'Seguros a cobrar',
  value: 'SEGUROS_COBRAR',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
});

const interesesACobrar = createAccount({
  name: 'Intereses a cobrar',
  value: 'INTERESES_COBRAR',
  heading: 'Otros Créditos',
  group: 'activo',
  balance: 'deudor',
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

const rodadoPrendado = createAccount({
  name: 'Rodado prendado',
  value: 'RODADO_PRENDADO',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const maquinariaPrendada = createAccount({
  name: 'Maquinaria prendada',
  value: 'MAQUINARIA_PRENDADA',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const terrenoHipotecado = createAccount({
  name: 'Terreno hipotecado',
  value: 'TERRENO_HIPOTECADO',
  heading: 'Bienes de Uso',
  group: 'activo',
  balance: 'deudor'
});

const inmuebleHipotecado = createAccount({
  name: 'Inmueble hipotecado',
  value: 'INMUEBLE_HIPOTECADO',
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

const patenteDeInvencion = createAccount({
  name: 'Patente de invención',
  value: 'PATENTE_INVENCION',
  heading: 'Bienes Intangibles',
  group: 'activo',
  balance: 'deudor'
});

const franquicias = createAccount({
  name: 'Franquicias',
  value: 'FRANQUICIAS',
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

const tarjetaDeCreditoAPagar = createAccount({
  name: 'Tarjeta de crédito a pagar',
  value: 'TARJETA_CREDITO_PAGAR',
  heading: 'Deudas Comerciales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Deudas bancarias

const adelantoEnCuentaCorriente = createAccount({
  name: 'Adelanto en Cuenta Corriente',
  value: 'ADELANTO_CUENTA_CORRIENTE',
  heading: 'Deudas Bancarias',
  group: 'pasivo',
  balance: 'acreedor'
});

const obligacionesAPagarBancarias = createAccount({
  name: 'Obligaciones a pagar bancarias',
  value: 'OBLIGACIONES_PAGAR_BANCARIAS',
  heading: 'Deudas Bancarias',
  group: 'pasivo',
  balance: 'acreedor'
});

// Deudas fiscales

const saldoIvaAcreedor = createAccount({
  name: 'Saldo IVA (A)',
  value: 'SALDO_IVA_ACREEDOR',
  heading: 'Deudas Fiscales',
  group: 'pasivo',
  balance: 'acreedor'
});

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

const regimenNacionalDeSeguridadSocial = createAccount({
  name: 'Régimen Nacional de Seguridad Social',
  value: 'REGIMEN_NACIONAL_SEGURIDAD_SOCIAL',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

const regimenNacionalDeObraSocial = createAccount({
  name: 'Régimen Nacional de Obra Social',
  value: 'REGIMEN_NACIONAL_OBRA_SOCIAL',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

const cuotaSindical = createAccount({
  name: 'Cuota sindical',
  value: 'CUOTA_SINDICAL',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

const artAPagar = createAccount({
  name: 'A.R.T. a pagar',
  value: 'ART_PAGAR',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

const socioCuentaParticular = createAccount({
  name: 'Socio cuenta particular',
  value: 'SOCIO_CUENTA_PARTICULAR',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

const honorariosAPagar = createAccount({
  name: 'Honorarios a pagar',
  value: 'HONORARIOS_PAGAR',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

const dividendosAPagar = createAccount({
  name: 'Dividendos a pagar',
  value: 'DIVIDENDOS_PAGAR',
  heading: 'Deudas Previsionales/sociales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Otras deudas

const serviciosAPagar = createAccount({
  name: 'Servicios a pagar',
  value: 'SERVICIOS_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor'
});

const comisionesAPagar = createAccount({
  name: 'Comisiones a pagar',
  value: 'COMISIONES_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor',
});

const alquileresAPagar = createAccount({
  name: 'Alquileres a pagar',
  value: 'ALQUILERES_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor',
});

const segurosAPagar = createAccount({
  name: 'Seguros a pagar',
  value: 'SEGUROS_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor',
});

const interesesAPagar = createAccount({
  name: 'Intereses a pagar',
  value: 'INTERESES_PAGAR',
  heading: 'Otras Deudas',
  group: 'pasivo',
  balance: 'acreedor',
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

// Deudas previsionales

const previsionParaDespido = createAccount({
  name: 'Previsión para despido',
  value: 'PREVISION_DESPIDO',
  heading: 'Deudas Previsionales',
  group: 'pasivo',
  balance: 'acreedor'
});

// Pasivos diferidos

const comisionesCobradasPorAdelantado = createAccount({
  name: 'Comisiones cobradas por adelantado',
  value: 'COMISIONES_COBRADAS_ADELANTADO',
  heading: 'Pasivos Diferidos',
  group: 'pasivo',
  balance: 'acreedor',
});

const alquileresCobradosPorAdelantado = createAccount({
  name: 'Alquileres cobrados por adelantado',
  value: 'ALQUILERES_COBRADOS_ADELANTADO',
  heading: 'Pasivos Diferidos',
  group: 'pasivo',
  balance: 'acreedor',
});

const segurosCobradosPorAdelantado = createAccount({
  name: 'Seguros cobrados por adelantado',
  value: 'SEGUROS_COBRADOS_ADELANTADO',
  heading: 'Pasivos Diferidos',
  group: 'pasivo',
  balance: 'acreedor',
});

const interesesCobradosPorAdelantado = createAccount({
  name: 'Intereses cobrados por adelantado',
  value: 'INTERESES_COBRADOS_ADELANTADO',
  heading: 'Pasivos Diferidos',
  group: 'pasivo',
  balance: 'acreedor',
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
  fondoFijo,
  bancoCuentaCorriente,
  valoresADepositar,
  bancoCajaDeAhorro,
  bancoPlazoFijo,
  acciones,
  monedaExtranjera,
  titulosPublicos,
  deudoresPorVenta,
  documentosACobrar,
  tarjetaDeCreditoACobrar,
  deudoresMorosos,
  deudoresEnGestionJudicial,
  deudoresVarios,
  deudoresHipotecarios,
  deudoresPrendarios,
  socioCuentaAporte,
  accionistas,
  saldoIvaDeudor,
  comisionesACobrar,
  alquileresACobrar,
  segurosACobrar,
  interesesACobrar,
  mercaderias,
  mueblesYUtiles,
  equipamientoDeComputacion,
  herramientas,
  maquinarias,
  instalaciones,
  rodados,
  terrenos,
  inmuebles,
  rodadoPrendado,
  maquinariaPrendada,
  inmuebleHipotecado,
  terrenoHipotecado,
  llaveDeNegocio,
  patenteDeInvencion,
  franquicias,
  gastosDeOrganizacion,

  // Pasivo
  proveedores,
  acreedoresVarios,
  documentosAPagar,
  tarjetaDeCreditoAPagar,
  adelantoEnCuentaCorriente,
  obligacionesAPagarBancarias,
  saldoIvaAcreedor,
  impuestosAPagar,
  sueldosAPagar,
  regimenNacionalDeSeguridadSocial,
  regimenNacionalDeObraSocial,
  cuotaSindical,
  artAPagar,
  socioCuentaParticular,
  honorariosAPagar,
  dividendosAPagar,
  comisionesAPagar,
  segurosAPagar,
  serviciosAPagar,
  interesesAPagar,
  alquileresAPagar,
  prendasAPagar,
  hipotecasAPagar,
  previsionParaDespido,
  comisionesCobradasPorAdelantado,
  alquileresCobradosPorAdelantado,
  segurosCobradosPorAdelantado,
  interesesCobradosPorAdelantado,

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