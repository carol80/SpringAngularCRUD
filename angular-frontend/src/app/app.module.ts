import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeItemComponent } from './component/employee-item/employee-item.component';
import { ButtonComponent } from './component/tools/button/button.component';
import { WorkspaceComponent } from './component/workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeItemComponent,
    ButtonComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
