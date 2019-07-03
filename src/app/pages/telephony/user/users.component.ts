import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../../../@core/model/users';
import { UserFormComponent } from './user-form.component';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './users.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UsersComponent implements OnInit {

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
      emp_code: {
        title: 'Emp code',
        type: 'string',
      },
      first_name: {
        title: 'First Name',
        type: 'string',
      },
      last_name: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      phone_number: {
        title: 'Phone number',
        type: 'string',
      },
      roles: {
        title: 'Roles',
        type: 'Array',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UserService, private windowService: NbWindowService) {
  }

  ngOnInit() {
    this.userService.get().subscribe((data) =>  {
      this.source.load(data.data);
    });
  }

   onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
       event.newData['role'] = event.newData['roles'];
       event.newData['roles'] = [event.newData['roles']];
       event.newData['password'] = '12345678';
      this.userService.add(event.newData).subscribe((data) =>  {
        event.confirm.resolve(event.newData);
        alert('Added success');
      });
    } else {
      event.confirm.reject();
    }
}

 onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {

      this.userService.update(event.data.user_id, event.newData).subscribe((data) =>  {
        alert('update success: ' + data.status);
        // console.log(data);
        event.confirm.resolve(event.newData);
        alert('Added success');
      });
    } else {
      event.confirm.reject();
    }
}

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete username: ' + event.data.username)) {
       this.userService.delete(event.data.user_id).subscribe((data) =>  {
        event.confirm.resolve();
    });
    } else {
      event.confirm.reject();
    }
  }

  openWindowForm() {
    this.windowService.open(UserFormComponent, { title: `Add user` });
  }

}
