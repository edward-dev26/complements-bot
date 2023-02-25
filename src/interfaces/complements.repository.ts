import { IComplement } from './complement.type';

export interface IComplementsRepository {
  getRandom(): IComplement;
}
