import { Db } from '../db/db';
import { IComplementsRepository } from '../interfaces/complements.repository';

export class ComplementsRepository implements IComplementsRepository {
  private db: Db = Db.getInstance();

  getRandom() {
    const index = this.getRandomInt(0, this.db.complements.length - 1);

    return this.db.complements[index];
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
