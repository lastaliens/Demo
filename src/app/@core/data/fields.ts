import {Observable } from 'rxjs';

export interface Field {
  name: string;
  description: string;
}

export abstract class FieldService {
  constructor(http) {}
  abstract getFields(): Observable<any>;
  abstract deleteField(id: string): Observable<{}>;
}
