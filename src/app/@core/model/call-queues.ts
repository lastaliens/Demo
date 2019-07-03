import {Observable } from 'rxjs';

export interface CallQueueModel {
  name: string;
	strategy: string;
	moh: string;
	agent_wrapup_time: string;
	max_queue_size: string;
	enter_when_empty: string;
	connection_timeout: string;
	agent_ring_timeout: string;
	announce: string;
}

export abstract class CallQueueService {
  constructor(http) {}
  abstract addCallQueue(data: any): Observable<any>;
  abstract getCallQueues(): Observable<any>;
  abstract updateCallQueue(id: string, data: any): Observable<any>;
  abstract deleteCallQueue(id: string): Observable<any>;
  abstract getCallAvailable(): Observable<any>;
}