import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { SampleUserData } from '../../../@core/data/sample-users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { NbAuthSimpleToken, NbAuthService } from '@nebular/auth';
import { filter, map} from 'rxjs/operators';
// import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: SampleUserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private authService: NbAuthService,
             // @Inject(NB_WINDOW) private window,
              ) {
  }

  ngOnInit() {

this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {

        if (token.isValid()) {
          // here we receive a payload from the token and assigne it to our `user` variable
          this.user = token.getValue();
        }

      });

    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
     this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'user-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(
        title => {
          // this.window.alert(`${title} was clicked!`)
          if (title === 'Profile') alert('My profile menu clicked');
          else if (title === 'og out') this.logout();
          else alert(`Other menu clicked ${title}`);
        },
       );
  }

logout(): boolean {

  // return this.authService.logout("email");
  // this.authService.getToken().subscribe(
  //     token => {
  //       token.clear();
  //     }
  //   );

   return true;
}

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
