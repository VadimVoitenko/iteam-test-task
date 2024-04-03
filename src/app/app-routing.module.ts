import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { DashboardGraphComponent } from './modules/home/pages/dashboard-graph/dashboard-graph.component';
import { AdminComponent } from './modules/home/pages/admin/admin.component';
import { AuthComponent } from './modules/auth/pages/auth/auth.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'dashboard/graph/:id', component: DashboardGraphComponent },
  { path: 'dashboard/admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
