import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { NodeService } from 'src/app/demo/service/node.service';

@Component({
    templateUrl: './users-modules.component.html',
})
export class UsersModulesComponent implements OnInit, OnDestroy {

    files1: TreeNode[] = [];

    selectedFiles1: TreeNode[] = [];

    items!: MenuItem[];

    tieredItems!: MenuItem[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(
        public layoutService: LayoutService,
        private nodeService: NodeService,
        ) {
    }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);

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
