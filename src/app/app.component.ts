import { Component, HostBinding } from '@angular/core';
import config from 'devextreme/core/config';
import { locale, loadMessages } from "devextreme/localization";
import { AuthService, ScreenService, AppInfoService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) {
    config({ rtlEnabled: true, defaultCurrency: 'IRR' });
    locale("fa-IR");
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
