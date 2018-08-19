import { Injectable } from '@angular/core';

import { PROJECTS } from '../models/mock-data';
import { Project } from '../models/project.model';
import { Xrm } from '../models/xrm.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = PROJECTS;
  project: Project;
  xrm: Xrm;

  constructor() { }

  

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
   * Get the selected task to display on project-detail
   */
  getTask(selectedTaskId: number) {
    return this.project.tasks.find(task => task.taskId === selectedTaskId);
  }

  /**
   * Set the most recent project the user
   * was working on
   */
  setRecentProject() {
    this.project = this.projects[0];
  }

  setCompletedTask(theCompletedTask: Task) {
    const projectIndex = PROJECTS.indexOf(this.project);
    const taskIndex = this.project.tasks.indexOf(theCompletedTask);
    // Set front end
    this.project.tasks[taskIndex].taskCompleted = true;
    // Update back-end later
    PROJECTS[projectIndex].tasks[taskIndex].taskCompleted = true;
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
