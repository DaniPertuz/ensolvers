import { Router } from 'express';

export enum NoteStatus {
  Active = 'active',
  Archived = 'archived'
}

export interface INote {
  id: number;
  title: string;
  body: string;
  category: number;
  status: NoteStatus;
}

export interface ICategory {
  name: string;
}

export interface ServerOptions {
  port: number;
  public_path?: string;
  routes: Router;
}