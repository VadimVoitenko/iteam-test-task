import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { DashboardGraphComponent } from './modules/home/pages/dashboard-graph/dashboard-graph.component';
import { AdminComponent } from './modules/home/pages/admin/admin.component';
import { UsersListComponent } from './modules/home/pages/admin/components/users-list/users-list.component';
import { ListComponent } from './modules/home/pages/dashboard/components/list/list.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    DashboardComponent,
    DashboardGraphComponent,
    AdminComponent,
    UsersListComponent,
    ListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
