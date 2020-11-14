import { SidebarModule } from './../../components/sidebar/sidebar.module';
import { NavbarModule } from './../../components/navbar/navbar.module';
import { ClientRoutingModule } from './client.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';



@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NavbarModule,
    SidebarModule
  ]
})
export class ClientModule { }
