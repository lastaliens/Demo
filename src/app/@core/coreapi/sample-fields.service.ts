import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SampleRecentFields, SampleFieldData } from '../data/sample-fields';

@Injectable()
export class SampleFieldService extends SampleFieldData {

  private time: Date = new Date;

  private fields = {
    emnvn: { name: 'Em Nguyen', picture: 'assets/images/alan.png' },
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  
  private recentFields: SampleRecentFields[]  = [
   
  ];

  getFields(): Observable<any> {
    return observableOf(this.fields);
  }
  getRecentFields(): Observable<SampleRecentFields[]> {
    return observableOf(this.recentFields);
  }
}
