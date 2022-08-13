import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersPoliciesComponent } from './users-policies.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { UsersPoliciesRoutingModule } from './users-policies-routing.module';
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
import { ListboxModule } from 'primeng/listbox';

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
        UsersPoliciesRoutingModule,
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
        ListboxModule,
    ],
    declarations: [UsersPoliciesComponent]
})
export class UsersPoliciesModule { }
