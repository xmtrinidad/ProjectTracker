import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { NgbTabset } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @ViewChild('tabs') tabs: NgbTabset;
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.url.subscribe(url =>{
      this.resetToTab('xrm');
      const selectedProjectId = +this.route.snapshot.paramMap.get('id');
      this.project = this.projectService.getProject(selectedProjectId);
    });
    
  }

  /**
   * reset to specified tab
   * @param tabId - the tab id string name
   */
  resetToTab(tabId: string) {
    this.tabs.activeId = tabId;
  }

}
