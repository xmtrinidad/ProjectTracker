import { Injectable } from '@angular/core';
import { PROJECTS } from '../models/mock-data';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = PROJECTS;
  constructor() { }

  /**
   * Get all projects from mock-data.
   * This will become async data later
   */
  getProjects() {
    return this.projects;
  }
}
