import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersLogReportComponent } from './users-log-report.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UsersLogReportComponent }
    ])],
    exports: [RouterModule]
})
export class UsersLogReportRoutingModule { }
