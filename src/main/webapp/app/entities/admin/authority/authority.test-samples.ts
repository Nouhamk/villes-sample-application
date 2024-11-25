import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b33a7cdc-d373-4398-a09f-d3300061601e',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a8d19281-b2e0-4d91-84e6-a21ecd25c7fe',
};

export const sampleWithFullData: IAuthority = {
  name: '1dd33c21-d2c5-45d0-9ecf-14f7a48df3d1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
