import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DevExtremeModule,
  DxChartModule,
  DxDataGridModule,
  DxFormModule,
} from 'devextreme-angular';
import { GoodsComponent } from './pages/basic/goods/goods.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {
  AutocompleteWithInsertItemModule,
  ChangePasswordFormComponent,
  CreateAccountFormComponent,
  LoginFormComponent,
  ResetPasswordFormComponent,
} from './shared/components';
import { GoodPopupModule } from './shared/components/popups/good-popup/good-popup.component';
import { AuthGuardService } from './shared/services';

const routes: Routes = [
  {
    path: 'basic/goods',
    component: GoodsComponent,
    canActivate: [AuthGuardService],
  },
  // {
  //   path: 'tasks',
  //   component: TasksComponent,
  //   canActivate: [AuthGuardService],
  // },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDataGridModule,
    DxFormModule,
    DxChartModule,
    DevExtremeModule,
    GoodPopupModule,
    AutocompleteWithInsertItemModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    // TasksComponent,
    GoodsComponent,
  ],
})
export class AppRoutingModule {}
