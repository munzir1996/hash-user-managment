import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersReportsComponent } from './users-reports.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UsersReportsComponent }
    ])],
    exports: [RouterModule]
})
export class UsersReportsRoutingModule { }
