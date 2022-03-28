import Heading from '../models/heading';

// Accounts
import {
  cuentasDeActivo as activo,
  cuentasDePasivo as pasivo,
  cuentasDePatrimonioNeto as patrimonioNeto,
} from './accounts';

// Activo

const cajaYBanco = new Heading({
  name: 'Caja y Banco',
  accounts: [
    activo.caja,
    activo.bancoCuentaCorriente,
    activo.valoresADepositar,
    activo.bancoCajaDeAhorro,
  ]
});

const creditosPorVentas = new Heading({
  name: 'Créditos por Ventas',
  accounts: [
    activo.deudoresPorVenta,
    activo.documentosACobrar,
    activo.tarjetaDeCreditoACobrar
  ]
});

const otrosCreditos = new Heading({
  name: 'Otros créditos',
  accounts: [
    activo.deudoresVarios,
    activo.socioCuentaAporte,
    activo.motivoACobrar
  ]
});

const bienesDeCambio = new Heading({
  name: 'Bienes de cambio',
  accounts: [
    activo.mercaderias
  ]
});

const bienesDeUso = new Heading({
  name: 'Bienes de Uso',
  accounts: [
    activo.mueblesYUtiles,
    activo.equipamientoDeComputacion,
    activo.herramientas,
    activo.maquinarias,
    activo.instalaciones,
    activo.rodados,
    activo.terrenos,
    activo.inmuebles
  ]
});

const bienesIntangibles = new Heading({
  name: 'Bienes Intangibles',
  accounts: [
    activo.llaveDeNegocio
  ]
});

const cargosDiferidos = new Heading({
  name: 'Cargos Diferidos',
  accounts: [
    activo.gastosDeOrganizacion
  ]
});

export const HeadingsActivo = [
  cajaYBanco,
  creditosPorVentas,
  otrosCreditos,
  bienesDeCambio,
  bienesDeUso,
  bienesIntangibles,
  cargosDiferidos
];

// Pasivo

// Pasivo Corriente

const deudasComerciales = new Heading({
  name: 'Deudas comerciales',
  accounts: [
    pasivo.proveedores,
    pasivo.acreedoresVarios,
    pasivo.documentosAPagar
  ]
});

const deudasFiscales = new Heading({
  name: 'Deudas fiscales',
  accounts: [
    pasivo.impuestosAPagar
  ]
});

const deudasSociales = new Heading({
  name: 'Deudas Sociales',
  accounts: [
    pasivo.sueldosAPagar
  ]
});

const otrasDeudas = new Heading({
  name: 'Otras deudas',
  accounts: [
    pasivo.motivoAPagar
  ]
});

// Pasivo No Corriente

const deudasFinancieras = new Heading({
  name: 'Deudas Financieras',
  accounts: [
    pasivo.prendasAPagar,
    pasivo.hipotecasAPagar,
  ]
});

export const HeadingsPasivo = [
  deudasComerciales,
  deudasFiscales,
  deudasSociales,
  otrasDeudas,
  deudasFinancieras
];

// Patrimonio Neto

const patrimonioNetoHeading = new Heading({
  name: 'Patrimonio Neto',
  accounts: [
    patrimonioNeto.capitalSocial,
    patrimonioNeto.resultadosDelEjercicio
  ]
});

export const HeadingsPatrimonioNeto = [
  patrimonioNetoHeading
];