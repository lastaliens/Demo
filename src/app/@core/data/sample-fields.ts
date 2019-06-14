import { Observable } from 'rxjs';

export interface SampleField {
  name: string;
  desctription: string;
}

export interface SampleRecentFields {
  time: number;
}

export abstract class SampleFieldData {
  abstract getFields(): Observable<SampleField[]>;
  abstract getRecentFields(): Observable<SampleRecentFields[]>;
}
