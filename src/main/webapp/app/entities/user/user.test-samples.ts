import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 7103,
  login: 'g',
};

export const sampleWithPartialData: IUser = {
  id: 8011,
  login: 'QAJwPQ@dmNMuX\\GhK',
};

export const sampleWithFullData: IUser = {
  id: 30797,
  login: 'o',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
