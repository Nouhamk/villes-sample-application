import dayjs from 'dayjs/esm';

import { IJoueur, NewJoueur } from './joueur.model';

export const sampleWithRequiredData: IJoueur = {
  id: 8296,
};

export const sampleWithPartialData: IJoueur = {
  id: 6427,
  pseudo: 'off institutionalize ah',
  motDePasse: 'cannibalise bruised',
  dateInscription: dayjs('2024-11-24T21:28'),
  estAdministrateur: true,
};

export const sampleWithFullData: IJoueur = {
  id: 26513,
  pseudo: 'however',
  motDePasse: 'drat hence pertinent',
  dateInscription: dayjs('2024-11-24T17:37'),
  estAdministrateur: true,
};

export const sampleWithNewData: NewJoueur = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
