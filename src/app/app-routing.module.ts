import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'user-managment', loadChildren: () => import('./demo/components/user-managment/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'user-managment/users-accounts', loadChildren: () => import('./demo/components/user-managment/users-accounts/users-accounts.module').then(m => m.UsersAccountsModule) },
                    { path: 'user-managment/users-modules', loadChildren: () => import('./demo/components/user-managment/users-modules/users-modules.module').then(m => m.UsersModulesModule) },
                    { path: 'user-managment/users-policies', loadChildren: () => import('./demo/components/user-managment/users-policies/users-policies.module').then(m => m.UsersPoliciesModule) },
                    { path: 'user-managment/users-reports', loadChildren: () => import('./demo/components/user-managment/users-reports/users-reports.module').then(m => m.UsersReportsModule) },
                    { path: 'user-managment/users-log-report', loadChildren: () => import('./demo/components/user-managment/users-log-report/users-log-report.module').then(m => m.UsersLogReportModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                ],
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
