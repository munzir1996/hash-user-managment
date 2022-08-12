import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './users-accounts.component.html',
})
export class UsersAccountsComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    tieredItems!: MenuItem[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.tieredItems = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: '/user-managment',
            },
            {
                label: 'Manage Account',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Users Accounts',
                        routerLink: '/user-managment/users-accounts',
                        // icon: 'pi pi-fw pi-list'
                    },
                    {
                        label: 'Users Modules',
                        // icon: 'pi pi-fw pi-search'
                    },
                    {
                        label: 'Users Policies',
                        // icon: 'pi pi-fw pi-search'
                    }

                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-fw pi-chart-bar',
                items: [
                    {
                        label: 'Users Policy Report',
                        // icon: 'pi pi-fw pi-compass',

                    },
                    {
                        label: 'Log Report',
                        // icon: 'pi pi-fw pi-map-marker',

                    },
                ]
            },
            { separator: true },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-out'
            }
        ];
    }

    test() {
        console.log('test');
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
