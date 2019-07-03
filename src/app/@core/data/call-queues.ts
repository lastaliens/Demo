import {Observable } from 'rxjs';

export interface CallQueue {
  strategy: string;
}

export abstract class CallQueueService {
  constructor(http) {}
  abstract getCallQueues(): Observable<any>;
  abstract deleteCallQueue(id: string): Observable<{}>;
}
