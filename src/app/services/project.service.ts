import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';
import { PROJECTS } from '../models/mock-data';
import { Project } from '../models/project.model';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = PROJECTS;
  project: Project;
  constructor(private route: ActivatedRoute) { }

  /**
   * Get all projects from mock-data.
   * This will become async data later
   */
  getProjects() {
    return this.projects;
  }

  /**
   * Get project to display on project-detail page
   * @param selectedProjectId - the project selected
   */
  getProject(selectedProjectId: number) {
    // Find the selected project based on id
    const selectedProject = this.projects.find(project => project.id === selectedProjectId);

    // Update this service with the current project
    this.project = selectedProject;
    
    return selectedProject;
  }

  /**
   * Set the most recent project the user
   * was working on
   */
  setRecentProject() {
    this.project = this.projects[0];
  }

  /**
   * Get the most recent tasks from the most
   * recent project
   */
  getRecentTasks() {
    this.setRecentProject();
    return this.project.tasks;
  }
}
