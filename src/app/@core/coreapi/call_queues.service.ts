import { Injectable } from '@angular/core';
import { Observable, of as observableOf} from 'rxjs';
import { CallQueueService } from '../model/call-queues';
import { HttpApiUtil } from '../model/http-api-util';
import { Http } from '@angular/http';


@Injectable()
export class CallQueuesService extends CallQueueService{

	endpoint = 'call_queues';
	constructor ( private ipccApi: HttpApiUtil/*, private http : Http*/) {
  		super(ipccApi);
  	}

	addCallQueue(data: any): Observable<any> {
		return this.ipccApi.put(this.endpoint, data);
	}

	deleteCallQueue(id: string): Observable<{}> {
		return observableOf([true]);
	}

	getCallQueues(): Observable<{}>{
		return this.ipccApi.get(this.endpoint);
	}
	updateCallQueue(id: string, data: any): Observable<any> {
		return this.ipccApi.post(this.endpoint, id, data);
	}
	getCallAvailable():Observable<{}>{
		return this.ipccApi.get('call_queues/available');
	}
}