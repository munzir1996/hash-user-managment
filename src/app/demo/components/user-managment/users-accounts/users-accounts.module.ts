import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersAccountsComponent } from './users-accounts.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { UsersAccountsRoutingModule } from './users-accounts-routing.module';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { StepsModule } from 'primeng/steps';
import {CardModule} from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        UsersAccountsRoutingModule,
        TieredMenuModule,
        MenubarModule,
        MenuModule,
        MegaMenuModule,
        PanelMenuModule,
        MenubarModule,
        BreadcrumbModule,
        InputTextModule,
        TieredMenuModule,
        TabMenuModule,
        ContextMenuModule,
        StepsModule,
        CardModule,
        InputTextareaModule,
        DropdownModule,
        FileUploadModule,
        HttpClientModule,
        CheckboxModule,
        OverlayPanelModule,
    ],
    declarations: [UsersAccountsComponent]
})
export class UsersAccountsModule { }
