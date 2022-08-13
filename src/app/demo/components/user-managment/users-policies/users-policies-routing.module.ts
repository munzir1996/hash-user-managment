import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersPoliciesComponent } from './users-policies.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UsersPoliciesComponent }
    ])],
    exports: [RouterModule]
})
export class UsersPoliciesRoutingModule { }
