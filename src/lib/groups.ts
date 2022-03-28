import Group from '../models/group';

// Headings
import { HeadingsActivo, HeadingsPasivo, HeadingsPatrimonioNeto } from './headings';

const activo = new Group({
  name: 'Activo',
  headings: HeadingsActivo
});

const pasivo = new Group({
  name: 'Pasivo',
  headings: HeadingsPasivo
});

const patrimonioNeto = new Group({
  name: 'Patrimonio Neto',
  headings: HeadingsPatrimonioNeto
});

const Groups = [
  activo,
  pasivo,
  patrimonioNeto
];

export default Groups;