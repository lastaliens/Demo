import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FieldService } from '../../../@core/model/fields';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './fields.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class FieldsComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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
        title: 'MOH',
        type: 'string',
      },
      agent_wrapup_time: {
        title: 'Agent warpup time',
        type: 'string',
      },
      max_queue_size: {
        title: 'Max queue size',
        type: 'string',
      },
      enter_when_empty: {
        title: 'Enter when empty',
        type: 'string',
      },
      conection_timeout: {
        title: 'Connection timeout',
        type: 'string',
      },
      agent_ring_timeout:{
        title: 'Agent ring timeout',
        type: 'string',
      },
      announce:{
        title: 'Announce',
        type: 'string',
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: FieldService) {
  }

  ngOnInit() {
    this.userService.getFields().subscribe((data) =>  {
      // console.log(data.data);
      this.source.load(data.data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
       this.userService.deleteField('123');
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
