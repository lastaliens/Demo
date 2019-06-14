import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../../../@core/model/users';

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

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) =>  {
      // console.log(data.data);
      this.source.load(data.data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
       this.userService.deleteUser('123');
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
