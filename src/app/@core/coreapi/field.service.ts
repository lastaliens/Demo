import { Injectable } from '@angular/core';
import { Observable, of as observableOf} from 'rxjs';
import { FieldService } from '../model/fields';
import { HttpApiUtil } from '../data/http-api-util';

@Injectable()
export class FieldsService extends FieldService {
  constructor ( private ipccApi: HttpApiUtil) {
  super(ipccApi);
	}

	deleteField(id: string): Observable<{}> {
  		return observableOf([true]);
	}

	getFields(): Observable<any> {
      	return this.ipccApi.get('fields');
	}
}
