import { Injectable } from '@angular/core';
import { PROJECTS } from '../models/mock-data';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = PROJECTS;
  project: Project;
  constructor() { }

  /**
   * Get all projects from mock-data.
   * This will become async data later
   */
  getProjects() {
    return this.projects;
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
