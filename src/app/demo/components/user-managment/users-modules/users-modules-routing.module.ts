import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersModulesComponent } from './users-modules.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UsersModulesComponent }
    ])],
    exports: [RouterModule]
})
export class UsersModulesRoutingModule { }
