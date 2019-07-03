import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { CallQueueService } from '../../../@core/model/call-queues';

@Component({
  templateUrl: 'call-queue-form.component.html',
  styleUrls: ['call-queue-form.component.scss'],
})
export class CallQueueFormComponent {
  callqueue = {
    name: '',
    strategy: 'round_robin',
    agent_wrapup_time: '30',
    max_queue_size : '0',
    enter_when_empty : 'true',
    connection_timeout: '3600',
    agent_ring_timeout: '15',
    announce: '',
  };
  constructor(private callQueueService: CallQueueService, public windowRef: NbWindowRef) {}


  onSubmit() { 
    this.callQueueService.addCallQueue(this.callqueue).subscribe((data) =>  {
        alert('Call-queue addded successfully');
        this.windowRef.close();
        // this.windowRef.close(name);
      });
   // alert(this.user.email)
  }


  close() {
    this.windowRef.close();
  }
}

