import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'project/:id', component: ProjectDetailComponent},
  { path: 'project/:id/:taskId', component: ProjectDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}