import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, IUser } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: IUser | null = { email: '' };

  userMenuItems = [
    {
      text: 'پروفایل',
      icon: 'user',
      onClick: () => {
        this.router.navigate(['/profile']);
      },
      disabled: true,
    },
    {
      text: 'خروج',
      icon: 'runner',
      onClick: () => {
        // this.authenticateService.logOut();
      },
    },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUser().then((e) => (this.user = e.data));
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}

@NgModule({
  imports: [CommonModule, DxButtonModule, UserPanelModule, DxToolbarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
