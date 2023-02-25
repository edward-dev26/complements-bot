import { IComplement } from '../interfaces/complement.type';

export class ComplementView {
  static getView(complement: IComplement) {
    return `❤️❤️❤️
    
Любимая Инночка,
    
${complement.title} 

❤️❤️❤️`;
  }
}
