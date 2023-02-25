import complements from './complements';

export class Db {
  private static instance: Db;

  get complements() {
    return complements;
  }

  public static getInstance() {
    if (!Db.instance) {
      Db.instance = new Db();
    }

    return Db.instance;
  }
}
