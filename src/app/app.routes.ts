import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DepartmentComponent } from './pages/department/department.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'',
        component:LoginComponent,
        children :[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'department',
                component:DepartmentComponent
            }
        ]
    },
];
