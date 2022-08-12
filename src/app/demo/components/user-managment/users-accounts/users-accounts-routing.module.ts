import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersAccountsComponent } from './users-accounts.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UsersAccountsComponent }
    ])],
    exports: [RouterModule]
})
export class UsersAccountsRoutingModule { }
