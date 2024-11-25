import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 2671,
};

export const sampleWithPartialData: IRegion = {
  id: 29820,
  nom: 'upliftingly',
};

export const sampleWithFullData: IRegion = {
  id: 4770,
  nom: 'table',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
