// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { LoginPageComponent } from './login/login.component';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';

const routes: Routes = [
  // Define routes with path and corresponding component
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route
  { path: 'login', component: LoginPageComponent },
  { path: 'employee-list', component: EmployeeListPageComponent },
  { path: 'add-employee', component: AddEmployeePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register routes
  exports: [RouterModule]  // Export RouterModule for use in other modules
})
export class AppRoutingModule { }
