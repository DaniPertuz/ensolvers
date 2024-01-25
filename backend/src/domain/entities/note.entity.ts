import { INote, NoteStatus } from '../../interfaces';

export class NoteEntity {
  public id: number;
  public title: string;
  public body: string;
  public category: number;
  public status: NoteStatus;

  constructor(options: INote) {
    const { id, title, body, category, status } = options;
    this.id = id;
    this.title = title;
    this.body = body;
    this.category = category;
    this.status = status;
  }

  static fromObject = (object: { [key: string]: any; }): NoteEntity => {
    const { id, title, body, category, status } = object;
    const note = new NoteEntity({ id, title, body, category, status });
    return note;
  };
}