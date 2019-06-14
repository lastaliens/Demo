import {Observable } from 'rxjs';

export interface FieldModel {
  field_id: number;
  field_name: string;
  field_data: string;
}

export abstract class FieldService {
  constructor(http) {}
  abstract getFields(): Observable<any>;
  abstract deleteField(id: string): Observable<{}>;
}
