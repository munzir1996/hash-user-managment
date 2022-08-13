import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

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
                        routerLink: '/user-managment/users-modules',
                        // icon: 'pi pi-fw pi-search'
                    },
                    {
                        label: 'Users Policies',
                        routerLink: '/user-managment/users-policies',
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
                        routerLink: '/user-managment/users-reports',
                        // icon: 'pi pi-fw pi-compass',

                    },
                    {
                        label: 'Log Report',
                        routerLink: '/user-managment/users-log-report',
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
