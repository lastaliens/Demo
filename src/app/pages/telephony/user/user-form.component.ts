import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { UserService } from '../../../@core/model/users';

@Component({
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss'],
})
export class UserFormComponent {
  user = {
    role: 'AGENT',
    roles: ['AGENT'],
    emp_code: 'tel4vn-',
    email : '',
    first_name : '',
    last_name: '',
    phone_number: '',
    dob: '1985-05-02',
    avatar: '',
    password: '12345678',
  };
  constructor(private userService: UserService, public windowRef: NbWindowRef) {}


  onSubmit() { 
    this.userService.add(this.user).subscribe((data) =>  {
        alert('User ddded success');
        this.windowRef.close();
        // this.windowRef.close(name);
      });
   // alert(this.user.email)
  }


  close() {
    this.windowRef.close();
  }
}
