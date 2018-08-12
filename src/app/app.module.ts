import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './shared-components/nav/nav.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component'
import { RecentTasksComponent } from './home/recent-tasks/recent-tasks.component';
import { ProjectsOverviewComponent } from './home/projects-overview/projects-overview.component';
import { TaskCardComponent } from './shared-components/task-card/task-card.component';
import { ProjectCardComponent } from './home/projects-overview/project-card/project-card.component';
import { XrmTabComponent } from './project-detail/xrm-tab/xrm-tab.component';
import { NotesTabComponent } from './project-detail/notes-tab/notes-tab.component';
import { XrmEditComponent } from './project-detail/xrm-tab/xrm-edit/xrm-edit.component';
import { XrmViewComponent } from './project-detail/xrm-tab/xrm-view/xrm-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RecentTasksComponent,
    ProjectsOverviewComponent,
    TaskCardComponent,
    HomeComponent,
    ProjectDetailComponent,
    ProjectCardComponent,
    XrmTabComponent,
    NotesTabComponent,
    XrmEditComponent,
    XrmViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
