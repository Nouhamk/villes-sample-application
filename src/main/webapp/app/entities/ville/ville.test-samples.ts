import { IVille, NewVille } from './ville.model';

export const sampleWithRequiredData: IVille = {
  id: 26771,
};

export const sampleWithPartialData: IVille = {
  id: 23079,
  nom: 'geez yum lest',
  nbHabitants: 11961,
};

export const sampleWithFullData: IVille = {
  id: 4721,
  nom: 'gah overproduce properly',
  codePostal: 'supposing',
  nbHabitants: 9191,
};

export const sampleWithNewData: NewVille = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
