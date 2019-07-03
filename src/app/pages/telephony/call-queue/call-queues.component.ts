import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { CallQueueService } from '../../../@core/model/call-queues';
import { CallQueueFormComponent } from './call-queue-form.component';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './call-queues.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CallQueuesComponent implements OnInit {

  settings = {
     add: {
      addButtonContent: '<i class="nb-plus" (click)="openWindowForm()"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      strategy: {
        title: 'Strategy',
        type: 'string',
      },
      moh: {
        title: 'Moh',
        type: 'string',
      },
      agent_wrapup_time: {
        title: 'Agent_wrapup_time',
        type: 'string',
      },
      max_queue_size: {
        title: 'Max_queue_size',
        type: 'string',
      },
      enter_when_empty: {
        title: 'Enter_when_empty',
        type: 'string',
      },
      connection_timeout: {
        title: 'Connection_timeout',
        type: 'string',
      },
      agent_ring_timeout:{
        title: 'Agent_ring_timeout',
        type: 'string',
      },
      announce:{
        title: 'announce',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private callQueueService: CallQueueService, private windowService: NbWindowService) {
  }

  ngOnInit() {
    this.callQueueService.getCallQueues().subscribe((data) =>  {
      this.source.load(data.data);
    });
  }

   onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
       event.newData['role'] = event.newData['roles'];
       event.newData['roles'] = [event.newData['roles']];
       event.newData['password'] = '12345678';
      this.callQueueService.addCallQueue(event.newData).subscribe((data) =>  {
        event.confirm.resolve(event.newData);
        alert('Added success');
      });
    } else {
      event.confirm.reject();
    }
}

 onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {

      this.callQueueService.updateCallQueue(event.data.user_id, event.newData).subscribe((data) =>  {
        alert('update successfully: ' + data.status);
        // console.log(data);
        event.confirm.resolve(event.newData);
        alert('Added successfully');
      });
    } else {
      event.confirm.reject();
    }
}

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete username: ' + event.data.username)) {
       this.callQueueService.deleteCallQueue(event.data.user_id).subscribe((data) =>  {
        event.confirm.resolve();
    });
    } else {
      event.confirm.reject();
    }
  }

  openWindowForm() {
    this.windowService.open(CallQueueFormComponent, { title: `Add new call queue` });
  }
}