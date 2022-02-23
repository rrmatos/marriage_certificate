import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/guards/authentication.guard';
import { ConfComponent } from './pages/conf/conf.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { PokerPlanningComponent } from './pages/poker-planning/poker-planning.component';
import { RetrospectiveComponent } from './pages/retrospective/retrospective.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { CreateUsComponent } from './pages/create-us/create-us.component';
import { CreatePlanningComponent } from './pages/create-planning/create-planning.component';
import { DevPlanningComponent } from './pages/dev-planning/dev-planning.component';
import { UnlogedUserEntryComponent } from './pages/unloged-user-entry/unloged-user-entry.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { LabelsComponent } from './pages/labels/labels.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminGuard } from './helpers/guards/admin.guard';
import { UnlogedGuard } from './helpers/guards/unloged.guard';
import { ResultChartComponent } from './components/result-chart/result-chart.component';
import { ClientGuard } from './helpers/guards/client.guard';
import { CreateBoardComponent } from './pages/create-board/create-board.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackProjectComponent } from './pages/feedback-project/feedback-project.component';
import { CreateFeedbackComponent } from './pages/create-feedback/create-feedback.component';
import { UserSelectComponent } from './components/user-select/user-select.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [UnlogedGuard]
  },
  {
    path: 'sign-up',
    component: RegisterComponent,
    canActivate: [UnlogedGuard],
  },

  {
    path: 'user-account',
    component: UserAccountComponent,
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AdminGuard, AuthGuard],
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AdminGuard, AuthGuard],
  },
  { 
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'update-password',
    component: ForgotPasswordComponent,
    canActivate: [UnlogedGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [UnlogedGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: 'unloged-dev-entry',
    component: UnlogedUserEntryComponent,
    pathMatch: 'full',
  },
  { 
    path: 'test', 
    component: UserSelectComponent
  },
  { path: '404', component: NotFoundComponent },
  { path: 'texd', component: ResultChartComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
