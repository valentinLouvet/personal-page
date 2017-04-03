import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'project',
    pathMatch: 'full'
  },
  {
    path: 'project',
    component: ProjectComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
